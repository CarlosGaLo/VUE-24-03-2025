<script setup>
import { useRouter, useRoute } from 'vue-router'
import LoginComponent from './components/LoginComponent.vue'

const router = useRouter()
const route = useRoute()

const isActive = (path) => route.path === path

const goTo = (path) => {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>

<template>
  <LoginComponent></LoginComponent>
  <nav class="flex gap-4 justify-center mb-6">
    <button
      @click="goTo('/users')"
      :class="[
        'px-4 py-2 rounded',
        isActive('/users') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700',
      ]"
    >
      Usuarios
    </button>
    <button
      @click="goTo('/')"
      :class="[
        'px-4 py-2 rounded',
        isActive('/') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700',
      ]"
    >
      Blog
    </button>
  </nav>

  <main class="p-4 max-w-xl mx-auto space-y-8">
    <router-view />
  </main>
</template>

<style scoped></style>
