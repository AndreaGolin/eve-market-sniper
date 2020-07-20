<template>
  <div id="app">
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


<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
