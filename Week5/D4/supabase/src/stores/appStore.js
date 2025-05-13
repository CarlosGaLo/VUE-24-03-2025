// src/stores/appStore.js
import { defineStore } from 'pinia'
import { supabase } from '../stores/supabase'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // Usuarios
  const usuarios = ref([])

  const fetchUsuarios = async () => {
    const { data, error } = await supabase.from('usuarios').select('*')
    if (error) throw error
    usuarios.value = data
  }

  const crearUsuario = async (nuevoUsuario) => {
    const { data, error } = await supabase.from('usuarios').insert([nuevoUsuario])
    if (error) throw error
    await fetchUsuarios()
  }

  const borrarUsuario = async (id) => {
    const { error } = await supabase.from('usuarios').delete().eq('id', id)
    if (error) throw error
    await fetchUsuarios()
  }

  // Blogs
  const blogs = ref([])

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from('blog')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    blogs.value = data
  }

  const crearBlog = async (nuevoBlog) => {
    const { error } = await supabase.from('blog').insert([nuevoBlog])
    if (error) throw error
    await fetchBlogs()
  }

  const actualizarBlog = async (id, cambios) => {
    const { error } = await supabase.from('blog').update(cambios).eq('id', id)
    if (error) throw error
    await fetchBlogs()
  }

  const borrarBlog = async (id) => {
    const { error } = await supabase.from('blog').delete().eq('id', id)
    if (error) throw error
    await fetchBlogs()
  }

  // Usuario actual
  const usuarioActual = ref(null)

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    usuarioActual.value = data.user
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    usuarioActual.value = null
  }

  const obtenerUsuario = async () => {
    const { data } = await supabase.auth.getUser()
    usuarioActual.value = data.user
  }

  return {
    // Usuarios
    usuarios,
    fetchUsuarios,
    crearUsuario,
    borrarUsuario,
    // Blogs
    blogs,
    fetchBlogs,
    crearBlog,
    actualizarBlog,
    borrarBlog,
    usuarioActual,
    login,
    logout,
    obtenerUsuario,
  }
})
