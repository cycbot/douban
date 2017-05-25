<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar.vue'
  export default {
    name: 'app',
    components: {HeaderBar}
  }
</script>

<style>
  html {
    font-size: 62.5%;
  }
  #app {
    max-width: 56.8rem;
    margin: 0 auto;
  }
  .has-header {
    margin-top: 4.8rem;
  }
  ul, li, a{
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: normal;
    color: #111;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
</style>
