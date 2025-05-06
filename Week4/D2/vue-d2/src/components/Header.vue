<script setup>
import FancyButton from './buttons/FancyButton.vue'
</script>

<template>
  <section>
    <h1>Página fantástica</h1>
    <FancyButton>Componente Interno</FancyButton>
    <br>
    <FancyButton>Componente Alternativo</FancyButton>
    <br />
  </section>
</template>

<style scoped>
section {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
