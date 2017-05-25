<template>
  <div class="types">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li><a href="/movie/classic">经典<span></span></a></li>
        <li><a href="/movie/classic">冷门佳片<span></span></a></li>
        <li><a href="/movie/classic">豆瓣高分<span></span></a></li>
        <li><a href="/movie/classic">动作<span></span></a></li>
        <li><a href="/movie/classic">喜剧<span></span></a></li>
        <li><a href="/movie/classic">爱情<span></span></a></li>
        <li><a href="/movie/classic">悬疑<span></span></a></li>
        <li><a href="/movie/classic">科幻<span></span></a></li>
        <li><a href="/movie/classic">治愈<span></span></a></li>
        <li><a href="/movie/classic">文艺<span></span></a></li>
        <li><a href="/movie/classic">成长<span></span></a></li>
        <li><a href="/movie/classic">动画<span></span></a></li>
        <li><a href="/movie/classic">华语<span></span></a></li>
        <li><a href="/movie/classic">欧美<span></span></a></li>
        <li><a href="/movie/classic">韩国<span></span></a></li>
        <li><a href="/movie/classic">日本<span></span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'types',
      data () {
        return {

        }
      }
    };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .types {
    margin-top: 10px;

    h2 {
      height: 26px;
      line-height: 26px;
      padding: 0 16px;
      display: inline-block;
    }
  }
  .type-list {
    margin: 16px 0 0 16px;
    overflow: hidden;

    li {
      float: left;
      box-sizing: border-box;
      width: 50%;
      padding-right: 18px;
      height: 42px;
      line-height: 42px;
      border-top: solid 1px #eee;
      border-right: solid 1px #eee;
    }
    li:nth-child(2n) {
      padding-left: 18px;
    }

    span {
      color: #ccc;
      float: right;
      font-weight: bold;
      display: inline-block;
      border-right: solid 1px #ccc;
      border-bottom: solid 1px #ccc;
      width: 8px;
      height: 8px;
      transform: rotate(-45deg);
      margin-top: 1rem;
    }
  }

  li a {
    color: #42bd56;
  }


</style>
