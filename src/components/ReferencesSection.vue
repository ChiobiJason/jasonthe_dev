<script setup>
defineProps({
  references: {
    type: Array,
    required: true,
  },
})

function telHref(phone) {
  const digits = String(phone || '').replace(/\D/g, '')
  return digits ? `tel:${digits}` : '#'
}
</script>

<template>
  <section id="references" class="refs" aria-labelledby="refs-heading">
    <div class="refs__inner">
      <div class="refs__intro">
        <h2 id="refs-heading" class="refs__title">References</h2>
        <p class="refs__subtitle">
          Professional references available on request. You can reach them using the contact details below.
        </p>
      </div>

      <ul class="refs__grid" role="list">
        <li v-for="r in references" :key="r.id" class="refs__item">
          <article class="card">
            <div class="card__top">
              <h3 class="card__name">{{ r.name }}</h3>
              <p class="card__role">{{ r.title }}</p>
              <p class="card__org">{{ r.org }}</p>
            </div>

            <div class="card__contacts">
              <a v-if="r.email" class="card__contact" :href="`mailto:${r.email}`">{{ r.email }}</a>
              <a v-if="r.phone" class="card__contact" :href="telHref(r.phone)">{{ r.phone }}</a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.refs {
  padding: var(--space-section) 1.25rem;
  background: var(--bg-elevated);
  border-top: 1px solid var(--separator);
}

.refs__inner {
  max-width: var(--content-max);
  margin: 0 auto;
}

.refs__intro {
  max-width: 42rem;
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.refs__title {
  margin: 0 0 0.75rem;
  font-size: var(--text-2xl);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
}

.refs__subtitle {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: var(--leading-body);
}

.refs__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

@media (min-width: 720px) {
  .refs__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .refs__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card {
  height: 100%;
  border-radius: var(--radius-lg);
  background: var(--bg);
  border: 1px solid var(--separator);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem 1.25rem 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.card__name {
  margin: 0 0 0.35rem;
  font-size: var(--text-lg);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
}

.card__role {
  margin: 0 0 0.15rem;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text);
}

.card__org {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.card__contacts {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.card__contact {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  padding: 0 0.25rem;
  border-radius: 8px;
}

.card__contact:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}
</style>

