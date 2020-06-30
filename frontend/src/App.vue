<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <EvesnipMain></EvesnipMain>
  </div>
</template>

<script>
import EvesnipMain from './components/EvesnipMain.vue'

export default {
  name: 'App',
  components: {
    EvesnipMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
