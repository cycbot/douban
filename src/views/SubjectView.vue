<template>
  <div class="subject-view has-header">
    <banner :title="bannerTitle"></banner>
    <div class="subject-card">
      <h1 class="title">嫌疑人X的献身</h1>
      <div class="subject-info">
        <div class="right">
          <a href="#">
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.webp">
          </a>
        </div>
        <div class="left">
          <p class="rating">
            <span class="rating-stars" data-rating="66.0">
              <span class="rating-star rating-star-medium-full"></span>
              <span class="rating-star rating-star-medium-full"></span>
              <span class="rating-star rating-star-medium-full"></span>
              <span class="rating-star rating-star-medium-half"></span>
              <span class="rating-star rating-star-medium-gray"></span>
            </span>
            <strong>6.6</strong>
            <span>42210人评价</span>
          </p>
          <p class="meta">
            112分钟 / 犯罪 / 悬疑 / 苏有朋(导演) / 王凯 / 张鲁一 / 林心如 / 叶祖新 / 丁冠森 / 邓恩熙 / 成泰燊 / 赵阳 / 侯明昊 / 焉栩嘉 / 2017-03-31(中国大陆) 上映
          </p>
          <a href="#" class="open-app">
            用App查看影人资料
          </a>
        </div>
      </div>
      <div class="subject-mark">
        <a href="javascript:">想看</a>
        <a href="javascript:">看过</a>
      </div>
      <div class="subject-intro">
        <h2>嫌疑人X的献身剧情简介</h2>
        <p>
          在刑警学院任职的物理天才唐川（王凯 饰）与中学教师石泓（张鲁一 饰）年少相识，因彼此对数学的共同兴趣而惺惺相惜，多年后唐川在调查一桩杀人案时， 身为石泓邻居的陈婧（林心如 饰）被列入警方的“嫌疑人”之中，石泓与唐川因此再度重逢，而唐川却在调查中发现了更大的秘密……
          <a href="javascript:" class="expand">(展开)</a>
        </p>
      </div>
      <div class="tags">
        <h2>查看更多豆瓣高分电影电视剧</h2>
        <ul>
          <li>
            <a href="#">悬疑</a>
          </li>
          <li>
            <a href="#">推理</a>
          </li>
          <li>
            <a href="#">小说改编</a>
          </li>
          <li>
            <a href="#">犯罪</a>
          </li>
          <li>
            <a href="#">国产</a>
          </li>
          <li>
            <a href="#">2017</a>
          </li>
          <li>
            <a href="#">中国大陆</a>
          </li>
          <li>
            <a href="#">剧情</a>
          </li>
        </ul>
      </div>
      <div class="subject-pics">
        <h2>嫌疑人X的献身的预告片(8)和图片(282)</h2>
        <ul>
          <li class="pic">
            <a href="#">
              <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.webp">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.webp">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.webp">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="subject-comments">
      <h2>嫌疑人X的献身的短评(27987)</h2>
      <div class="content-list">
        <card v-for="item in items" :key="item"></card>
        <a href="#" class="list-link">显示更多评论</a>
      </div>
    </div>
    <div class="ad">
      <banner isAd="true" :adImg="adImgUrl" noContent></banner>
    </div>
    <div class="subject-question">
      <h2>关于嫌疑人X的献身的问答(28)</h2>
      <ul class="list">
        <li>
          <a href="#">
            <h3>为什么大家对国产片这么苛刻？</h3>
            <div class="info">35回答</div>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>为什么大家对国产片这么苛刻？</h3>
            <div class="info">35回答</div>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>为什么大家对国产片这么苛刻？</h3>
            <div class="info">35回答</div>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>为什么大家对国产片这么苛刻？</h3>
            <div class="info">35回答</div>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>为什么大家对国产片这么苛刻？</h3>
            <div class="info">35回答</div>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>为什么大家对国产片这么苛刻？</h3>
            <div class="info">35回答</div>
          </a>
        </li>
        <a href="#" class="list-link">查看全部问答</a>
      </ul>
    </div>
    <scroller title="推荐的豆列" type="onlyString" :item="tags"></scroller>
    <download-app></download-app>
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Card from '../components/Card.vue'
  import Scroller from '../components/Scroller.vue'
  import DownloadApp from '../components/DownloadApp.vue'
  export default {
    name: 'subject-view',
    components: { Banner, Card, Scroller, DownloadApp},
    data () {
      return {
        bannerTitle: '聊聊你的观影感受',
        items: new Array(5),
        adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658',
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
