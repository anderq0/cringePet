import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import PetHome from '../pages/PetHome.vue'
import PetCreatorPage from '../pages/PetCreatorPage.vue'

const routes = [
  { path: '/cringepet/', component: HomePage },
  { path: '/cringepet/petHome', component: PetHome },
  { path: '/cringepet/creator', component: PetCreatorPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
