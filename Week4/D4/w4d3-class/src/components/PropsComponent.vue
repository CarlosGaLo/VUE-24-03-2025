<script setup>
//1º Avisamos de que vamos a recibir información del padre (prop)
import { defineProps } from 'vue'

//2º Le ponemos un nombre al prop, en este caso "movies" y "soundtracks"
const props = defineProps({
  movies: {
    type: Array,
    required: true
  },
  soundtracks: Array,
  videogame: Object
})

//3º Revisar App.vue -> El padre me envía el dato.
</script>

<template>
  <h1>Soy el componente que te enseña Props</h1>
  <br />
  <div>
    <h2>Películas</h2>
    <ul>
      <li v-for="movie in movies">{{ movie.title }} - {{ movie.year }}</li>
    </ul>
    <br />
  </div>
  <div v-if="soundtracks">
    <h2>BSO</h2>
    <ul>
      <li v-for="soundtrack in soundtracks">
        {{ soundtrack.title }} - {{ soundtrack.year }} - {{ soundtrack.composer }}
      </li>
    </ul>
  </div>
  <div>
    <p>El año del videojuego es: {{ videogame?.tipo.addendum.year }}</p>
  </div>
</template>

<style scoped></style>
