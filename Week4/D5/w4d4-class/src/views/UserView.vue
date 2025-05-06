<script setup></script>

<template>
  <h1>Soy el usuario</h1>
  <p>Solo estoy en algunas páginas</p>
  <router-link to="/">Llévame al Home</router-link>
  <br>
  <router-link to="/Blog/22">Llévame al Blog</router-link>
  <router-view></router-view>
</template>

<style scoped></style>
