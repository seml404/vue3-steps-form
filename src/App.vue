<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="general">
    <RouterView />
  </div>
</template>

<style scoped>
.general {
  background: gray;
  height: 100vh;
  padding-top: 20px;
}
</style>
