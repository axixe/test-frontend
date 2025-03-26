<template>
  <div class="second-page">
    <h1 class="second-page__title">Страница вторая. Симуляция "оставить отзыв".</h1>
    <p class="second-page__paragraph">Данные при сабмите просто будут сохранены в стейт. При обновлении страницы данные автоматически заполнятся</p>
    <hr>
    <FormGenerator
        v-model="model"
        :settings="settings"
        class="second-page__form"
        @submit="useFormSubmit('feedback')"
        :values="values"
        form-type="feedback"
    />
  </div>
</template>

<script setup lang="ts">
import FormGenerator from "../components/FormGenerator.vue";
import { secondPageMock } from "../mocks/secondPageMock.ts";
import { onMounted, ref } from "vue";
import { useHandleForm } from "../composables/useHandleForm.ts";
import { useStore } from 'vuex'

const store = useStore()

const values = ref<Record<string, string | number | boolean>>({})
const settings: object = secondPageMock()

const model = ref<Record<string, any>>({})

const { useFormSubmit, useFormGetData } = useHandleForm(store)

onMounted(() => {
  const formData = useFormGetData('feedback')

  if (formData) {
    values.value = formData
  }
})
</script>

<style scoped lang="scss">
.second-page {

  &__paragraph {
    font-size: 12px;
    margin-bottom: 20px;
  }

  &__form {
    max-width: 400px;
  }
}
</style>