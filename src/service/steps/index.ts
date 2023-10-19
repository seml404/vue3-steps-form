import { base_api } from '../base_api'
import type { BaseResponse, Steps } from '@/types'
import { StepsMock } from '@/mock'

interface StepsData {
  data: { [key: string]: unknown }
  success: boolean
}

export namespace StepsService {
  export const default_personal_data = (): Steps.Person => {
    return {
      user_id: Date.now(),
      first_name: '',
      second_name: '',
      birth_date: '',
      birth_place: '',
      middle_name: '',
      email: '',
      agreed_handling: false,
      identification_confirmed: false,
      agreement_signed: false
    }
  }

  export const default_passed_steps = (): Record<string, boolean> => {
    return {
      personal_data: false,
      validation: false,
      signed: false
    }
  }

  export const submit_personal_data = async (
    payload: Steps.Person
  ): Promise<BaseResponse<StepsData>> => {
    const { data, status } = await base_api.post<StepsData>(StepsMock.URL, payload)

    const result = { data, status }

    return result
  }

  export const submit_confirmation_code = async (payload: {
    code: string | number
    user_id: number
  }): Promise<BaseResponse<StepsData>> => {
    const { data, status } = await base_api.post<StepsData>(StepsMock.URL, payload)

    const result = { data, status }

    return result
  }

  export const submit_agreement = async (payload: {
    agreement_signed: boolean
    user_id: number
  }): Promise<BaseResponse<StepsData>> => {
    const { data, status } = await base_api.post<StepsData>(StepsMock.URL, payload)

    const result = { data, status }

    return result
  }
}
