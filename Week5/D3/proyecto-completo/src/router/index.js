import { createRouter, createWebHistory } from 'vue-router'
import BreedList from '../views/BreedList.vue'
import BreedDetail from '../views/BreedDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: BreedList },
  { path: '/breed/:id', name: 'BreedDetail', component: BreedDetail, props: true },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
