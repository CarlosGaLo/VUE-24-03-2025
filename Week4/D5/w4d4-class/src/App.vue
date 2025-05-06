<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import StorePrimaryView from './views/StorePrimaryView.vue'
import StoreSecondaryView from './views/StoreSecondaryView.vue'
import LifeCycleHooks from './views/LifeCycleHooks.vue'
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <!-- Oye, Vue, aquí ponme el componente que has cargado mediante la ruta -->
    <!-- <router-view></router-view> -->
    <!-- <StorePrimaryView></StorePrimaryView>
    <StoreSecondaryView></StoreSecondaryView> -->
    <LifeCycleHooks></LifeCycleHooks>
  </main>
  <FooterComponent></FooterComponent>
</template>

<style scoped></style>
