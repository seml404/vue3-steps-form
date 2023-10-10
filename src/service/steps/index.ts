import { base_api } from '../base_api'
import { Statuses, Requests } from '@/enums'
import type { AxiosInstance } from 'axios'
import type { BaseResponse, Steps, RequestProps } from '@/types'
import { StepsMock } from '@/mock'

interface StepsData {
  data: { [key: string]: unknown }
  success: boolean
}

export namespace StepsService {
  export const default_personal_data = (): Steps.Person => {
    return {
      first_name: '',
      second_name: '',
      birth_date: '',
      birth_place: '',
      middle_name: '',
      email: ''
    }
  }

  export const submit_personal_data = async (
    payload: Steps.Person
  ): Promise<BaseResponse<StepsData>> => {
    const { data, status } = await base_api.post<StepsData>(StepsMock.URL, payload)

    const result = { data, status }

    return result
  }
}
