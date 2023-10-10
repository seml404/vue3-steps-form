import { base_api } from '../base_api'
import { Statuses, Requests } from '@/enums'
import type { AxiosInstance } from 'axios'
import type { BaseResponse, Steps, RequestProps } from '@/types'
import { StepsMock } from '@/mock'

interface StepsData extends BaseResponse {
  data: { [key: string]: unknown }
}

export namespace StepsService {
  export const submit_personal_data = async (payload: Steps.Person): Promise<BaseResponse> => {
    const { data } = await base_api.post<StepsData>(StepsMock.URL, payload)
    return data
  }
}
