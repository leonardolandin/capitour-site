import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Admin from '@/views/backoffice/Admin.vue'
import Accommodation from '@/views/Accommodation.vue'
import Quadricycle from '@/views/Quadricycle.vue'
import BananaBoat from '@/views/BananaBoat.vue'
import Boat from '@/views/Boat.vue'
import X4 from '@/views/X4.vue'
import Capitolio from '@/views/Capitolio.vue'
import Rapel from '@/views/Rapel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Início'
    }
  },
  {
    path: '/hospedagem',
    name: 'Accommodation',
    component: Accommodation
  },
  {
    path: '/quadriciclo',
    name: 'Quadricycle',
    component: Quadricycle
  },
  {
    path: '/banana-boat',
    name: 'BananaBoat',
    component: BananaBoat
  },
  {
    path: '/lancha',
    name: 'Boat',
    component: Boat
  },
  {
    path: '/passeio-4x4',
    name: '4X4',
    component: X4
  },
  {
    path: '/capitolio-e-serra-da-canastra',
    name: '4X4',
    component: Capitolio
  },
  {
    path: '/rapel',
    name: 'Rapel',
    component: Rapel
  },
  {
    path: '/entrar',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
