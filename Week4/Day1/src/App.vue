<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';
import { ref } from 'vue';

let nombre = "Jarko";
nombre = "María";

const persona = {
  nombre: "Lucía",
  edad: 25
}
persona.nombre = "Valverde"

const referenciado = ref("Vladimir");

const hasPremio = false;

const htmlContent = "<p>Hola<p/>"
</script>

<template>
  <HeaderComponent />
  <ButtonComponent>Aceptar</ButtonComponent>
  <ButtonComponent>Rechazar</ButtonComponent>
  <h1>Hola, mundo!</h1>
  <h2>{{ nombre }}</h2>
  <h2>{{ persona.nombre }}</h2>
  <h2>{{ referenciado }}</h2>
  <h2 v-if="hasPremio">Has ganado un premio!</h2>
  <h2>{{ htmlContent }}</h2>
  <h2 v-html="htmlContent"></h2>
  </template>

<style scoped>
h1{
  background-color: red;
}
</style>