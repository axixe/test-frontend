<template>
  <label class="textarea">
    <span v-if="field.label" class="textarea__label">{{ field.label }}</span>

    <textarea
      v-model="model"
      class="textarea__element"
      :name="field.name"
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
.textarea {
  display: flex;
  justify-content: space-between;

  &__element {
    resize: none;
  }
}
</style>