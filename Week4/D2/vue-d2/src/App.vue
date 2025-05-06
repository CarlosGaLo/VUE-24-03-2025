<script setup>
import Header from './components/Header.vue'
import { ref, reactive } from 'vue'

const persona = ref({
  name: 'Carolina',
  edad: 25,
  ubicacion: 'Barcelona'
})

const dia = ref(true)
const noche = ref(false)

const pais = reactive({
  name: "España",
  tamanio: "100",
  poblacion: 48000000,
  ca: [{
    name: "Cataluña",
    provincia: {
      name: "Barcelona",
      distritos: [{
        name: "Sta Coloma de Gramanet"
      }]
    }
  }]
})

const animales = ['perro', 'gato', 'pato', 'tortuga']

const miNombre = ref('')

const errorType = ref('')

function toggleDia() {
  dia.value = !dia.value
}

function toggleNoche() {
  noche.value = !noche.value
}
</script>

<template>
  <Header></Header>

  <section>
    <button @click="toggleDia">Toggle de la variable Día</button>
    <button @click="toggleNoche">Toggle de la variable Noche</button>
    <p>La variable día tiene un valor de: {{ dia }}</p>
    <p>La variable noche tiene un valor de: {{ noche }}</p>
    <p v-if="dia">Es de día</p>
    <p v-if="noche">Es de noche</p>
    <p v-if="dia && noche">No puede ser a la vez de día y de noche</p>
    <p v-if="!dia && !noche">Tiene que ser de día o ser de noche</p>
  </section>

  <section>
    <p>Para mostrar la edad de {{ persona.name }} accedo usando el moustache.</p>
    <p>La edad de {{ persona.name }} es {{ persona.edad }}</p>
    <p>El objeto persona es: {{ persona }}</p>
  </section>

  <section>
    <ul>
      <li v-for="animal in animales">{{ animal }}</li>
      <li>{{ animales[1] }}</li>
    </ul>
  </section>

  <section>
    <p>Escribe aquí tu nombre:</p>
    <input v-model="miNombre" type="text" name="nombre" />
    <button
      @click="
        () => {
          console.log(miNombre)
        }
      "
    >
      Console Log
    </button>
    <p>Mi nombre actual es: {{ miNombre }}</p>
  </section>

  <section>
    <p>Inserta el tipo de error.</p>
    <input v-model="errorType" type="text" />
    <p :class="errorType">¡Error! ¡Has hecho algo rematadamente mal!</p>
  </section>
</template>

<style scoped>
.errorTexto {
  background: rgb(186, 6, 6);
  color: white;
  padding: 10px;
}

.errorNumero {
  background: rgb(236, 239, 20);
  color: rgb(82, 27, 233);
  padding: 10px;
}

section {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

section button {
  width: 200px;
  height: 40px;
  background-color: lightgreen;
}
</style>
