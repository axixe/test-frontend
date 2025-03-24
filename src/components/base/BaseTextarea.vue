<template>
  <label class="textarea">
    <span v-if="label" class="textarea__label">{{ label }}</span>

    <textarea
      v-model="model"
      class="textarea__element"
      :name="name"
      :required="required"
      :readonly="readonly"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', model)"
    />
  </label>
</template>

<script setup lang="ts">
interface Props {
  label: string
  name: string
  required?: boolean
  readonly?: boolean
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  required: false,
  readonly: false,
})

defineModel('model')
</script>

<style scoped lang="scss">

</style>