<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import Button from '~/components/Button.vue';
import Slider from '~/components/Slider.vue';
import TextField from '~/components/TextField.vue';

const router = useRouter();

const searchForm = reactive({
  search: '',
  perPage: '30',
});

const doSearch = () => {
  router.push('/search');
};
</script>

<template>
  <div class="container mx-auto md:w-211.5 h-full flex flex-col p-4">
    <div class="flex flex-col gap-4 mb-13.5">
      <div class="text-2xl mt-13.5">Search</div>
      <TextField v-model:value="searchForm.search" autocomplete="off" />
    </div>

    <div class="flex flex-col gap-4">
      <div class="text-2xl"># of results per page</div>

      <div>
        <span class="text-5xl font-bold">{{ searchForm.perPage }}</span> results
      </div>

      <Slider v-model:value="searchForm.perPage" min="3" max="50" />
    </div>

    <div class="flex-1"></div>

    <Button class="w-85.75 mb-13.5" @click="doSearch">Search</Button>
  </div>
</template>
