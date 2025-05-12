import { defineStore } from 'pinia'

const API_KEY = 'live_OsOtgPeINBtBlZGM7QCQ06Am5UoapK0kXwnkq9CRp60fp5LyIl5tQIsze0W08WI7'

export const useDogStore = defineStore('dogs', {
  state: () => ({
    breeds: [],
    images: [],
    selectedBreed: null,
  }),
  actions: {
    async fetchBreeds() {
      try {
        const res = await fetch('https://api.thedogapi.com/v1/breeds', {
          headers: { 'x-api-key': API_KEY },
        })
        if (!res.ok) throw new Error('Error al obtener razas')
        this.breeds = await res.json()
      } catch (error) {
        console.error('fetchBreeds:', error)
      }
    },

    async fetchImagesByBreed(breedId) {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/images/search?breed_id=${breedId}&limit=10`,
          { headers: { 'x-api-key': API_KEY } },
        )
        if (!res.ok) throw new Error('Error al obtener imágenes')
        const data = await res.json()
        this.images = data
        this.selectedBreed = this.breeds.find((b) => b.id === breedId) || null
      } catch (error) {
        console.error('fetchImagesByBreed:', error)
      }
    },
  },
})
