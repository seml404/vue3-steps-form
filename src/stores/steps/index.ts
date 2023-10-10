import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Steps } from '@/types'

import { StepsService } from '@/service/steps'

export const useStepsStore = defineStore('steps_store', () => {
  const personal_data_submitted: Ref<Steps.Person> = ref(StepsService.default_personal_data())
  const passed_steps: Ref<{ [key: string]: boolean }> = ref(StepsService.default_passed_steps())

  const submit_personal_data = async (payload: Steps.Person) => {
    try {
      const result = await StepsService.submit_personal_data(payload)
      personal_data_submitted.value = { ...payload, agreed_handling: true }
      passed_steps.value.personal_data = true
      return result.status
    } catch (error) {
      console.error(error)
    }
  }

  const submit_confirmation = async (code: number | string) => {
    const payload = { code, user_id: personal_data_submitted.value.user_id }
    try {
      const result = await StepsService.submit_confirmation_code(payload)
      passed_steps.value.confirmation = true
      return result.status
    } catch (error) {
      console.error(error)
    }
  }

  const submit_agreement = async ({ agreement_signed }: { agreement_signed: boolean }) => {
    const payload = { agreement_signed, user_id: personal_data_submitted.value.user_id }
    try {
      const result = await StepsService.submit_agreement(payload)
      passed_steps.value.agreement_signed = true
      return result.status
    } catch (error) {
      console.error(error)
    }
  }

  const reset_data = () => {
    personal_data_submitted.value = StepsService.default_personal_data()
    passed_steps.value = StepsService.default_passed_steps()
  }
  return {
    submit_personal_data,
    personal_data_submitted,
    passed_steps,
    submit_confirmation,
    submit_agreement,
    reset_data
  }
})
