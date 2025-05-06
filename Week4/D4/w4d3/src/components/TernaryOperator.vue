<script setup>
import { ref, computed } from 'vue'

// Variable reactiva para almacenar el estado de la condición
const condition = ref(true)

// Propiedad computada que utiliza el operador ternario para asignar el mensaje en función de la condición
const message = computed(() => {
  return condition.value ? 'La condición es verdadera' : 'La condición es falsa'
})
</script>

<template>
  <div>
    <h2>Componente con operador ternario</h2>
    <input type="checkbox" v-model="condition" /> Condición
    <p>{{ message }}</p>
  </div>
</template>
