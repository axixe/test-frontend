<template>
  <label class="checkbox">
    <span v-if="label" class="checkbox__label">{{ label }}</span>

    <input
      v-model="model"
      class="checkbox__element"
      :name="name"
      type="checkbox"
      :required="required"
      :readonly="readonly"
      @change="$emit('update:modelValue', model)"
    />
  </label>
</template>

<script setup lang="ts">
interface Props {
  label: string
  name: string
  required?: boolean
  readonly?: boolean
}

withDefaults(defineProps<Props>(), {
  required: false,
  readonly: false,
})

defineModel('model')
</script>

<style scoped lang="scss">

</style>