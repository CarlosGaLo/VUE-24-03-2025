<script setup>
import { defineProps } from 'vue'

// Definimos los props que vamos a recibir.
// Fíjate que aquí pone "movies", por lo tanto, cuando pasemos por prop en App.vue los datos deberemos referenciarlos como "movies".
const props = defineProps({
  movies: {
    type: Array,
    required: true
  },
  soundtracks: Array
})


// Conclusión: Usaremos props cuando queremos que sea el padre el que le de la información al hijo. De tal forma que el hijo solo debe preocuparse por cómo muestra dicha información.
</script>

<template>
  <div>
    <h2>Películas de Ciencia Ficción</h2>
    <ul>
      <li v-for="(movie, index) in movies" :key="index">{{ movie.title }} - {{ movie.year }}</li>
    </ul>
    <h2>Bandas Sonoras</h2>
    <ul>
      <li v-for="(soundtracks, index) in soundtracks" :key="index">
        {{ soundtracks.title }} - {{ soundtracks.year }} - {{ soundtracks.composer }}
      </li>
    </ul>
  </div>
</template>
