import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import ReferencesPage from './views/ReferencesPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/references', name: 'references', component: ReferencesPage },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

