import { createRouter, createWebHistory } from 'vue-router'
import PersonalDataStep from '@/views/steps/PersonalDataStep.vue'
import ConfirmationStep from '@/views/steps/ConfirmationStep.vue'
import TermsStep from '@/views/steps/TermsStep.vue'
import SignedStep from '@/views/steps/SignedStep.vue'
import ValidationStep from '@/views/steps/ValidationStep.vue'
import { StepNamesEng } from '@/enums'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: StepNamesEng.PERSONAL_DATA,
      component: PersonalDataStep
    },
    {
      path: `/${StepNamesEng.CONFIRMATION}`,
      name: StepNamesEng.CONFIRMATION,
      component: ConfirmationStep
    },
    {
      path: `/${StepNamesEng.TERMS}`,
      name: StepNamesEng.TERMS,
      component: TermsStep
    },
    {
      path: `/${StepNamesEng.VALIDATION}`,
      name: StepNamesEng.VALIDATION,
      component: ValidationStep
    },
    {
      path: `/${StepNamesEng.SIGNED}`,
      name: StepNamesEng.SIGNED,
      component: SignedStep
    }
  ]
})

export default router
