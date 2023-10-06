import type { MaskOptions } from 'maska'
import type { VValidation } from 'vuetify/components'

export type InputValidation =
  | 'input'
  | 'lazy'
  | 'blur'
  | 'submit'
  | 'input lazy'
  | 'blur lazy'
  | 'submit lazy'
  | 'lazy input'
  | 'lazy blur'
  | 'lazy submit'

export namespace Application {
  export interface Person {
    first_name: string
    second_name: string
    birth_date: string
    birth_place: string
    middle_name: string
    email?: string
  }
  export interface FormInput {
    model: keyof Person
    rules: [(val: string) => string | boolean]
    label: string
    placeholder?: string
    mask?: MaskOptions
    validation?: InputValidation
    required?: boolean
  }
}
