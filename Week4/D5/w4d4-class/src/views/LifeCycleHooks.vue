<script setup>
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue'

onBeforeMount(()=> {console.log("On Before Mount");})
onMounted(()=> {console.log("On Mounted");})

</script>

<template>
    <h1>LifeCycle Hooks</h1>

    <p class="mini">Aquí: onBeforeMount</p>
    <p>Montar el componente</p>
    <p class="mini">Aquí: onMounted</p>
    <p class="mini">Aquí: onBeforeUpdate</p>
    <p>Actualizar el componente</p>
    <p class="mini">Aquí: OnUpdated</p>
    <p class="mini">Aquí: onBeforeUnmount</p>
    <p>Borrar el componente</p>
    <p class="mini">Aquí: onUnmounted</p>
</template>

<style scoped>
.mini{
    background-color: lightcoral;
    font-size: 12px;
}

</style>