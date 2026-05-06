import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import ReferencesPage from './views/ReferencesPage.vue'
import { site } from './content.js'

const baseTitle = `${site.nickname} / ${site.name}`

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage, meta: { title: 'Home' } },
    { path: '/projects', name: 'projects', component: ProjectsPage, meta: { title: 'Projects' } },
    {
      path: '/references',
      name: 'references',
      component: ReferencesPage,
      meta: { title: 'References' },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const page = to.meta.title
  document.title = page ? `${page} · ${baseTitle}` : baseTitle
})

