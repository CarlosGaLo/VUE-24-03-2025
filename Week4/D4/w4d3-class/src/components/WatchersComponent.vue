<script setup>
import { ref, watch, watchEffect } from 'vue'

const counter = ref(0)

const increment = () => {
  counter.value++
}

watch(counter, (newValue, oldValue) => {
  console.log('El antiguo valor es: ' + oldValue + ' y el nuevo valor es ' + newValue)
})

watchEffect(() => {
  console.log('El valor de la variable es: ' + counter.value)
})
</script>

<template>
  <div>
    <p>Contador: {{ counter }}</p>
    <button @click="increment">Incrementar el contador en 1</button>
  </div>
</template>

<style scoped></style>
