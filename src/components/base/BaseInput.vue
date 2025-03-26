<template>
  <label class="input">
    <span v-if="field.label" class="input__label">{{ field.label }}</span>

    <input
      v-model="model"
      class="input__element"
      :name="field.name"
      :type="field.type"
      :required="field.required"
      :readonly="field.readonly"
      :placeholder="field.placeholder"
    />
  </label>
</template>

<script setup lang="ts">
import type { FormTypes } from "../../global/types/FormTypes.ts";

interface Props {
  field: FormTypes
}

defineProps<Props>()
const model = defineModel<string>()
</script>

<style scoped lang="scss">
.input {
  display: flex;
  justify-content: space-between;
  //gap: 12px;
}
</style>