<template>
  <v-form v-model="valid" class="form" ref="form">
    <v-wrapper class="wrapper">
      <StepHeader :step="steps[2]" />
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            :disabled="store.passed_steps.confirmation"
            :key="input.label"
            v-model="model_data[input.model]"
            :rules="input.rules"
            :label="input.label"
            :placeholder="input.placeholder || input.label"
            v-maska:[input.mask?input.mask:null]
            :validate-on="input.validation || 'input'"
            :required="input.required"
            class="form__input"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <div v-if="!store.passed_steps.confirmation">
        <div class="btn-wrapper">
          <BtnMain @click="handle_submit" :disabled="!valid">Проверить код</BtnMain>
        </div>
        <div v-if="sec_counter" class="text-body-2">
          <p>Отправить код повторно через</p>
          <p>{{ sec_counter }} секунд</p>
        </div>
        <v-btn v-else>Отправить код</v-btn>
      </div>
      <div v-else>
        <div class="btn-wrapper">
          <BtnMain @click="handle_submit">Перейти к следующему шагу</BtnMain>
        </div>
      </div>
    </v-wrapper>
  </v-form>
</template>

<script lang="ts" setup>
import { mock_code } from '@/mock'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import type { Ref } from 'vue'
import StepHeader from '@/components/steps/StepHeader.vue'
import { StepsData } from '@/consts'
import { useStepsStore } from '@/stores'
import { StepNames, Statuses } from '@/enums'
import router from '@/router'

const { ResponseStatuses: response_statuses } = Statuses
const store = useStepsStore()
const { steps } = StepsData
const sec_counter: Ref<number> = ref(80)
const sec_interval: Ref<ReturnType<typeof setInterval> | null> = ref(null)
const model_data: Ref<{ code: number | null }> = ref({ code: null })
const valid = ref(false)
const input = {
  model: 'code',
  label: 'Код*',
  required: true,
  rules: [(el) => !!el?.trim()]
}

const code_required = computed(() => {
  return !store.passed_steps.confirmation
})
const handle_submit = async () => {
  if (!store.passed_steps.confirmation) {
    const code = await store.submit_confirmation(model_data.value.code)
    if (code === response_statuses.OK || code === response_statuses.UPDATED) {
      console.log(code)
      router.push(StepNames.StepNamesEng.TERMS)
    }
  } else router.push(StepNames.StepNamesEng.TERMS)
}

onMounted(() => {
  sec_interval.value = setInterval(() => {
    if (sec_counter.value) sec_counter.value--
  }, 1000)
})

onUnmounted(() => {
  if (sec_interval.value !== null) {
    clearInterval(sec_interval.value)
  }
})
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

.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>
