<template>
  <v-wrapper class="wrapper">
    <StepHeader :step="steps[4]" />
    <v-table>
      <tbody>
        <tr v-for="item in mock_terms" :key="item.title">
          <td>{{ item.title }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="btn-wrapper">
      <BtnMain @click="handle_sign">{{
        store.passed_steps.agreement_signed ? 'Перейти к следующему шагу' : 'Подписать договор'
      }}</BtnMain>
    </div>
  </v-wrapper>
</template>

<script lang="ts" setup>
import { StepsMock } from '@/mock'
import type { Ref } from 'vue'
import StepHeader from '@/components/steps/StepHeader.vue'
import { StepsData } from '@/consts'
import { useStepsStore } from '@/stores'
import { StepNames, Statuses } from '@/enums'
import router from '@/router'
const { mock_terms } = StepsMock
const { ResponseStatuses: response_statuses } = Statuses
const store = useStepsStore()
const { steps } = StepsData

const handle_sign = async () => {
  if (!store.passed_steps.agreement_signed) {
    const code = await store.submit_agreement({ agreement_signed: true })
    if (code === response_statuses.OK || code === response_statuses.UPDATED) {
      console.log(code)
      router.push(StepNames.StepNamesEng.VALIDATION)
    }
  } else router.push(StepNames.StepNamesEng.VALIDATION)
}
</script>

<script lang="ts">
export default {
  name: 'ConfirmationStep'
}
</script>

<style scoped lang="scss">
.wrapper {
  background: #fff;
}

.btn-wrapper{
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
