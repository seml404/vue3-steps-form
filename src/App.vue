<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main_layout">
    <RouterView />
  </div>
</template>

<style scoped>
.main_layout {
  background: gray;
  height: 100vh;
  padding-top: 20px;
}
</style>
