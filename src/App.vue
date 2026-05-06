<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { site } from './content.js'

const year = new Date().getFullYear()
</script>

<template>
  <div id="top">
    <Analytics />
    <SpeedInsights />
    <a class="skip-link" href="#main">Skip to content</a>
    <AppHeader :site-name="site.nickname" />
    <RouterView />
    <AppFooter :name="site.name" :year="year" />
  </div>
</template>

<style scoped>
#main {
  outline: none;
}
</style>
