import { createRouter, createWebHistory } from 'vue-router'
import MultiStepForm from '../views/MultiStepForm.vue'
import NextStep from '../views/NextStep.vue'

const routes = [
  {
    path: '/',
    name: 'MultiStepForm',
    component: MultiStepForm 
  },
  {
    path: '/nextStep',
    name: 'nextStep',
    component: NextStep 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
