import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Steps } from '@/types'
import type { ComputedRef } from 'vue'
import { StepsService } from '@/service/steps'

// export const steps_service = new StepsService()

export const useStepsStore = defineStore('steps_store', () => {
  const personal_data_submitted: Ref<Steps.Person> = ref(StepsService.default_personal_data())
  const form_was_ubmitted: Ref<boolean> = ref(false)

  const submit_personal_data = async (payload: Steps.Person) => {
    try {
      const result = await StepsService.submit_personal_data(payload)
      personal_data_submitted.value = payload
      form_was_ubmitted.value = true
      return result.status
    } catch (error) {
      console.error(error)
    }
  }
  return { submit_personal_data, personal_data_submitted, form_was_ubmitted }
})
