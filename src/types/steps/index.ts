import type { MaskOptions } from 'maska'
import type { VValidation } from 'vuetify/components'
import { StepNames } from '@/enums'
import type { InputValidation } from '../index'

export namespace Steps {
  export interface Person {
    first_name: string
    second_name: string
    birth_date: string
    birth_place: string
    middle_name: string
    email: string
    user_id: number
    agreed_handling: boolean
    identification_confirmed: boolean
    agreement_signed: boolean
  }
  export interface FormInput {
    model: keyof Person
    rules?: [(val: string) => string | boolean]
    label: string
    placeholder?: string
    mask?: MaskOptions
    validation?: InputValidation
    required?: boolean
  }

  export interface Step {
    number: number
    step_name: StepNames.StepNamesEng
    next_step_name?: StepNames.StepNamesEng | null
    step_alert?: string
  }
  export interface Term {
    type: 'currency' | 'date' | 'rate'
    title: string
    value: number | string | unknown
  }
}
