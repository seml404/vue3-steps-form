import { createRouter, createWebHistory } from 'vue-router'
import PersonalDataStep from '@/views/steps/PersonalDataStep.vue'
import ConfirmationStep from '@/views/steps/ConfirmationStep.vue'
import TermsStep from '@/views/steps/TermsStep.vue'
import SignedStep from '@/views/steps/SignedStep.vue'
import ValidationStep from '@/views/steps/ValidationStep.vue'
import { StepNames } from '@/enums'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: StepNames.StepNamesEng.PERSONAL_DATA,
      component: PersonalDataStep
    },
    {
      path: `/${StepNames.StepNamesEng.CONFIRMATION}`,
      name: StepNames.StepNamesEng.CONFIRMATION,
      component: ConfirmationStep
    },
    {
      path: `/${StepNames.StepNamesEng.TERMS}`,
      name: StepNames.StepNamesEng.TERMS,
      component: TermsStep
    },
    {
      path: `/${StepNames.StepNamesEng.VALIDATION}`,
      name: StepNames.StepNamesEng.VALIDATION,
      component: ValidationStep
    },
    {
      path: `/${StepNames.StepNamesEng.SIGNED}`,
      name: StepNames.StepNamesEng.SIGNED,
      component: SignedStep
    }
  ]
})

export default router
