<template>
  <div class="home-view has-header">
    <sub-nav quickNav="ok"></sub-nav>

  </div>
</template>

<script>
  import SubNav from '../components/SubNav.vue'

  export default {
    name: 'home-view',
    components: { SubNav },
    data () {
      return {

      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
