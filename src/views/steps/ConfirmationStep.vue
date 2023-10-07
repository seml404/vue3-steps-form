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
    </v-container>
  </v-form>
</template>

<script lang="ts" setup>
import { mock_code } from '@/mock'
import { ref } from 'vue'
import type { Ref } from 'vue'
import StepHeader from '@/components/steps/StepHeader.vue'
import { steps } from '@/consts'
const model_data: Ref<{ code: number | null }> = ref({ code: null })
const code_rules: [(val: string) => string | boolean] = [
  (val) => {
    const code_error = 'Неверный код'
    if (!val) {
      return false
    }
    if (val.trim()) {
      return val !== mock_code ? code_error : true
    }
    return false
  }
]
const input = {
  model: 'code',
  rules: code_rules,
  label: 'Код*',
  required: true
}
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
</style>
