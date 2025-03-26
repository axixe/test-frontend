<template>
  <div class="tab-list">
    <RouterLink
        v-for="({ numbering, link }, index) in pages"
        :to="`/${link}`"
        :key="index"
    >
      <BaseButton :type="ButtonEnum.default">{{ numbering }} страница</BaseButton>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./base/BaseButton.vue";
import { ButtonEnum } from "../global/enums/ButtonEnum.ts";

const pages = [
  {
    numbering: 'Первая',
    link: ''
  },
  {
    numbering: 'Вторая',
    link: 'second'
  },
  {
    numbering: 'Третья',
    link: 'third'
  },
]
</script>

<style scoped lang="scss">
.tab-list {
  display: flex;
  gap: 32px;
}
</style>