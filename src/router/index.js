import { createRouter, createWebHistory } from 'vue-router'
import HomeView from 'src\views\HomeView.vue'
import AboutView from 'src\views\AboutView.vue'
import ContactView from 'src\views\ContactView.vue'
import ProjectView from 'src\views\ProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
