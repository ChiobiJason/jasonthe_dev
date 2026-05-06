<script setup>
defineProps({
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  role: { type: String, required: true },
  tagline: { type: String, required: true },
  location: { type: String, required: true },
  profilePhoto: { type: String, default: '' },
  resumeUrl: { type: String, default: '' },
})
</script>

<template>
  <section class="hero" aria-labelledby="hero-heading">
    <div class="hero__inner">
      <figure v-if="profilePhoto" class="hero__figure">
        <img
          class="hero__photo"
          :src="profilePhoto"
          :alt="`${name}, profile photo`"
          width="280"
          height="280"
          decoding="async"
          fetchpriority="high"
        />
      </figure>
      <div class="hero__content">
        <p class="hero__eyebrow">{{ role }}</p>
        <h1 id="hero-heading" class="hero__title">
          {{ name }}
          <span class="hero__title-dot" aria-hidden="true">.</span>
        </h1>
        <p class="hero__handle">Online I usually go by <span class="hero__handle-mono">{{ nickname }}</span></p>
        <p class="hero__tagline">{{ tagline }}</p>
        <p class="hero__meta">{{ location }}</p>
        <div class="hero__actions">
          <a class="hero__btn hero__btn--primary" href="#experience">See experience</a>
          <a class="hero__btn hero__btn--ghost" href="#projects">View projects</a>
          <a
            v-if="resumeUrl"
            class="hero__btn hero__btn--ghost"
            :href="resumeUrl"
            download
          >
            Download résumé
          </a>
          <a class="hero__btn hero__btn--ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: clamp(2.5rem, 8vw, 4rem) 1.25rem var(--space-section);
}

.hero__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  .hero__inner {
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: clamp(2rem, 5vw, 3.5rem);
  }
}

.hero__figure {
  margin: 0;
  flex-shrink: 0;
}

.hero__photo {
  width: min(200px, 70vw);
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--separator);
}

@media (min-width: 768px) {
  .hero__photo {
    width: min(240px, 28vw);
  }
}

.hero__content {
  min-width: 0;
  flex: 1;
}

.hero__eyebrow {
  margin: 0 0 0.75rem;
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  color: var(--text-secondary);
}

.hero__handle {
  margin: -0.5rem 0 1rem;
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  line-height: var(--leading-snug);
}

.hero__handle-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-weight: 500;
  color: var(--text-secondary);
}

.hero__title {
  margin: 0 0 1.25rem;
  font-size: var(--text-hero);
  font-weight: 600;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text);
}

.hero__title-dot {
  color: var(--accent);
}

.hero__tagline {
  margin: 0 0 1rem;
  max-width: 36rem;
  font-size: var(--text-xl);
  line-height: var(--leading-snug);
  color: var(--text-secondary);
}

.hero__meta {
  margin: 0 0 2rem;
  font-size: var(--text-sm);
  color: var(--text-tertiary);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.25rem;
  border-radius: 980px;
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  transition: background-color var(--duration) var(--ease), color var(--duration) var(--ease),
    box-shadow var(--duration) var(--ease), transform var(--duration) var(--ease);
}

.hero__btn--primary {
  background: var(--accent);
  color: #fff;
  box-shadow: var(--shadow-sm);
}

.hero__btn--primary:hover {
  background: var(--accent-hover);
  color: #fff;
  text-decoration: none;
  box-shadow: var(--shadow-md);
}

.hero__btn--ghost {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--separator-strong);
}

.hero__btn--ghost:hover {
  background: rgba(0, 0, 0, 0.03);
  color: var(--accent-hover);
  text-decoration: none;
}

@media (prefers-reduced-motion: no-preference) {
  .hero__btn--primary:hover {
    transform: translateY(-1px);
  }
}
</style>
