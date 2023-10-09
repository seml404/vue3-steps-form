import { Axios } from '@/api/index'
import { qs } from 'qs'
import type { RequestProps, RequesParams } from '@/types'
import { ResponseStatuses } from '@/enums'
import type { AxiosInstance } from 'axios'

export const requestWithParams = (props: RequestProps, params: RequesParams) => {
  const { method, url } = props
  const requestDetails = {
    url,
    method,
    params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 12345'
    },
    paramsSerializer: (params: RequesParams) => qs.stringify(params, { arrayFormat: 'brakets' })
  }

  return Axios(requestDetails)
}
