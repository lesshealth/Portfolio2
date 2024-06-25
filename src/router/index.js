import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'ProjectsView',
    component: ProjectsView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
