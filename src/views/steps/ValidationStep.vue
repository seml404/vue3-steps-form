<template>
  <div class="info-step">
    <v-container class="container">
      <div class="info-step__progress-box">
        <v-progress-circular :size="100" color="red" :width="8" indeterminate></v-progress-circular>
      </div>
      <p class="info-step__text">Проверка ваших данных!</p>
      <p class="info-step__text">Это займет до 30 минут!</p>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import router from '@/router'
import { StepNames } from '@/enums'

onMounted(() => {
  setTimeout(() => {
    router.push(StepNames.StepNamesEng.SIGNED)
  }, 700)
})
</script>

<script lang="ts">
export default {
  name: 'ValidationStep'
}
</script>

<style scoped lang="scss">
.info-step__text {
  text-align: center;
}

.container {
  background: #fff;
  padding-bottom: 200px;
}

.info-step__progress-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 30px;
  padding-top: 50px;
}
</style>
