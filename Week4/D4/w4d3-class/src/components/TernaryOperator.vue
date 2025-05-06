<script setup>
import {ref, computed} from 'vue'

const condicion = ref(true);

const message = computed(() => {
    /*
    if(condicion.value){
        return 'La condición es verdadera'
    } else {
        return 'La condición es falsa'
    }
    */
    return condicion.value ? 'La condición es verdadera' : 'La condición es falsa'
})
</script>

<template>
    <div>
        <br>
        <h2>Componente con operador Ternario</h2>
        <input type="checkbox" v-model="condicion">
        <p>{{ message }}</p>
    </div>
</template>

<style scoped></style>