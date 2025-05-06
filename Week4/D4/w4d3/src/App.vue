<script setup>
import PropsComponent from './components/PropsComponent.vue'
import EventsComponent from './components/EventsComponent.vue'
import CustomEventsComponent from './components/CustomEventsComponent.vue'
import WatchersComponent from './components/WatchersComponent.vue'
import ComputedProperties from './components/ComputedProperties.vue'
import TernaryOperator from './components/TernaryOperator.vue'

const sciFiMovies = [
  { title: 'Blade Runner', year: 1982 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Inception', year: 2010 }
]

const soundtracks = [
  { title: 'Interstellar', year: 2014, composer: 'Hans Zimmer' },
  { title: 'Blade Runner 2049', year: 2017, composer: 'Hans Zimmer, Benjamin Wallfisch' },
  { title: 'Inception', year: 2010, composer: 'Hans Zimmer' }
]
</script>

<template>
  <main>
    <!-- <PropsComponent :movies="sciFiMovies" :soundtracks="soundtracks"></PropsComponent> -->
    <!-- <EventsComponent></EventsComponent> -->
    <CustomEventsComponent
      @emitCustomEvent="
        (em) => {
          console.log('Hemos recibido este texto: ' + em.message)
        }
      "
    ></CustomEventsComponent>
    <WatchersComponent></WatchersComponent>
    <ComputedProperties></ComputedProperties>
    <TernaryOperator></TernaryOperator>
  </main>
</template>

<style scoped></style>
