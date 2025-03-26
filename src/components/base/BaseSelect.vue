<template>
  <label class="select">
    <span v-if="field.label" class="select__label">{{ field.label }}</span>

    <select
      v-model="model"
      class="select__element"
      :name="field.name"
      :required="field.required"
    >
      <option
        v-for="option in field.options"
        class="select__option"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
import type { FormTypes } from "../../global/types/FormTypes.ts";

interface Props {
  field: FormTypes
}

defineProps<Props>()
const model = defineModel<string | number>()
</script>

<style scoped lang="scss">

</style>