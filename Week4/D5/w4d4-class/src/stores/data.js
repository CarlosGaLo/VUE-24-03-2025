import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', ()=>{

    const user = {
        nombre: "Valentina",
        apellido: "Chimento",
        localizacion: "Barcelona",
        imagen: "url"
    }

    const counter = ref(0);
    const doubleCounter = computed(()=> counter.value*2)

    function increment(){
        counter.value++;
    }


    return { user, counter, doubleCounter, increment}
})