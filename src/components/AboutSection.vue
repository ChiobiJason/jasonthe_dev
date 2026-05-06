<script setup>
defineProps({
  about: { type: Object, required: true },
})
</script>

<template>
  <section id="about" class="about" aria-labelledby="about-heading">
    <div class="about__inner">
      <div class="about__copy">
        <h2 id="about-heading" class="about__title">{{ about.headline }}</h2>
        <p v-for="(para, i) in about.paragraphs" :key="i" class="about__p">{{ para }}</p>
      </div>
      <dl class="about__facts">
        <template v-for="h in about.highlights" :key="h.label">
          <dt class="about__dt">{{ h.label }}</dt>
          <dd class="about__dd">{{ h.value }}</dd>
        </template>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: var(--space-section) 1.25rem;
}

.about__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  display: grid;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .about__inner {
    grid-template-columns: 1.2fr 1fr;
    align-items: start;
    gap: 3rem;
  }
}

.about__title {
  margin: 0 0 1.25rem;
  font-size: var(--text-2xl);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
}

.about__p {
  margin: 0 0 1rem;
  color: var(--text-secondary);
  max-width: 52ch;
}

.about__p:last-of-type {
  margin-bottom: 0;
}

.about__facts {
  margin: 0;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: var(--bg-elevated);
  border: 1px solid var(--separator);
  box-shadow: var(--shadow-sm);
  display: grid;
  gap: 1rem 1.5rem;
}

@media (min-width: 480px) {
  .about__facts {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 768px) {
  .about__facts {
    grid-template-columns: 1fr;
    padding: 1.75rem;
  }
}

.about__dt {
  margin: 0;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.about__dd {
  margin: 0.25rem 0 0;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--text);
  line-height: var(--leading-snug);
}
</style>
