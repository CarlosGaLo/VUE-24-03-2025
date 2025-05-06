<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['emitCustomEvent']);

function lanzarEmit() {
  // Emitir un evento personalizado llamado 'custom-event' con un payload opcional
  const eventData = { message: 'Este es un evento personalizado' }
  // Emite el evento personalizado con el nombre 'custom-event' y opcionalmente pasando datos adicionales
  emits('emitCustomEvent', eventData)
}
</script>

<template>
  <button @click="lanzarEmit()">Enviar Custom Event</button>
</template>
