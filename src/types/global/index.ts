import { Requests } from '@/enums'

export interface RequestProps {
  method: Requests.Types
  url: string
}

export interface RequestParams {
  [key: string]: unknown
}

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

export interface BaseResponse<T> {
  [key: string]: unknown
  status: number
  data: T
}
