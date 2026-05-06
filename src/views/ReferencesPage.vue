<script setup>
import ReferencesSection from '../components/ReferencesSection.vue'
import { references } from '../content.js'
</script>

<template>
  <main id="main">
    <ReferencesSection :references="references" />
  </main>
</template>

