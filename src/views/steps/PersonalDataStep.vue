<template>
  <v-form v-model="valid" class="form" ref="form">
    <v-container class="container">
      <StepHeader :step="steps[0]" />
      <v-row>
        <v-col cols="12" sm="6" class="pb-0">
          <v-text-field
            v-for="input in inputs.slice(0, 3)"
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
        <v-col cols="12" sm="6" class="pb-0">
          <v-text-field
            v-for="input in inputs.slice(3)"
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
      <div class="personal-step__fill">
        <p class="text-grey text-body-2">заполнить через</p>
        <div class="personal-step__svg-box">
          <a href="#"> <ServiceLogo></ServiceLogo></a>
        </div>
      </div>

      <div class="d-flex align-center">
        <div>
          <v-checkbox
            v-model="model_data.agreed_handling"
            color="primary"
            hide-details
          ></v-checkbox>
        </div>
        <div>
          Даю согласие на <a class="link" href="#">обработку личных данных </a> и подписание
          документов в электронном виде
        </div>
      </div>

      <div class="btn-container">
        <BtnMain @click="handle_submit" :disabled="!can_submit">Продолжить</BtnMain>
      </div>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import StepHeader from '@/components/steps/StepHeader.vue'
import ServiceLogo from '@/components/steps/ServiceLogo.vue'
import { ref, computed } from 'vue'
import { StepNames, Statuses } from '@/enums'
import type { Ref } from 'vue'
import type { Steps } from '@/types/index'
import type { MaskOptions } from 'maska'
import type { VForm } from 'vuetify/components'
import { StepsData } from '@/consts/'
import { useStepsStore } from '@/stores'
import router from '@/router'
import { is_equal } from '@/utils'
const { ResponseStatuses: response_statuses } = Statuses
const store = useStepsStore()
const { steps } = StepsData
const form = ref()
const valid = ref(false)
const model_data: Ref<Steps.Person> = ref({ ...store.personal_data_submitted })

const name_place_rules: [(val: string) => string | boolean] = [
  (val) => {
    const name_error = 'Недопустимый формат'
    if (!val) {
      return false
    }
    if (val !== undefined && val !== null) {
      const pattern = /^([А-Яа-яё -]{1,23}|[A-Za-z -]{1,23})$/
      return pattern.test(val.trim()) ? true : name_error
    }
    return true
  }
]
const date_rules: [(val: string) => string | boolean] = [
  (val) => {
    const date_error = 'Невалидная дата'
    const { birth_date } = model_data.value
    if (!val) {
      return false
    }
    const date_arr = birth_date.split('.')

    if (date_arr.length < 3) {
      return date_error
    }

    if (new Date([...date_arr].reverse().join('-')).getTime() >= Date.now()) {
      return date_error
    }
    const day = Number(date_arr[0]) || ''
    const month = Number(date_arr[1]) || ''
    const year = Number(date_arr[2]) || ''

    if (!day || !month || !year) {
      return date_error
    }
    if (month < 1 || month > 12) {
      return date_error
    }
    if (year < 1900) {
      return date_error
    }
    if ((day && (day < 0 || day > 31)) || month > 12) {
      return date_error
    }
    return true
  }
]

const email_rules: [(val: string) => string | boolean] = [
  (val) => {
    const email_error = 'Невалидный email'
    if (!val) {
      return true
    }

    if (val !== undefined && val !== null) {
      const pattern =
        /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return pattern.test(val) ? true : email_error
    }
    return true
  }
]
const options: { [key: keyof Steps.Person]: MaskOptions } = {
  birth_date: { mask: '##.##.####' }
}
const inputs: Steps.FormInput[] = [
  {
    model: 'second_name',
    rules: name_place_rules,
    label: 'Фамилия*',
    required: true
  },
  {
    model: 'middle_name',
    rules: name_place_rules,
    label: 'Отчество*',
    required: true
  },
  {
    model: 'birth_place',
    rules: name_place_rules,
    label: 'Страна места рождения*',
    required: true
  },
  {
    model: 'first_name',
    rules: name_place_rules,
    label: 'Имя*',
    required: true
  },
  {
    model: 'birth_date',
    rules: date_rules,
    label: 'Дата рождения*',
    placeholder: 'дд.мм.гггг',
    mask: options.birth_date,
    required: true
  },
  {
    model: 'email',
    rules: email_rules,
    label: 'Email',
    required: false
  }
]

const handle_submit = async () => {
  if (!is_equal(model_data.value, store.personal_data_submitted)) {
    const code = await store.submit_personal_data(model_data.value)
    if (code === response_statuses.OK || code === response_statuses.UPDATED) {
      console.log(code)
      router.push(StepNames.StepNamesEng.CONFIRMATION)
    }
  } else if (store.passed_steps.personal_data) router.push(StepNames.StepNamesEng.CONFIRMATION)
}

const can_submit = computed(() => {
  return valid.value && model_data.value.agreed_handling
})
</script>

<script lang="ts">
export default {
  name: 'PersonalDataStep'
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/links.scss';

.form__input {
  margin-bottom: 10px;
}
.container {
  background: #fff;
}
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
}
.personal-step__fill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.personal-step__svg-box {
  width: 100%;
  max-width: 200px;
}
</style>
