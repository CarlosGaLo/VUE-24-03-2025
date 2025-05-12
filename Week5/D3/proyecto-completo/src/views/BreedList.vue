<script setup>
import { onMounted, computed } from 'vue'
import { useDogStore } from '../stores/dogStore'

const store = useDogStore()

onMounted(() => {
  if (!store.breeds.length) {
    store.fetchBreeds()
  }
})

const breeds = computed(() => store.breeds)
</script>

<template>
  <div class="breed-list">
    <h1>Lista de Razas Perrunas</h1>
    <ul>
      <li v-for="breed in breeds" :key="breed.id">
        <router-link :to="`/breed/${breed.id}`">{{ breed.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.breed-list {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.breed-list h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

.breed-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.breed-list li {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.breed-list a {
  text-decoration: none;
  color: #2c3e50;
  transition: color 0.2s ease;
}

.breed-list a:hover {
  color: #42b983;
  font-weight: bold;
}
</style>
