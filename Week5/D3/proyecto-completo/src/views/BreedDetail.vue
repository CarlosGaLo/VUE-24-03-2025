<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDogStore } from '../stores/dogStore'

const route = useRoute()
const breedId = Number(route.params.id)
const dogStore = useDogStore()

const breed = computed(() => dogStore.selectedBreed)
const images = computed(() => dogStore.images)

onMounted(() => {
  dogStore.fetchImagesByBreed(breedId)
})
</script>
<template>
  <div v-if="breed" class="breed-detail">
    <h1>{{ breed.name }}</h1>
    <div class="info">
      <p><strong>Origen:</strong> {{ breed.origin || 'Desconocido' }}</p>
      <p><strong>Altura:</strong> {{ breed.height.metric }} cm</p>
      <p><strong>Peso:</strong> {{ breed.weight.metric }} kg</p>
      <p><strong>Esperanza de vida:</strong> {{ breed.life_span }}</p>
    </div>

    <h2>Imágenes</h2>
    <div class="image-gallery">
      <img v-for="img in images" :key="img.id" :src="img.url" :alt="breed.name" />
    </div>
  </div>
</template>

<style scoped>
.breed-detail {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fffefc;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.breed-detail h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.breed-detail .info {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #555;
}

.breed-detail h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #222;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.image-gallery img {
  max-width: 200px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.image-gallery img:hover {
  transform: scale(1.05);
}
</style>
