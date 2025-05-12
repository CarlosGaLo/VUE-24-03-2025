<script setup>
import { useUserStore } from '../store/userPiniaStore.js'
import { storeToRefs } from 'pinia'

const store = useUserStore()

const { users } = storeToRefs(store)
store.fetchUsers()
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
