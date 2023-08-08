<script lang="ts" setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="flex h-full">
    <div class="bottom-nav">
      <RouterLink
        to="/"
        class="link"
        :class="{ 'text-neutral-500': !['/', '/results'].includes(route.path) }"
      >
        <div class="i-mdi-home w-6 h-6"></div>
        <div class="text-sm">Home</div>
      </RouterLink>

      <RouterLink to="/tags" class="link" :class="{ 'text-neutral-500': route.path !== '/tags' }">
        <div class="i-mdi-tag-multiple w-6 h-6"></div>
        <div class="text-sm">Tags</div>
      </RouterLink>
    </div>

    <div class="sidebar">
      <div class="logo">LOGO</div>

      <RouterLink
        to="/"
        class="link"
        :class="{ 'text-neutral-500': !['/', '/results'].includes(route.path) }"
      >
        <div class="i-mdi-home w-6 h-6"></div>
        <div class="text-sm">Home</div>
      </RouterLink>

      <RouterLink to="/tags" class="link" :class="{ 'text-neutral-500': route.path !== '/tags' }">
        <div class="i-mdi-tag-multiple w-6 h-6"></div>
        <div class="text-sm">Tags</div>
      </RouterLink>
    </div>

    <main class="w-full h-full">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.bottom-nav {
  @apply md:hidden;
  @apply fixed bottom-0 flex;
}

.sidebar {
  @apply hidden md:flex;
  @apply w-20 bg-zinc-900 border-r border-zinc-700;
  @apply flex-col gap-4 items-center;
}

.logo {
  @apply bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent;
  @apply font-bold;
  @apply py-9.25 text-center;
}

.link {
  @apply flex flex-col gap-1 items-center;
}
</style>
