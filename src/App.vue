<template>
  <appHeader />
  <router-view />
  <appFooter />
</template>

<script setup>
import appHeader from "./components/appHeader.vue";
import appFooter from "./components/appFooter.vue";
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
