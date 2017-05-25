<template>
  <div class="movie-view has-header">
    <scroller title="最受关注图书|虚构类" type="hasCover" :items="novel"></scroller>
    <scroller title="最受关注图书|非虚构类" type="hasCover" :items="reality"></scroller>
    <scroller title="豆瓣纸书" type="hasCover" :items="travel">
      <div class="promItem" slot="promItem">
        <img src="../assets/s29172888.jpg" class="cover">
        <div class="content">
          <span class="price">￥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" type="onlyString"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
  import Scroller from '../components/Scroller.vue'
  import Types from '../components/Types.vue'
  import DownloadApp from '../components/DownloadApp.vue'
  export default {
    name: 'book-view',
    components: {
      Scroller,
      Types,
      DownloadApp
    },
    data () {
      return {
        novel: [],
        reality: [],
        travel: []
      }
    },
    beforeMount () {
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=虚构类&count=8')
        .then(res => {
           this.novel = res.body.books
        })
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=非虚构类&count=8')
        .then(res => {
          this.reality = res.body.books
        })
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=旅行&count=8')
        .then(res => {
          this.travel = res.body.books
        })
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .promItem {
    overflow: hidden;
    margin: 1.6rem 1.8rem 0 1.6rem;
  }
  .cover {
    float: left;
    width: 10rem;
    margin-right: 1.5rem;
  }
  .name {
    font-size: 2rem;
    color: #494949;
    margin: 1rem;
    max-width: 100%;
    line-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .price {
    float: right;
    color: #E76648;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
  .info {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5;
    color: #9B9B9B;
  }
</style>
