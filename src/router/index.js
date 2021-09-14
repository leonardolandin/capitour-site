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
    component: Accommodation,
    meta: {
      title: 'Hospedagem'
    }
  },
  {
    path: '/quadriciclo',
    name: 'Quadricycle',
    component: Quadricycle,
    meta: {
      title: 'Quadriciclo'
    }
  },
  {
    path: '/banana-boat',
    name: 'BananaBoat',
    component: BananaBoat,
    meta: {
      title: 'Banana Boat'
    }
  },
  {
    path: '/lancha',
    name: 'Boat',
    component: Boat,
    meta: {
      title: 'Lancha'
    }
  },
  {
    path: '/passeio-4x4',
    name: '4X4',
    component: X4,
    meta: {
      title: '4X4'
    }
  },
  {
    path: '/capitolio-e-serra-da-canastra',
    name: '4X4',
    component: Capitolio,
    meta: {
      title: 'Capitolio e Serra da canastra'
    }
  },
  {
    path: '/rapel',
    name: 'Rapel',
    component: Rapel,
    meta: {
      title: 'Rapel'
    }
  },
  {
    path: '/entrar',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      title: 'Administração'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
