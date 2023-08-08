<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    value?: string;
    min?: string;
    max?: string;
    step?: string;
    disabled?: boolean;
  }>(),
  {
    value: '0',
    min: '0',
    max: '100',
    step: '1',
  },
);

const emit = defineEmits<{
  (evt: 'update:value', val: string): void;
  (evt: 'change', val: string): void;
}>();

const sliderValue = computed({
  get: () => props.value,
  set: (val) => emit('update:value', val),
});

const backgroundSize = ref('0 100%');
const left = ref('0');

watch(
  () => sliderValue.value,
  (val) => {
    const _val = Number(val);
    const _min = Number(props.min);
    const _max = Number(props.max);
    const percentage = ((_val - _min) * 100) / (_max - _min);

    backgroundSize.value = `${percentage}% 100%`;
    left.value = `calc(${percentage}% + (${8 - percentage * 0.15}px))`;
  },
  { immediate: true },
);
</script>

<template>
  <div class="slider">
    <input
      v-model="sliderValue"
      v-bind="$attrs"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      class="slider-input"
      :style="{ 'background-size': backgroundSize }"
    />

    <div class="flex relative">
      <div>{{ min }}</div>
      <div class="absolute left-14.5">6</div>
      <div class="absolute left-27.5">9</div>
      <div class="absolute left-40">12</div>
      <div class="absolute left-53">15</div>
      <div class="absolute right-0">{{ max }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  @apply w-full relative;
}

.slider-input {
  @apply appearance-none outline-none cursor-pointer;
  @apply w-full h-2 bg-slate-400/60 rounded;
  @apply bg-gradient-to-r from-orange-600 to-amber-300 bg-no-repeat;

  &::-webkit-slider-thumb {
    @apply appearance-none cursor-ew-resize;
    @apply w-5 h-5 bg-amber-300 rounded-full shadow transition;
  }
}
</style>
