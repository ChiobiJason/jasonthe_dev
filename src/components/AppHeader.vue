<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  siteName: { type: String, required: true },
})

const open = ref(false)
const navId = 'site-nav'

function closeMenu() {
  open.value = false
}

function toggleMenu() {
  open.value = !open.value
}

watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

let mq
function onMqChange() {
  if (mq?.matches) closeMenu()
}

onMounted(() => {
  mq = window.matchMedia('(min-width: 768px)')
  mq.addEventListener('change', onMqChange)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  mq?.removeEventListener('change', onMqChange)
})
</script>

<template>
  <header class="header" role="banner">
    <div class="header__inner">
      <a href="/#top" class="header__brand" @click="closeMenu">{{ siteName }}</a>

      <button
        type="button"
        class="header__menu-btn"
        :aria-expanded="open"
        :aria-controls="navId"
        aria-label="Menu"
        @click="toggleMenu"
      >
        <span class="header__menu-icon" :data-open="open" />
      </button>

      <nav :id="navId" class="header__nav" :data-open="open" aria-label="Primary">
        <ul class="header__links">
          <li><a href="/#experience" @click="closeMenu">Experience</a></li>
          <li><a href="/#projects" @click="closeMenu">Projects</a></li>
          <li><a href="/#about" @click="closeMenu">About</a></li>
          <li><a href="/references" @click="closeMenu">References</a></li>
          <li><a href="/#contact" @click="closeMenu">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(251, 251, 253, 0.72);
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  border-bottom: 1px solid var(--separator);
}

@supports (padding: max(0px)) {
  .header {
    padding-left: max(0px, env(safe-area-inset-left));
    padding-right: max(0px, env(safe-area-inset-right));
  }
}

.header__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0.875rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.header__brand {
  font-weight: 600;
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-tight);
  color: var(--text);
  text-decoration: none;
}

.header__brand:hover {
  color: var(--text);
  text-decoration: none;
}

.header__menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0 -0.5rem 0 0;
  padding: 0;
  border: none;
  border-radius: var(--radius-sm);
  background: transparent;
  cursor: pointer;
  color: var(--text);
}

@media (min-width: 768px) {
  .header__menu-btn {
    display: none;
  }
}

.header__menu-icon {
  position: relative;
  width: 18px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition: background var(--duration) var(--ease);
}

.header__menu-icon::before,
.header__menu-icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 18px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition: transform var(--duration) var(--ease), top var(--duration) var(--ease);
}

.header__menu-icon::before {
  top: -6px;
}

.header__menu-icon::after {
  top: 6px;
}

.header__menu-icon[data-open='true'] {
  background: transparent;
}

.header__menu-icon[data-open='true']::before {
  top: 0;
  transform: rotate(45deg);
}

.header__menu-icon[data-open='true']::after {
  top: 0;
  transform: rotate(-45deg);
}

.header__nav {
  display: block;
}

@media (max-width: 767px) {
  .header__nav {
    display: none;
  }

  .header__nav[data-open='true'] {
    display: flex;
    position: fixed;
    inset: 57px 0 0;
    padding: 1.5rem 1.25rem calc(1.5rem + env(safe-area-inset-bottom));
    background: var(--bg);
    border-top: 1px solid var(--separator);
    flex-direction: column;
    animation: fadeIn var(--duration) var(--ease);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.header__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

@media (min-width: 768px) {
  .header__links {
    flex-direction: row;
    align-items: center;
    gap: 1.75rem;
  }
}

.header__links a {
  display: block;
  padding: 0.75rem 0;
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  letter-spacing: var(--tracking-tight);
}

@media (min-width: 768px) {
  .header__links a {
    padding: 0.5rem 0;
    font-size: var(--text-sm);
    font-weight: 500;
  }
}

.header__links a:hover {
  color: var(--text-secondary);
  text-decoration: none;
}
</style>
