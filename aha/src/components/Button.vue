<script lang="ts" setup>
defineProps<{
  disabled?: boolean;
}>();
</script>

<template>
  <button
    v-bind="$attrs"
    type="button"
    class="button"
    :class="{
      'opacity-60 cursor-not-allowed': disabled,
    }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply flex justify-center items-center gap-2 px-4 py-3.25 border rounded uppercase text-sm font-bold;
  @apply bg-neutral-200 hover:bg-neutral-900 text-neutral-900 hover:text-neutral-200;
}
</style>
