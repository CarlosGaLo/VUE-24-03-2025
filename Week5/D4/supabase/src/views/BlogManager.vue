<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'

const store = useAppStore()
const nuevoBlog = ref({
  html_blog: '',
  linked: '',
})
const editando = ref(null)

onMounted(() => {
  store.fetchBlogs()
})

const guardar = async () => {
  if (editando.value) {
    await store.actualizarBlog(editando.value.id, {
      html_blog: nuevoBlog.value.html_blog,
      linked: nuevoBlog.value.linked,
    })
    editando.value = null
  } else {
    await store.crearBlog(nuevoBlog.value)
  }
  nuevoBlog.value = { html_blog: '', linked: '' }
}

const editar = (blog) => {
  editando.value = blog
  nuevoBlog.value = { html_blog: blog.html_blog, linked: blog.linked }
}

const cancelar = () => {
  editando.value = null
  nuevoBlog.value = { html_blog: '', linked: '' }
}
</script>

<template>
  <section class="blog-container">
    <div class="blog-list">
      <h2>Lista de Blogs</h2>
      <ul>
        <li v-for="b in store.blogs" :key="b.id">
          <div class="blog-item">
            <p><strong>Contenido:</strong> {{ b.html_blog }}</p>
            <small>Referente: {{ b.linked }}</small>
            <div class="acciones">
              <button @click="editar(b)">Ver / Editar</button>
              <button @click="store.borrarBlog(b.id)" class="peligro">Eliminar</button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="blog-form">
      <h2>{{ editando ? 'Editar Blog' : 'Crear Blog' }}</h2>
      <form @submit.prevent="guardar">
        <input v-model="nuevoBlog.html_blog" placeholder="Contenido HTML" />
        <input v-model="nuevoBlog.linked" placeholder="Email u otra referencia" />
        <div class="botones">
          <button type="submit" class="principal">
            {{ editando ? 'Actualizar' : 'Crear' }}
          </button>
          <button v-if="editando" @click="cancelar" type="button" class="secundario">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.blog-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.blog-list,
.blog-form {
  flex: 1 1 300px;
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.blog-list h2,
.blog-form h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.blog-list ul {
  list-style: none;
  padding: 0;
}

.blog-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.blog-item p {
  margin-bottom: 0.4rem;
}

.acciones {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.acciones button {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: #3b82f6;
  color: white;
}

.acciones .peligro {
  background: #ef4444;
}

.blog-form input {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.botones {
  display: flex;
  gap: 0.5rem;
}

.principal {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

.secundario {
  background: #9ca3af;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
</style>
