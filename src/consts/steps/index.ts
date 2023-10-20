import { StepNames } from '@/enums'
import type { Steps } from '@/types/index'

const { StepNamesEng } = StepNames

export namespace StepsData {
  export const steps: Steps.Step[] = [
    {
      number: 1,
      step_name: StepNamesEng.PERSONAL_DATA,
      next_step_name: StepNamesEng.PASPORT
    },
    {
      number: 2,
      step_name: StepNamesEng.PASPORT,
      next_step_name: StepNamesEng.CONFIRMATION
    },
    {
      number: 3,
      step_name: StepNamesEng.CONFIRMATION,
      next_step_name: StepNamesEng.TERMS
    },
    {
      number: 4,
      step_name: StepNamesEng.TERMS,
      next_step_name: StepNamesEng.SIGNING
    },
    {
      number: 5,
      step_name: StepNamesEng.SIGNING,
      next_step_name: StepNamesEng.VALIDATION
    },
    {
      number: 6,
      step_name: StepNamesEng.VALIDATION,
      next_step_name: StepNamesEng.SIGNED
    },
    {
      number: 7,
      step_name: StepNamesEng.VALIDATION,
      next_step_name: null
    }
  ]

  export const steps_amount = steps.length
}
