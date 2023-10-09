import { StepNames } from '@/enums'
import type { Steps } from '@/types/index'

export namespace StepsData {
  export const steps: Steps.Step[] = [
    {
      number: 1,
      step_name: StepNames.StepNamesEng.PERSONAL_DATA,
      next_step_name: StepNames.StepNamesEng.PASPORT
    },
    {
      number: 2,
      step_name: StepNames.StepNamesEng.PASPORT,
      next_step_name: StepNames.StepNamesEng.CONFIRMATION
    },
    {
      number: 3,
      step_name: StepNames.StepNamesEng.CONFIRMATION,
      next_step_name: StepNames.StepNamesEng.TERMS
    },
    {
      number: 4,
      step_name: StepNames.StepNamesEng.TERMS,
      next_step_name: StepNames.StepNamesEng.SIGNING
    },
    {
      number: 5,
      step_name: StepNames.StepNamesEng.SIGNING,
      next_step_name: StepNames.StepNamesEng.VALIDATION
    },
    {
      number: 6,
      step_name: StepNames.StepNamesEng.VALIDATION,
      next_step_name: StepNames.StepNamesEng.SIGNED
    },
    {
      number: 7,
      step_name: StepNames.StepNamesEng.VALIDATION,
      next_step_name: null
    }
  ]

  export const steps_amount = steps.length
}
