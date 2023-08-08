<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { UseImage } from '@vueuse/components';

interface TagItem {
  tag: string;
  title: string;
  subtitle: string;
}

const tagsList = ref<TagItem[]>([]);

onMounted(() => {
  tagsList.value = [
    { tag: 'cool', title: 'Cool', subtitle: '350 Results' },
    { tag: 'beautifl', title: 'Beautifl', subtitle: '350 Results' },
    { tag: 'easy', title: 'Easy', subtitle: '350 Results' },
    { tag: 'summary', title: 'Summary', subtitle: '350 Results' },
    { tag: 'hot', title: 'Hot', subtitle: '350 Results' },

    { tag: 'passage-specific', title: 'Passage Specific', subtitle: '50 Questions' },
    { tag: 'very-long-tag', title: 'Very long taaaaaaaaaaaag', subtitle: '50 Questions' },
  ];
});
</script>

<template>
  <div class="container mx-auto md:w-211.5 my-20">
    <div class="text-3xl mb-6.75">Tags</div>

    <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
      <div v-for="tagItem in tagsList" :key="tagItem.tag">
        <div class="bg-neutral-800 h-37.5 rounded">
          <div class="truncate">{{ tagItem.title }}</div>
        </div>

        <div class="truncate">{{ tagItem.title }}</div>
        <div>{{ tagItem.subtitle }}</div>
      </div>
    </div>
  </div>
</template>
