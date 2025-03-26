<template>
  <div class="first-page">
    <h1 class="first-page__title">Страница первая. Симуляция авторизации.</h1>
    <p class="first-page__paragraph">Данные при сабмите просто будут сохранены в стейт. При обновлении страницы данные автоматически заполнятся</p>
    <hr>
    <FormGenerator
      v-model="model"
      :settings="settings"
      class="first-page__form"
      @submit="useFormSubmit('authorization')"
      :values="values"
      form-type="authorization"
    />
  </div>
</template>

<script setup lang="ts">
import FormGenerator from "../components/FormGenerator.vue";
import { firstPageMock } from "../mocks/firstPageMock.ts";
import { onMounted, ref } from "vue";
import { useHandleForm } from "../composables/useHandleForm.ts";
import { useStore } from 'vuex'

const store = useStore()

const values = ref<Record<string, string | number | boolean>>({})
const settings: object = firstPageMock()

const model = ref<Record<string, any>>({})

const { useFormSubmit, useFormGetData } = useHandleForm(store)

onMounted(() => {
  const formData = useFormGetData('authorization')

  if (formData) {
    values.value = formData
  }
})
</script>

<style scoped lang="scss">
.first-page {

  &__paragraph {
    font-size: 12px;
    margin-bottom: 20px;
  }

  &__form {
    max-width: 400px;
  }
}
</style>