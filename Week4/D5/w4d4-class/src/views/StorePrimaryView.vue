<script setup>
import { useDataStore } from '../stores/data.js'

const dataStore = useDataStore();
</script>

<template>
  <h1>Store Primaria</h1>
  <h2>Estás logeada con la cuenta de {{ dataStore.user.nombre }}</h2>
  <button @click="dataStore.increment()">Increase Counter</button>
  <p>El valor del counter es: {{ dataStore.counter }}</p>
  <p>El valor del double counter es: {{ dataStore.doubleCounter }}</p>
  <br>
</template>

<style scoped></style>
