<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.params.id;

// id -> Fetch(id) -> Devolverá información 
</script>

<template>
  <h1>Soy el Blog número {{ id }}</h1>
  <router-link to="/">Llévame al Home</router-link>
  <br>
  <router-link to="/User">Llévame al User</router-link>
</template>

<style scoped></style>
