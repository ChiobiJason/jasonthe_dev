<script setup>
defineProps({
  experience: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="experience" class="experience" aria-labelledby="experience-heading">
    <div class="experience__inner">
      <div class="experience__intro">
        <h2 id="experience-heading" class="experience__title">Experience</h2>
        <p class="experience__subtitle">
          A straight shot through my résumé: teaching, data viz, IT, shipping full-stack stuff, and a lot of customer-facing
          hours.
        </p>
      </div>

      <ol class="experience__timeline" role="list">
        <li
          v-for="(job, index) in experience"
          :key="job.id"
          class="experience__item"
          :class="{ 'experience__item--right': index % 2 === 1 }"
        >
          <article class="job">
            <div class="job__meta">
              <h3 class="job__title">{{ job.title }}</h3>
              <p class="job__company">{{ job.company }}</p>
              <p class="job__period">
                <span class="job__dates">{{ job.period }}</span>
                <span class="job__sep" aria-hidden="true">·</span>
                <span class="job__location">{{ job.location }}</span>
              </p>
            </div>
            <ul class="job__bullets">
              <li v-for="(b, i) in job.bullets" :key="i">{{ b }}</li>
            </ul>
          </article>
          <div class="experience__axis" aria-hidden="true">
            <span class="experience__point" />
          </div>
          <div class="experience__spacer" aria-hidden="true" />
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: var(--space-section) 1.25rem;
  overflow-x: clip;
}

.experience__inner {
  max-width: var(--content-max);
  margin: 0 auto;
}

.experience__intro {
  max-width: 36rem;
  margin-bottom: clamp(2.5rem, 6vw, 3.5rem);
}

.experience__title {
  margin: 0 0 0.75rem;
  font-size: var(--text-2xl);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
}

.experience__subtitle {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: var(--leading-body);
}

/* Mobile: centered axis, full-width cards stacked */
.experience__timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.experience__timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.4rem;
  bottom: 0.4rem;
  width: 2px;
  background: var(--separator-strong);
  border-radius: 1px;
  z-index: 0;
}

.experience__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.experience__item:last-child {
  padding-bottom: 0;
}

.experience__axis {
  order: 1;
  display: flex;
  justify-content: center;
  padding: 0 0 0.85rem;
}

.experience__point {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--bg);
  border: 2px solid var(--text-secondary);
  box-shadow: 0 0 0 3px var(--bg);
  z-index: 1;
}

.job {
  order: 2;
  width: 100%;
  max-width: 36rem;
  text-align: left;
}

.experience__spacer {
  display: none;
}

/* Tablet+: alternating left / right of center line */
@media (min-width: 768px) {
  .experience__point {
    width: 14px;
    height: 14px;
    box-shadow: 0 0 0 4px var(--bg);
  }

  .experience__item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 22px minmax(0, 1fr);
    align-items: start;
    column-gap: clamp(1rem, 3vw, 1.75rem);
    padding-bottom: 2.25rem;
  }

  .experience__axis {
    order: unset;
    grid-column: 2;
    grid-row: 1;
    padding: 0.28rem 0 0;
    display: flex;
    justify-content: center;
  }

  .experience__spacer {
    display: block;
    grid-row: 1;
    min-height: 1px;
  }

  /* Default: card on the left of the line */
  .experience__item .job {
    order: unset;
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    width: 100%;
    max-width: min(100%, 38ch);
    text-align: left;
  }

  .experience__item .experience__spacer {
    grid-column: 3;
  }

  /* Odd rows: card on the right */
  .experience__item--right .job {
    grid-column: 3;
    justify-self: start;
  }

  .experience__item--right .experience__spacer {
    grid-column: 1;
  }
}

.job__meta {
  margin-bottom: 1rem;
}

.job__title {
  margin: 0 0 0.25rem;
  font-size: var(--text-lg);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
}

.job__company {
  margin: 0 0 0.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text);
}

.job__period {
  margin: 0;
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.job__sep {
  opacity: 0.6;
}

.job__bullets {
  margin: 0;
  padding: 0 0 0 1.15rem;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.55;
}

.job__bullets li {
  margin-bottom: 0.4rem;
}

.job__bullets li:last-child {
  margin-bottom: 0;
}
</style>
