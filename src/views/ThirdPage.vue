<template>
  <div class="third-page">
    <h1 class="third-page__title">Страница третья. Симуляция фильтрации.</h1>
    <p class="third-page__paragraph">Данные при сабмите просто будут сохранены в стейт. При обновлении страницы данные автоматически заполнятся</p>
    <hr>
    <FormGenerator
      v-model="model"
      :settings="settings"
      class="third-page__form"
      @submit="useFormSubmit('filter')"
      :values="values"
      form-type="filter"
    />
  </div>
</template>

<script setup lang="ts">
import FormGenerator from "../components/FormGenerator.vue";
import { thirdPageMock } from "../mocks/thirdPageMock.ts";
import { onMounted, ref } from "vue";
import { useHandleForm } from "../composables/useHandleForm.ts";
import { useStore } from 'vuex'

const store = useStore()

const values = ref<Record<string, string | number | boolean>>({})
const settings: object = thirdPageMock()

const model = ref<Record<string, any>>({})

const { useFormSubmit, useFormGetData } = useHandleForm(store)

onMounted(() => {
  const formData = useFormGetData('filter')

  if (formData) {
    values.value = formData
  }
})
</script>

<style scoped lang="scss">
.third-page {

  &__paragraph {
    font-size: 12px;
    margin-bottom: 20px;
  }

  &__form {
    max-width: 400px;
  }
}
</style>