<template>
  <md-toolbar md-theme="white">
    <h1 class="md-title" style="flex: 1">豆瓣</h1>

    <md-button style="color: #2384E8">电影</md-button>
    <md-button style="color: #9F7860">图书</md-button>
    <md-button style="color: #E4A813">广播</md-button>
    <md-button style="color: #2AB8CC">小组</md-button>

    <md-button>
      <md-icon>search</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
