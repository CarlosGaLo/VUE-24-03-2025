<script setup>
//¡Importante! Recuerda que para que este código funcione, debes pulsar primero el botón que quieres probar. Si no pulsas el botón el elemento no estará activo y por lo tanto no funcionará.
const handleClick = () => {
  console.log('Ey! Has hecho click!')
}

const handleScroll = () => {
  console.log('Genial, estás scroleando')
}

const handleMouseWheel = () => {
  console.log('Ahora estoy detectando la rueda')
}

const handleKeyDown = (event) => {
  if (event.key === 'j') {
    console.log('Así puedo detectar la tecla "j" del teclado')
  }
}

const handleComboKeys = (event) => {
  if (event.ctrlKey && event.key === 'i') {
    console.log('Ahora detecto la P y la J')
  }
}

// Eventos con modificadores. Revisa el HTML para ver que, tras el @Event hay siempre un .modificador
const handleSubmit = () => {
  console.log('Submit prevenido. Así no se recarga la página. Muy típico para los forms.')
}

const handleStop = () => {
  console.log('Evento detenido')
}

const handleSelf = () => {
  console.log('Click en el contenedor, no en sus hijos')
}

const handleExact = () => {
  console.log('Ctrl presionado exactamente, no otras teclas')
}
</script>

<template>
  <div>
    <button @click="handleClick">Click normal</button>
    <button @mousedown.middle="handleMouseWheel">Botón de la rueda del ratón</button>
    <button @keydown="handleKeyDown">Tecla J</button>
    <button @keydown.ctrl.i="handleComboKeys">Tecla control e I</button>
    <br />
    <div class="scroll" @scroll="handleScroll">
      <!-- Añadimos mucho texto para poder hacer scroll -->
      <p>Scroll con el ratón</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit perspiciatis autem
        consectetur, ipsa in sequi unde fugiat, repellendus officia ex eius magnam nulla porro
        rerum. Tempore qui ullam dolorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit perspiciatis autem
        consectetur, ipsa in sequi unde fugiat, repellendus officia ex eius magnam nulla porro
        rerum. Tempore qui ullam dolorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit perspiciatis autem
        consectetur, ipsa in sequi unde fugiat, repellendus officia ex eius magnam nulla porro
        rerum. Tempore qui ullam dolorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit perspiciatis autem
        consectetur, ipsa in sequi unde fugiat, repellendus officia ex eius magnam nulla porro
        rerum. Tempore qui ullam dolorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit perspiciatis autem
        consectetur, ipsa in sequi unde fugiat, repellendus officia ex eius magnam nulla porro
        rerum. Tempore qui ullam dolorem.
      </p>
    </div>
  </div>
  <div>
    <!-- Ejemplo de .prevent -->
    <form @submit.prevent="handleSubmit">
      <button type="submit">Enviar (prevenir el comportamiento por defecto)</button>
    </form>

    <!-- Ejemplo de .stop -->
    <article
      @click="
        () => {
          console.log('Mostrar mensaje')
        }
      "
    >
      <!-- Aquí vemos que, si no usamos el handleStop saltará el mensaje del padre. Pero al tener el stop, salta el mensaje del hijo. -->
      <div @click.stop="handleStop">
        <button>Detener la propagación del evento</button>
      </div>
    </article>

    <!-- Ejemplo de .self -->
    <div class="isBigger" @click.self="handleSelf">
      <button>Este botón dispara el evento, pero no sus hijos</button>
      <button>Este botón también dispara el evento</button>
    </div>

    <!-- Ejemplo de .exact -->
    <!-- Solo se lanza el disparador si se presiona específicamente un tecla. En este caso control. -->
    <input @keydown.ctrl.exact="handleExact" />
  </div>
</template>

<style scoped>
.scroll {
  height: 60px;
  background-color: lightcoral;
  overflow: scroll;
}

.isBigger {
  height: 200px;
  background-color: lightcyan;
}
</style>
