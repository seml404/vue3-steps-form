<template>
  <v-form v-model="valid" class="form">
    <v-container>
      <p class="form__title">Личные данные</p>
      <v-progress-linear class="form__progress" color="green" model-value="20"></v-progress-linear>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Фамилия*"
            required
            hide-details
            variant="outlined"
          ></v-text-field>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Отчество"
            required
            hide-details
            variant="outlined"
          ></v-text-field>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Страна места рождения"
            required
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Имя*"
            required
            hide-details
            variant="outlined"
          ></v-text-field>
          <v-text-field
            v-model="date"
            v-maska:[options]
            label="Дата рождения"
            required
            :rules="nameRules"
            hide-details
            variant="outlined"
          ></v-text-field>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Email"
            required
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <p>Заполнить через Госуслуги</p>
      <v-checkbox v-model="agreement" color="primary" value="primary" hide-details></v-checkbox>
      <di
        >Даю согласие на <a class="link">обработку личных данных </a> и подписание документов в
        электронном виде</di
      >
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
import DatePicker from '@/components/DatePicker.vue'
import { ref, computed } from 'vue'
import { vMaska } from 'maska'
const valid = ref(false)
const firstname = ''
const date = ref()
const nameRules: [(val: string) => string | boolean, (val: string) => string | boolean] = [
  (value) => {
    if (value) return true

    return 'Name is required.'
  },
  (value) => {
    if (value?.length <= 10) return true

    return 'Name must be less than 10 characters.'
  }
]
const options = { mask: '##.##.####' }
const set_date = (date: unknown) => {
  console.log(date)
}
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
</style>
