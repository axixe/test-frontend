<template>
  <label class="checkbox">
    <input
      v-model="model"
      class="checkbox__element"
      :name="field.name"
      type="checkbox"
      :required="field.required"
      :readonly="field.readonly"
    />

    <span v-if="field.label" class="checkbox__label">{{ field.label }}</span>
  </label>
</template>

<script setup lang="ts">
import type { FormTypes } from "../../global/types/FormTypes.ts";

interface Props {
  field: FormTypes
}

defineProps<Props>()
const model = defineModel<boolean>()
</script>

<style scoped lang="scss">

</style>