<script setup>
import { useDataStore } from '../stores/data.js'

const dataStore = useDataStore();
</script>

<template>
  <br>
  <h1>Store Secundaria</h1>
  <button @click="dataStore.increment()">Incrementa en 1</button>
  <p>Counter: {{ dataStore.counter }}</p>
  <p>Double Counter: {{ dataStore.doubleCounter }}</p>
  <br>
  <input type="text" v-model="dataStore.user.nombre">
</template>

<style scoped></style>
