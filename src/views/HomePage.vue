<script setup>
import HeroSection from '../components/HeroSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import WorkSection from '../components/WorkSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import { site, experience, projects, about } from '../content.js'

const featured = projects
  .filter((p) => p.featured)
  .slice()
  .sort((a, b) => (a.homeOrder ?? 999) - (b.homeOrder ?? 999))
  .slice(0, 4)
</script>

<template>
  <main id="main">
    <HeroSection
      :name="site.name"
      :nickname="site.nickname"
      :role="site.role"
      :tagline="site.tagline"
      :location="site.location"
      :profile-photo="site.profilePhoto"
      :resume-url="site.resumeUrl"
    />
    <ExperienceSection :experience="experience" />
    <WorkSection :projects="featured" :show-view-all="true" />
    <AboutSection :about="about" />
    <ContactSection :email="site.email" :phone="site.phone" :social="site.social" />
  </main>
</template>

