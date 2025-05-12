<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/api/users')
    if (!response.ok) {
      throw new Error('Network error')
    }
    const data = await response.json()
    users.value = data.users
  } catch (error) {
    console.error('Error fetching users: ', error)
  }
})
</script>

<template>
  <section>
    <h1>Datos llamados desde el componente</h1>
    <div>
      <h2>Lista de usuarios</h2>
      <ul>
        <li v-for="user in users">{{ user.name }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
