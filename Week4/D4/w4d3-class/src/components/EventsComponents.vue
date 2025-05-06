<script setup>
const handleClick = (event) => {
  console.log(event)
  console.log('Me has hecho click!')
}

function handleMouse() {
  console.log('Has presionado la rueda del ratón!')
}

function handleJ(event) {
  console.log(event)
  if (event.key === 'j') console.log('Ey! Has pulsado la letra J')
}

function handleCtrlI() {
  console.log('Has pulsado Control e I a la vez')
}

function handleScroll() {
  console.log('Estás haciendo scroll')
}

function handleForm() {
  console.log('Recarga prevenida')
}

function handleStop() {
  console.log('Has pinchado en el botón del article. Propagación detenida')
}

function handleSelf() {
  console.log('Estamos lanzando el handle self. Vas a mover la ventana.')
}
</script>

<template>
  <button @click="handleClick">Click me!</button>
  <button @mousedown.middle="handleMouse">Rueda del ratón</button>
  <button @keydown="handleJ">Tecla J</button>
  <button @keydown.ctrl.i="handleCtrlI">Presiona control + i</button>
  <div class="scroll" @scroll="handleScroll">
    <p>Hacemos scroll</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus sed cum,
      perspiciatis, placeat ratione reprehenderit similique provident sit nostrum et accusamus
      minima porro laudantium eum ut, labore aperiam. Unde.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus sed cum,
      perspiciatis, placeat ratione reprehenderit similique provident sit nostrum et accusamus
      minima porro laudantium eum ut, labore aperiam. Unde.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus sed cum,
      perspiciatis, placeat ratione reprehenderit similique provident sit nostrum et accusamus
      minima porro laudantium eum ut, labore aperiam. Unde.
    </p>
  </div>
  <form @submit.prevent="handleForm">
    <button type="submit">Enviar</button>
  </form>
  <br />

  <article
    class="is-bigger"
    @click="
      () => {
        console.log('Has pinchado en el article')
      }
    "
  >
    <div @click.stop="handleStop">
      <button @click="() => {'Botón de propagación!'}">Detener la propagación</button>
    </div>
  </article>
  <br />
  <div class="is-bigger" @click.self="handleSelf">
    <button @click="() => {'Has aceptado'}">Aceptar</button>
    <button @click="() => {'Has rechazo'}">Rechazar</button>
  </div>

  <input type="text" @keydown.ctrl.exact="()=>{console.log('Has pulsado control')
  }">
</template>

<style scoped>
.scroll {
  height: 40px;
  overflow-y: scroll;
  background-color: lightcoral;
}

.is-bigger {
  width: 500px;
  height: 500px;
  background-color: lightgray;
}
</style>
