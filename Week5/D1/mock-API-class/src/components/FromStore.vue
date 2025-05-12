<script setup>
import { ref } from 'vue'
import useUserStore from '../store/userStore.js'

const userStore = useUserStore()

userStore.fetchUsers()
const users = userStore.users
</script>

<template>
  <section>
    <h1>Datos llamados desde el componente</h1>
    <div>
      <h2>Lista de usuarios</h2>
      <ul v-if="users">
        <li v-for="user in users">{{ user.name }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
