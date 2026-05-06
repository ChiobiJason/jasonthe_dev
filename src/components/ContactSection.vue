<script setup>
defineProps({
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  social: { type: Array, required: true },
})

function telHref(phone) {
  const digits = phone.replace(/\D/g, '')
  return digits ? `tel:${digits}` : '#'
}
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-heading">
    <div class="contact__inner">
      <h2 id="contact-heading" class="contact__title">Let’s build something great</h2>
      <p class="contact__lede">
        Open to full-time software engineering roles, freelance, and interesting projects. Email or call is fine. I usually get
        back within a couple of days.
      </p>
      <div class="contact__actions">
        <div class="contact__direct">
          <a class="contact__email" :href="`mailto:${email}`">{{ email }}</a>
          <a v-if="phone" class="contact__phone" :href="telHref(phone)">{{ phone }}</a>
        </div>
        <ul class="contact__social" aria-label="Social links">
          <li v-for="s in social" :key="s.label">
            <a :href="s.href" rel="noopener noreferrer" target="_blank">{{ s.label }}</a>
          </li>
        </ul>
        <a class="contact__refs" href="/references">View references</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: var(--space-section) 1.25rem calc(var(--space-section) + env(safe-area-inset-bottom));
  background: linear-gradient(180deg, var(--bg) 0%, #f5f5f7 100%);
  border-top: 1px solid var(--separator);
}

.contact__inner {
  max-width: var(--content-max);
  margin: 0 auto;
}

.contact__title {
  margin: 0 0 0.75rem;
  font-size: var(--text-2xl);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
  max-width: 20ch;
}

.contact__lede {
  margin: 0 0 1.75rem;
  max-width: 42ch;
  color: var(--text-secondary);
  font-size: var(--text-base);
}

.contact__actions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__direct {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.contact__email {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
}

.contact__email:hover {
  text-decoration: underline;
  color: var(--accent-hover);
}

.contact__phone {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
}

.contact__phone:hover {
  color: var(--accent);
  text-decoration: underline;
}

.contact__social {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
}

.contact__social a {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
}

.contact__social a:hover {
  color: var(--accent);
  text-decoration: underline;
}

.contact__refs {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  width: fit-content;
  padding: 0 1rem;
  border-radius: 980px;
  border: 1px solid var(--separator-strong);
  background: rgba(0, 0, 0, 0.02);
  color: var(--text);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  text-decoration: none;
}

.contact__refs:hover {
  color: var(--accent);
  text-decoration: none;
}
</style>
