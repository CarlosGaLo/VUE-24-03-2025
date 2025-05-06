<script setup>
import { ref } from 'vue'

const name = ref('')
const lastName = ref('')
const dni = ref('')
const email = ref('')
const msg = ref('')
const errorName = ref('')
const errorEmail = ref('')
const textoGrande = ref('')

function tieneNumeros(text) {
  let result = false

  const regex = /\d/
  if (regex.test(text)) result = true

  return result
}

function tieneArroba(text) {
  return !text.toString().includes('@')
}

function checkForm() {
  let nombreTieneError = tieneNumeros(name.value)
  let apellidoTieneError = tieneNumeros(lastName.value)
  let emailTieneError = tieneArroba(email.value)

  if (nombreTieneError || apellidoTieneError) errorName.value = 'errorMsg'
  if (emailTieneError) errorEmail.value = 'errorMsg'

  if (!nombreTieneError && !apellidoTieneError && !emailTieneError) console.log(textoGrande.value)
}
</script>

<template>
  <section>
    <h1>Mi Formulario</h1>
    <form @submit.prevent="checkForm" class="center" action="">
      <div>
        <label for="name">Nombre</label>
        <input :class="errorName" v-model="name" type="text" />
      </div>
      <div>
        <label for="name">Apellidos</label>
        <input :class="errorName" v-model="lastName" type="text" />
      </div>
      <div>
        <label for="name">DNI</label>
        <input v-model="dni" type="text" />
      </div>
      <div>
        <label for="name">E-mail</label>
        <input :class="errorEmail" v-model="email" type="text" />
      </div>
      <div>
        <label for="name">Mensaje</label>
        <textarea v-model="textoGrande" name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">Enviar formulario</button>
    </form>
  </section>
</template>

<style scoped>
label {
  margin-top: 30px;
  display: block;
  width: 100px;
}
input {
  width: 200px;
}

.center {
  background-color: rgb(151, 151, 196);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.errorMsg {
  border: 5px solid red;
}
</style>
