export interface RequestProps {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
  url: string
}

export interface RequesParams {
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
