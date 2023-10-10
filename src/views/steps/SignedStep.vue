<template>
  <div class="info-step">
    <v-container class="container">
      <div class="info-step__svg-box">
        <svg
          class="info-step__svg"
          viewBox="0 0 197 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M186 94C186 143.706 145.258 184 95 184C44.7421 184 4 143.706 4 94C4 44.2944 44.7421 4 95 4"
            stroke="#40E093"
            stroke-width="8"
          />
          <path d="M60.5 81L97 115L193.5 7" stroke="#40E093" stroke-width="8" />
        </svg>
      </div>
      <p class="info-step__text">Договор подписан</p>
      <p class="info-step__text">Ожидайте поступления денежных средств</p>

      <div class="btn-container">
        <BtnMain @click="handle_reset">OK</BtnMain>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import router from '@/router'
import { useStepsStore } from '@/stores'
import { StepNames, Statuses } from '@/enums'
const store = useStepsStore()

const handle_reset = () => {
  store.reset_data()
  router.push('/')
}
</script>

<script lang="ts">
export default {
  name: 'SignedStep'
}
</script>

<style scoped lang="scss">
.info-step__text {
  text-align: center;
}

.container {
  background: #fff;
}

.info-step__svg-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 30px;
  padding-top: 50px;
}

.info-step__svg {
  max-width: 100px;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 20px;
}
</style>
