<template>
  <v-container class="container">
    <StepHeader :step="steps[4]" />
    <v-table>
      <tbody>
        <tr v-for="item in mock_terms" :key="item.title">
          <td>{{ item.title }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="btn-container">
      <BtnMain @click="sign">Подписать договор</BtnMain>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { mock_terms } from '@/mock'
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import StepHeader from '@/components/steps/StepHeader.vue'
import { steps } from '@/consts'

const sign = () => {
  console.log('sign')
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

.btn-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
