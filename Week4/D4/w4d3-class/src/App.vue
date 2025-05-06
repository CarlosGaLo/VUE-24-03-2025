<script setup>
import PropsComponent from './components/PropsComponent.vue'
import EventsComponents from './components/EventsComponents.vue'
import CustomEvents from './components/CustomEvents.vue'
import WatchersComponent from './components/WatchersComponent.vue'
import ComputedProperties from './components/ComputedProperties.vue'
import TernaryOperator from './components/TernaryOperator.vue'

const sciFiMovies = [
  { title: 'Blade Runner', year: 1982 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Inception', year: 2010 }
]

const moviesAlt = [
  { title: 'El club de la lucha', year: 1999 },
  { title: 'La amenaza fantasma', year: 1999 }
]

const ost = [
  { title: 'Interstellar', year: 2014, composer: 'Hans Zimmer' },
  { title: 'Blade Runner 2049', year: 2017, composer: 'Hans Zimmer, Benjamin Wallfisch' },
  { title: 'Inception', year: 2010, composer: 'Hans Zimmer' }
]

const videogame = {
  tipo: {
    primary: 'aventura gráfica',
    secondary: 'acción',
    addendum: {
      title: 'opcional',
      year: 1998
    }
  }
}
</script>

<template>
  <main>
    <!-- <PropsComponent :movies="sciFiMovies" :soundtracks="ost" :videogame="videogame"></PropsComponent>
    <PropsComponent :movies="moviesAlt"></PropsComponent> -->
    <!-- <EventsComponents></EventsComponents> -->
    <!-- <CustomEvents
      @emitCustomEvent="
        (event) => {
          console.log(event)
        }
      "
    ></CustomEvents> -->
    <WatchersComponent></WatchersComponent>
    <ComputedProperties></ComputedProperties>
    <TernaryOperator></TernaryOperator>
  </main>
</template>

<style scoped></style>
