<template>
  <v-btn :class="['text-none', 'btn_main']" color="red" text="none" variant="flat">
    <slot></slot>
  </v-btn>
</template>
<script setup lang="ts"></script>

<script>
export default {
  name: 'BtnMain'
}
</script>

<style>
.btn_main {
  padding: 10px;
  display: flex;
  width: 100%;
  max-width: 400px !important;
  color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 50px !important;
}
</style>
