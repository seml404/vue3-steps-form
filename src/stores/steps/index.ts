import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Steps } from '@/types'
import type { ComputedRef } from 'vue'
import { StepsService } from '@/service/'

export const steps_service = new StepsService()

export const useStepsStore = defineStore('steps_store', () => {
  return {}
})
