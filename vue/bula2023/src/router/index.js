import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import team from '../views/Team.vue'
import faqs from '../views/FAQs.vue'
import faq from '../views/FAQ.vue'
import map from '../views/Map.vue'

const routes = [
  {
    path: '/:pathMatch*',
    name: 'Home',
    component: Home
  },
  {
    path:'/team',
    name: 'team',
    component: team
  },
  {
    path:'/faq',
    name: 'faqs',
    component: faqs
  },
  {
    path: '/faq/:tag',
    name: 'faq',
    component: faq,
    props: true
  },
  {
    path:'/karte',
    name: 'karte',
    component: map
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {top: 0}
  }
})

export default router
