<template>
  <div class="step__header">
    <h1 class="step__title">{{ step_names[step.step_name] }}</h1>
    <div v-if="step.number !== 3 && step.number < 4">
      <v-progress-linear
        height="9"
        class="step__progress"
        color="green"
        :model-value="steps_amount"
      ></v-progress-linear>
      <div class="step__box">
        <p class="font-weight-bold">Шаг {{ step.number }} из {{ steps_amount }}</p>
        <p class="text-grey">
          {{
            step_names[step.next_step_name]
              ? `Следующий шаг: ${step_names[step.next_step_name]}`
              : null
          }}
        </p>
      </div>
    </div>
    <div v-else>{{ step.alert }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from 'vue'
import { StepNames } from '@/enums'
import type { Steps } from '@/types/index'
import { StepsData } from '@/consts'
const { StepNamesRus: step_names } = StepNames
const { steps_amount } = StepsData
const props = defineProps<{ step: Steps.Step }>()
</script>
<script lang="ts">
export default {
  name: 'StepHeader'
}
</script>

<style scoped lang="scss">
.step__header {
  padding-bottom: 20px;
}
.step__title {
  text-align: center;
  padding: 6px;
  margin-bottom: 20px;
}
.step__progress {
  margin-bottom: 20px;
  border-radius: 10px;
  height: 20px;
  border-radius: 20px;
}
.step__box {
  display: flex;
  justify-content: space-between;
}
</style>
