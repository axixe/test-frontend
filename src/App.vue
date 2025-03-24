<template>
  <FormGenerator
    :settings="settings"
  >

  </FormGenerator>
</template>

<script setup lang="ts">
import FormGenerator from "./components/FormGenerator.vue";
import type { FormSettings } from "./global/types/FormSettings.ts";

const settings: FormSettings = {
  fields: [
    {
      type: 'input',
      name: 'username',
      label: 'Username',
      placeholder: 'Enter your username',
      required: true,
    },
    {
      type: 'input',
      name: 'password',
      label: 'password',
      placeholder: 'Enter your password',
      required: true,
    },
    {
      type: 'input',
      name: 'email',
      label: 'email',
      placeholder: 'Enter your email',
      required: true,
    },
  ]
}
</script>

<style>

</style>
