<template>
  <v-form v-model="valid" class="form" ref="form">
    <v-container class="container">
      <StepHeader :step="steps[2]" />
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            :key="input.label"
            v-model="model_data[input.model]"
            :rules="input.rules"
            :label="input.label"
            :placeholder="input.placeholder || input.label"
            v-maska:[input.mask?input.mask:null]
            :validate-on="input.validation || 'lazy blur'"
            :required="input.required"
            @focus="() => form.resetValidation()"
            class="form__input"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="btn-container">
        <BtnMain @click="validate">Проверить код</BtnMain>
      </div>
      <p>Отправить код повторно через</p>
      <p>{{ sec_counter }} секунд</p>
    </v-container>
  </v-form>
</template>

<script lang="ts" setup>
import { mock_code } from '@/mock'
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import StepHeader from '@/components/steps/StepHeader.vue'
import { steps } from '@/consts'
const sec_counter: Ref<number> = ref(80)
const sec_interval: Ref<number | null> = ref(null)
const model_data: Ref<{ code: number | null }> = ref({ code: null })
const valid = ref(false)
const input = {
  model: 'code',
  label: 'Код*',
  required: true
}

const validate = () => {
  console.log('validated')
}

onMounted(() => {
  sec_interval.value = setInterval(() => {
    if (sec_counter.value) sec_counter.value--
  }, 1000)
})

onUnmounted(() => {
  clearInterval(sec_interval.value)
})
</script>

<script lang="ts">
export default {
  name: 'ConfirmationStep'
}
</script>

<style scoped lang="scss  ">
.container {
  background: #fff;
}

.btn-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
