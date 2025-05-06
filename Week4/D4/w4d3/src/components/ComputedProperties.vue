<script setup>
import { ref, computed } from 'vue'

const newColor = ref('')

// Propiedad computada que cambia el color del texto
const textColor = computed(() => {
  return 'color: ' + newColor.value
})
</script>

<template>
  <div :style="textColor">
    <h2>Texto con color dinámico</h2>
    <p>Este texto cambia de color según el color de entrada: {{ newColor }}</p>
  </div>
  <input type="color" v-model="newColor" />
</template>
