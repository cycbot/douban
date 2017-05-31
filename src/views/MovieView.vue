<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="tags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
  import Scroller from '../components/Scroller.vue'
  import DownloadApp from '../components/DownloadApp.vue'
  import Types from '../components/Types.vue'
  export default {
    name: 'movie-view',
    components: { Scroller, Types, DownloadApp},
    data () {
      return {
        hotMovies: [],
        newMovies: [],
        topMovies: []
      }
    },
    computed: {
      tags: function () {
        return this.$store.state.movieTags
      }
    },
    beforeMount () {
      this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters?count=8')
        .then(res => {
          this.hotMovies = res.body.subjects
        })
      this.$http.jsonp('http://api.douban.com/v2/movie/coming_soon?count=8')
        .then(res => {
          this.newMovies = res.body.subjects
          console.log(this.newMovies)
        })
      this.$http.jsonp('http://api.douban.com/v2/movie/top250?count=8')
        .then(res => {
          this.topMovies = res.body.subjects
          console.log(this.topMovies)
        })
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
