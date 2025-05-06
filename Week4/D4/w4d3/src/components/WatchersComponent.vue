<script setup>
import { ref, watch, watchEffect } from 'vue'

const counter = ref(0)

const increment = () => {
  counter.value++
}

// Define un watcher que observa el valor de counter
watch(counter, (newValue, oldValue) => {
  console.log(`El contador ha cambiado de ${oldValue} a ${newValue}`)
})

watchEffect(() => {
  console.log('Lo mismo pero con un watchEffect. Ahora el contador es: ' + counter.value)
})
</script>

<template>
  <div>
    <p>Contador: {{ counter }}</p>
    <button @click="increment">Incrementar contador</button>
  </div>
</template>
