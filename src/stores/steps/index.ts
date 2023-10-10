import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Steps } from '@/types'
import type { ComputedRef } from 'vue'
import { StepsService } from '@/service/steps'

// export const steps_service = new StepsService()

export const useStepsStore = defineStore('steps_store', () => {
  const data_submitted = ref()

  const submit_personal_data = async (payload: Steps.Person) => {
    try {
      const { success, code } = await StepsService.submit_personal_data(payload)

      console.log(success)

      return success
    } catch (error) {
      console.error(error)
    }
  }
  return { submit_personal_data }
})
