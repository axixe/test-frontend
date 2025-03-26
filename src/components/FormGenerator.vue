<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div
      v-for="field in settings.fields"
      :key="field.name"
      class="form__element"
    >
      <slot :name="`field-${field.name}`">
        <component
            v-model="model[field.name]"
            :is="getComponentName(field.type)"
            :field="field"
        />
      </slot>
    </div>

    <div class="form__control">
      <BaseButton class="button--submit" :type="ButtonEnum.submit">Подтвердить</BaseButton>
      <BaseButton class="button--decline" :type="ButtonEnum.default" @click.prevent="handleClearForm">Отклонить</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { FormSettings } from "../global/types/FormSettings.ts";
import type { FormTypes } from "../global/types/FormTypes.ts";
import { ButtonEnum } from "../global/enums/ButtonEnum.ts";
import BaseButton from "./base/BaseButton.vue";
import BaseInput from "./base/BaseInput.vue";
import BaseCheckbox from "./base/BaseCheckbox.vue";
import BaseTextarea from "./base/BaseTextarea.vue";
import BaseSelect from "./base/BaseSelect.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex"
import { useHandleForm } from "../composables/useHandleForm.ts";

interface Props {
  settings: FormSettings
  values?: Record<string, string | number | boolean>
  formType: string
}

const model = ref<Record<string, any>>({})
const props = defineProps<Props>()
const store = useStore()
const { useFormClear } = useHandleForm(store)

const getComponentName = (type: FormTypes['type']) => {
  const componentNames = {
    text: BaseInput,
    password: BaseInput,
    checkbox: BaseCheckbox,
    textarea: BaseTextarea,
    select: BaseSelect,
  }

  return componentNames[type]
}

const handlePropModelValues = () => {
  const settingFields = props.settings?.fields
  const values = props.values


  if (!settingFields || !values || Object.keys(values).length === 0) return

  settingFields.forEach((field: { name: string }) => {
    if (!props.values) return

    model.value[field.name] = values[field.name]
  })
}

const handleSubmit = () => {
  store.dispatch('forms/saveFormData', {
    formName: props.formType,
    data: model.value,
  })
}

const handleClearForm = () => {
  model.value = {}
  useFormClear(props.formType)
}

watch(() => props.values, (newValues) => {
  if (newValues) {
    handlePropModelValues()
  }
}, { deep: true })
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__control {
    display: flex;
    justify-content: space-between;
  }
}
</style>