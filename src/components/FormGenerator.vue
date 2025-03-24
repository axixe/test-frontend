<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div
      v-for="field in settings.fields"
      :key="field.name"
      class="form__element"
    >
      <component
        v-model="modelValue[field.name]"
        :is="getComponentName(field.type)"
        :field="field"
      />

      {{$emit('update:modelValue')}}
    </div>

    <div class="form__control">
      <BaseButton>Подтвердить</BaseButton>
      <BaseButton>Отклонить</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { FormSettings } from "../global/types/FormSettings.ts";
import BaseButton from "./base/BaseButton.vue";
import BaseInput from "./base/BaseInput.vue";
import BaseCheckbox from "./base/BaseCheckbox.vue";
import BaseTextarea from "./base/BaseTextarea.vue";

interface Props {
  settings: FormSettings
}

withDefaults(defineProps<Props>(), {
  settings: [],
})

const getComponentName = (type: string) => {
  const componentNames = {
    input: BaseInput,
    checkbox: 'BaseCheckbox',
    textarea: 'BaseTextarea',
  }

  return componentNames[type]
}

const model = defineModel({ default: () => ({}) });
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;

  &__control {
    display: flex;
    justify-content: space-between;
  }
}
</style>