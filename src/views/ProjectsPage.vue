<script setup>
import WorkSection from '../components/WorkSection.vue'
import { projects } from '../content.js'

const sorted = projects
  .slice()
  .sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999) || a.title.localeCompare(b.title))
</script>

<template>
  <main id="main">
    <WorkSection :projects="sorted" :show-view-all="false" />
  </main>
</template>

