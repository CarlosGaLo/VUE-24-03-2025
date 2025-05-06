<script setup>
import { ref } from 'vue'

const id = ref(0)
</script>

<template>
  <h1>Soy la Home View</h1>
  <p>Solo estoy en algunas páginas</p>

  <br /><br /><br /><br />
  <router-link to="/User">Llévame al Usuario</router-link>
  <br />
  <br /><br />
  <input type="number" v-model="id" />
  <router-link :to="{ path: '/Blog/' + id }">Llévame al Blog</router-link>
</template>

<style scoped></style>
