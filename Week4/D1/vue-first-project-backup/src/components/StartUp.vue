<template>
  <h1>Dentro del tag template va todo el HTML</h1>
  <br />
  <h2>Dentro del tag script va todo el código</h2>
  <br />
  <h2>Dentro del tag style va todo el css</h2>
  <br />
  <p>Aquí te enseño a hacer un v-for</p>
  <ol>
    <li v-for="animal in animals">{{ animal }}</li>
  </ol>
  <p v-if="dia">Este texto se enseña si la variable "dia" es true.</p>
  <p v-if="noche">Este texto se enseña si la variable "noche" es true.</p>
  <p v-if="!dia && !noche">Este texto se enseña si tanto "dia" como "noche" son false.</p>
  <br />
  <button v-on:click="() => console.log('Has hecho click')">
    Si haces click aquí, mostraré un mensaje por consola. Esto es gracias a la directiva v-on
  </button>
  <br />
  <button @click="() => console.log('Has hecho click otra vez')">
    Aquí escribimos @ en lugar de v-on, que es la forma simple de escribir lo mismo. Es decir: v-on
    = @<
  </button>
  <br />
  <input type="text" v-model="texto" />
  <br />
  <button @click="sustituirTexto">
    Mostrar texto en consola y sustituirlo por "Has sustituido el texto"
  </button>
  <br />
  <input type="text" v-model="color" />
  <p v-bind:class="color">
    Este texto cambia de color en función a si en el input pones "red" para rojo o "blue" para azul.
  </p>
  <br />
  <p :class="color">En este párrafo usamos la anotación compactada para el v-bind</p>
</template>

<script setup>
// ref es un tipo de dato. Nos permite hacer que lo que pasa en la web repercuta directamente al código y viceversa. Lo importamos.
import { ref } from 'vue'
const animals = ['gato', 'perro', 'pato', 'lagarto']
const dia = true
const noche = false
// Declaramos el ref y lo empaquetamos. El ref siempre se declara como constante, ya que cuando quiero cambiar el valor de un ref cambiaré la propiedad .value del mismo.
// Si uso un ref en código debo usar el .value
// Si uso un ref en HTML no debo usar el .value
const texto = ref('')
const color = ref('')

console.log(
  'Recuerda escribir <script setup>, si no escribes la palabra setup no podrás usar el Composition API'
)

function sustituirTexto() {
  console.log(texto.value)
  texto.value = 'Has sustituido el texto'
}
</script>

<style>
h1 {
  color: blue;
}

h2 {
  color: red;
}

.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
