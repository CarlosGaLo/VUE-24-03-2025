<script setup>
//1º Aquí decimos: Oye, recuerda que tendrás que mandar info a tu padre.
import { defineEmits } from 'vue';

//2º Declaramos la variable emits con el nombre de los eventos. En este caso el nombre es "emitCustomEvent".
const emits = defineEmits(['emitCustomEvent']);

//3º Creamos la función que lanzará el evento.
function lanzarEmit(){
    //A modo de ejemplo, creamos unos datos que irán junto al evento.
    const eventData = { message: 'Este es un evento personalizado'};
    //4º Finalmente, lanzamos el evento.
    emits('emitCustomEvent', eventData);
}

</script>

<template>
  <section>
    <h1>Custom Events</h1>
    <button @click="lanzarEmit">Lanzar Emit</button>
  </section>
</template>

<style scoped></style>
