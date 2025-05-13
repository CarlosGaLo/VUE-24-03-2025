<!-- src/views/UsuarioManager.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'

const store = useAppStore()
const nuevoUsuario = ref({ nombre: '' })

onMounted(() => {
  store.fetchUsuarios()
})

const crear = async () => {
  if (!nuevoUsuario.value.nombre) return
  await store.crearUsuario(nuevoUsuario.value)
  nuevoUsuario.value.nombre = ''
}
</script>

<template>
  <section class="contenedor">
    <h2>Gestión de Usuarios</h2>
    <form @submit.prevent="crear" class="formulario">
      <input v-model="nuevoUsuario.nombre" placeholder="Nombre del usuario" />
      <button type="submit">Crear</button>
    </form>

    <ul class="lista">
      <li v-for="u in store.usuarios" :key="u.id">
        <span>{{ u.nombre }}</span>
        <button @click="store.borrarUsuario(u.id)">Eliminar</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.contenedor {
  background: #fef3c7;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #78350f;
}
.formulario {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.formulario input {
  flex: 1;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #fcd34d;
}
.formulario button {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.lista {
  margin-top: 1rem;
}
.lista li {
  background: #fff7ed;
  border: 1px solid #fde68a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lista button {
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
}
</style>
