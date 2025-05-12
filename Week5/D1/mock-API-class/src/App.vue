<script setup>
import CallFromPinia from './components/CallFromPinia.vue';
import CallServerFromComponent from './components/CallServerFromComponent.vue'
import FromStore from './components/FromStore.vue';
</script>

<template>
  <CallServerFromComponent></CallServerFromComponent>
  <br>
  <FromStore></FromStore>
  <br>
  <CallFromPinia></CallFromPinia>
</template>

<style scoped></style>
