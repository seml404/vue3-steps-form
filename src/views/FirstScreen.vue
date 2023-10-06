<template>
  <v-form v-model="valid" class="form" ref="form">
    <v-container>
      <p class="form__title">Личные данные</p>
      <v-progress-linear class="form__progress" color="green" model-value="20"></v-progress-linear>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            @focus="() => form.resetValidation()"
            class="form__input"
            v-model="person_data.second_name"
            :rules="name_place_rules"
            label="Фамилия*"
            required
            variant="outlined"
          ></v-text-field>
          <v-text-field
            @focus="() => form.resetValidation()"
            class="form__input"
            v-model="person_data.middle_name"
            :rules="name_place_rules"
            label="Отчество"
            variant="outlined"
          ></v-text-field>
          <v-text-field
            @focus="() => form.resetValidation()"
            class="form__input"
            v-model="person_data.birth_place"
            :rules="name_place_rules"
            label="Страна места рождения"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            @focus="() => form.resetValidation()"
            class="form__input"
            v-model="person_data.first_name"
            :rules="name_place_rules"
            label="Имя*"
            required
            variant="outlined"
          ></v-text-field>
          <v-text-field
            class="form__input"
            @focus="() => form.resetValidation()"
            v-model="person_data.birth_date"
            v-maska:[options]
            label="Дата рождения"
            placeholder="дд.мм.гггг"
            required
            :rules="date_rules"
            variant="outlined"
            validate-on="blur lazy"
          ></v-text-field>
          <v-text-field
            @focus="() => form.resetValidation()"
            class="form__input"
            v-model="person_data.email"
            :rules="email_rules"
            label="Email"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <p>Заполнить через Госуслуги</p>
      <v-checkbox v-model="agreement" color="primary" value="primary" hide-details></v-checkbox>
      <div>
        Даю согласие на <a class="link">обработку личных данных </a> и подписание документов в
        электронном виде
      </div>
      <div><v-btn color="danger"> Продолжить </v-btn></div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
export default {
  name: 'FirstStep'
}
</script>

<script setup lang="ts">
import { ref, computed, Ref } from 'vue'
import { vMaska } from 'maska'
import type { VForm } from 'vuetify/components'
const form = ref()
const valid = ref(false)
const person_data = ref({
  first_name: '',
  second_name: '',
  birth_date: '',
  birth_place: '',
  middle_name: '',
  email: ''
})
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
    const { birth_date } = person_data.value
    if (!val) {
      return false
    }
    const date_arr = birth_date.split('.')

    if (
      !date_arr.length ||
      date_arr.length < 3 ||
      new Date(date_arr.join('-')).getTime() >= Date.now()
    ) {
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

    if (val !== undefined && val !== null) {
      const pattern =
        /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return pattern.test(val) ? true : email_error
    }
    return true
  }
]

const options = { mask: '##.##.####' }
const agreement = ref(false)
</script>

<style scoped lang="scss">
@import '@/assets/links.scss';
.form__title {
  text-align: center;
  padding: 6px;
  margin-bottom: 20px;
}
.form__progress {
  margin-bottom: 20px;
  border-radius: 10px;
}

.form__input {
  margin-bottom: 10px;
}
</style>
