<template>
  <button :type="type" class="button">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import type { ButtonEnum } from "../../global/enums/ButtonEnum.ts";

interface Props {
  type: ButtonEnum.default | ButtonEnum.submit
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.button {
  border: 1px solid transparent;

  @media screen and (hover: hover) {
    &:hover {
      border-color: #ffffff;
    }
  }

  &:active {
    border-color: #ffffff;
  }

  &--submit {
    background: #2b4a2e;
  }

  &--decline {
    background: #592b2b;
  }
}
</style>