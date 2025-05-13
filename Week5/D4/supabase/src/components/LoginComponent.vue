<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { supabase } from '@/stores/supabase'

const store = useAppStore()

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const modoRegistro = ref(false)

const login = async () => {
  errorMsg.value = ''
  try {
    await store.login(email.value, password.value)
  } catch (err) {
    errorMsg.value = err.message
  }
}

const register = async () => {
  errorMsg.value = ''
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (error) throw error
    store.usuarioActual = data.user
  } catch (err) {
    errorMsg.value = err.message
  }
}

const logout = async () => {
  await store.logout()
}

onMounted(() => {
  store.obtenerUsuario()
})
</script>

<template>
  <section class="login-bar">
    <template v-if="store.usuarioActual">
      <span class="user">{{ store.usuarioActual.email }}</span>
      <button @click="logout">Cerrar sesión</button>
    </template>

    <template v-else>
      <form @submit.prevent="modoRegistro ? register() : login()" class="form-inline">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">{{ modoRegistro ? 'Registrarse' : 'Entrar' }}</button>
        <button type="button" @click="modoRegistro = !modoRegistro" class="alternar">
          {{ modoRegistro ? 'Ya tengo cuenta' : 'Crear cuenta' }}
        </button>
      </form>
    </template>

    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
  </section>
</template>

<style scoped>
.login-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  max-width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.form-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.form-inline input {
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 160px;
}

.form-inline button {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

.alternar {
  background: #9ca3af;
}

.user {
  font-weight: bold;
  color: #047857;
}

.error {
  color: #dc2626;
  font-size: 0.85rem;
}
</style>
