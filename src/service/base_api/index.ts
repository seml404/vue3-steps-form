import axios from 'axios'
import { qs } from 'qs'
import type { RequestProps, RequestParams } from '@/types'
import type { AxiosInstance } from 'axios'

const base_api_constructor = (): AxiosInstance => {
  const default_settings = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 12345'
    }
  }
  const axios_instance = axios.create(default_settings)

  return axios_instance
}

export const base_api = base_api_constructor()
