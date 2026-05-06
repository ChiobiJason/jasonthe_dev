<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
  showViewAll: {
    type: Boolean,
    default: false,
  },
})

function primaryHref(p) {
  return p.live || p.repo || null
}
</script>

<template>
  <section id="projects" class="work" aria-labelledby="projects-heading">
    <div class="work__inner">
      <div class="work__intro">
        <div class="work__title-row">
          <h2 id="projects-heading" class="work__title">Projects</h2>
          <a v-if="showViewAll" class="work__viewall" href="/projects">View all</a>
        </div>
        <p class="work__subtitle">
          A few things I’ve shipped. The full list (with links) is on the projects page.
        </p>
      </div>

      <ul class="work__list">
        <li v-for="p in projects" :key="p.id" class="work__item">
          <article class="card">
            <component
              :is="primaryHref(p) ? 'a' : 'div'"
              class="card__link"
              :class="{ 'card__link--static': !primaryHref(p) }"
              v-bind="
                primaryHref(p)
                  ? { href: primaryHref(p), rel: 'noopener noreferrer', target: '_blank' }
                  : {}
              "
            >
              <div class="card__visual" :style="{ background: p.accent }">
                <img
                  v-if="p.screenshot"
                  class="card__image"
                  :src="p.screenshot"
                  :alt="`${p.title} screenshot`"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="card__body">
                <h3 class="card__title">{{ p.title }}</h3>
                <p class="card__summary">{{ p.summary }}</p>
                <ul class="card__tags">
                  <li v-for="tag in p.tags" :key="tag" class="card__tag">{{ tag }}</li>
                </ul>
                <div class="card__actions" @click.stop>
                  <a
                    v-if="p.live"
                    class="card__btn card__btn--primary"
                    :href="p.live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    v-if="p.repo"
                    class="card__btn card__btn--ghost"
                    :href="p.repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </component>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.work {
  padding: var(--space-section) 1.25rem;
  background: var(--bg-elevated);
  border-top: 1px solid var(--separator);
  border-bottom: 1px solid var(--separator);
}

.work__inner {
  max-width: var(--content-max);
  margin: 0 auto;
}

.work__intro {
  max-width: 36rem;
  margin-bottom: clamp(2.5rem, 6vw, 3.5rem);
}

.work__title {
  margin: 0 0 0.75rem;
  font-size: var(--text-2xl);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
}

.work__title-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.work__viewall {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0 0.25rem;
  border-radius: 8px;
}

.work__viewall:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}

.work__subtitle {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: var(--leading-body);
}

.work__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .work__list {
    gap: 1.5rem;
  }
}

.card {
  border-radius: var(--radius-lg);
  background: var(--bg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--separator);
  overflow: hidden;
  transition: box-shadow var(--duration) var(--ease), border-color var(--duration) var(--ease),
    transform var(--duration) var(--ease);
}

@media (prefers-reduced-motion: no-preference) {
  @media (hover: hover) {
    .card:hover {
      box-shadow: var(--shadow-md);
      border-color: var(--separator-strong);
      transform: translateY(-2px);
    }
  }
}

.card__link {
  display: grid;
  grid-template-columns: 1fr;
  text-decoration: none;
  color: inherit;
}

.card__link--static {
  cursor: default;
}

@media (min-width: 768px) {
  .card__link {
    grid-template-columns: minmax(0, 280px) 1fr;
  }
}

.card__link:hover {
  text-decoration: none;
  color: inherit;
}

.card__visual {
  min-height: 160px;
  aspect-ratio: 16 / 10;
  position: relative;
  overflow: hidden;
}

.card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

@media (min-width: 768px) {
  .card__visual {
    min-height: 100%;
    aspect-ratio: auto;
  }
}

.card__body {
  padding: 1.5rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card__role {
  margin: 0;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.card__title {
  margin: 0;
  font-size: var(--text-xl);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
}

.card__summary {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.55;
  max-width: 52ch;
}

.card__tags {
  list-style: none;
  margin: 0.25rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card__tag {
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.05);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--text-secondary);
}

.card__actions {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 0.9rem;
  border-radius: 980px;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  text-decoration: none;
  border: 1px solid var(--separator-strong);
}

.card__btn--primary {
  background: var(--accent);
  border-color: transparent;
  color: #fff;
}

.card__btn--primary:hover {
  background: var(--accent-hover);
  color: #fff;
}

.card__btn--ghost {
  background: rgba(0, 0, 0, 0.02);
  color: var(--text);
}

.card__btn--ghost:hover {
  color: var(--accent);
}
</style>
