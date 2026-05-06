<script setup>
defineProps({
  name: { type: String, required: true },
  year: { type: Number, required: true },
})
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner">
      <p class="footer__copy">© {{ year }} {{ name }}. Crafted with care.</p>
      <a href="#top" class="footer__top">Back to top</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 1.5rem 1.25rem calc(1.5rem + env(safe-area-inset-bottom));
  border-top: 1px solid var(--separator);
  background: var(--bg-elevated);
}

.footer__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer__copy {
  margin: 0;
  font-size: var(--text-xs);
  color: var(--text-tertiary);
}

.footer__top {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
}

.footer__top:hover {
  color: var(--accent);
}
</style>
