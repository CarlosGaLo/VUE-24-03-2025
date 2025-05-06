<script setup>
import { ref, computed } from 'vue'

const newColor = ref('')

const textColor = computed(() => {
    return 'color: ' + newColor.value;
})
</script>

<template>
  <section :style="textColor">
    <br>
    <h2>Texto con color dinámico:</h2>
    <p>Este texto cambia de color según el color de entrada: {{ newColor }}</p>
    <input type="color" v-model="newColor">
  </section>
</template>

<style scoped>
section{
    background-color: red;
}
</style>
