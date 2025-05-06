<script setup>
import { ref } from 'vue'

let dia = true
let noche = true
const showError = ref(true)
const errorMsg = ref('Ha habido un error!')
const texto = ref('texto')
const color = ref('color')
const colorAlt = ref('')
const animals = ['gato', 'perro', 'rata', 'tortuga', 'dorada']
const paises = ['España', 'Argentina', 'Italia', 'Alemania']
const animalsTable = [
  {
    name: 'gato',
    type: 'mamífero'
  },
  { name: 'perro', type: 'mamífero' },
  { name: 'serpiente', type: 'reptil' }
]

const realHTML = "<p class='blue'>Hola Pepsicola</p>"

// setTimeout(() => {
//   showError.value = !showError.value
//   console.log(showError.value);
// }, 5000)

function sendTxt() {
  console.log('Soy un texto')
}
</script>

<template>
  <section>
    <article>
      <h1>Dentro del tag template va todo el HTML</h1>
      <br />
      <h2 class="title">Dentro del tag script va todo el código</h2>
      <br />
      <h2 id="text">Dentro del tag style va todo el css</h2>
      <br />
      <p v-if="dia">Es de día</p>
      <p v-if="noche">Es de noche</p>
      <p v-if="dia && noche">¡No puede ser a la vez de día y de noche!</p>
      <p>La variable día vale: {{ dia }}</p>
      <p v-if="showError">{{ errorMsg }}</p>
      <button
        v-on:click="
          () => {
            console.log('Oye, me has hecho click!')
          }
        "
      >
        Click me!
      </button>
      <button
        @click="
          () => {
            console.log('Este es otro click!')
          }
        "
      >
        Otro click!
      </button>
      <button @click="sendTxt">Send txt</button>
    </article>
    <article>
      <br />
      <h2 :class="color">Esto cambia de color</h2>
      <button
        @click="
          () => {
            console.log(texto)
          }
        "
      >
        Dime qué hay almacenado en la variable "texto"
      </button>
      <input type="text" v-model="texto" />
      <input type="text" v-model="color" />
    </article>
    <article>
      <h2>Lista de animales</h2>
      <ul>
        <li v-for="animal in animals">{{ animal }}</li>
      </ul>
      <br />
      <h2>Lista de paises</h2>
      <ul>
        <li v-for="pais in paises">{{ pais }}</li>
      </ul>
    </article>
    <article>
      <br />
      <table>
        <thead>
          <th>Animal</th>
          <th>Tipo</th>
        </thead>
        <tbody>
          <tr v-for="animal in animalsTable">
            <td>{{ animal.name }}</td>
            <td>{{ animal.type }}</td>
          </tr>
        </tbody>
      </table>
      <br><br>
      <div v-html="realHTML"></div>
    </article>
  </section>
</template>

<style scoped>
h1 {
  color: red;
}

.title {
  color: blue;
}

#text {
  color: green;
}

.blue {
  color: blue;
}

.red {
  color: red;
}
</style>
