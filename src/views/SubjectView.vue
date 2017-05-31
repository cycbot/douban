<template>
  <div class="subject-view has-header">
    <banner :title="bannerTitle"></banner>
    <div class="subject-card">
      <h1 class="title">{{subject.title}}</h1>
      <div class="subject-info">
        <div class="right">
          <a href="#">
            <img v-if="subject.images" :src="subject.images.large" alt="cover">
          </a>
        </div>
        <div class="left" v-if="subject.rating">
          <rating :rating="subject.rating">
            <span slot="ratingsCount">{{subject.rating.numRaters}}人评价</span>
          </rating>
          <template v-if="movieMeta">
            <p class="meta">{{movieMeta}}</p>
            <a href="#" class="open-app">
              用App查看影人资料
            </a>
          </template>
          <template v-if="bookMeta">
            <p class="meta">{{bookMeta}}</p>
            <a href="#" class="buy">
              在豆瓣购买
            </a>
          </template>
        </div>
      </div>
      <div v-if="subject.author" class="vendors-link">
        <a class="link">
          在哪儿买这本书？
          <span class="info">
            豆瓣阅读电子书 66.00元起
          </span>
        </a>
      </div>
      <subject-mark></subject-mark>
      <div class="subject-intro">
        <h2>{{subject.title}}的剧情简介</h2>
        <p>
          {{isExpand ? summary : subject.summary}}……
          <a href="javascript:;" v-show="isExpand" @click="expand">(展开)</a>
        </p>
      </div>
      <tags noTitle="false"></tags>
      <div class="subject-pics">
        <h2>{{subject.title}}的图片</h2>
        <ul v-if="subject.images">
          <li class="pic">
            <a href="#">
              <img :src="subject.images.large">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img :src="subject.images.large">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img :src="subject.images.large">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="subject-comments">
      <h2>{{subject.title}}的短评</h2>
      <div class="content-list">
        <card v-for="item in items" :key="item"></card>
        <a href="#" class="list-link">显示更多评论</a>
      </div>
    </div>
    <div class="ad">
      <banner isAd="true" :adImg="adImgUrl" noContent></banner>
    </div>
    <div class="subject-question">
      <h2>关于{{subject.title}}的问答</h2>
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
  import Tags from '../components/Tags.vue'
  import Rating from '../components/Rating.vue'
  import subjectMark from '../components/SubjectMark.vue'

  export default {
    name: 'subject-view',
    components: { Banner, Card, Scroller, DownloadApp, Tags, Rating, subjectMark},
    data () {
      return {
        bannerTitle: '聊聊你的观影感受',
        subject: {},
        isExpand: true,
        items: new Array(5),
        adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658',
        tags: [
          {
            title: '同时入选IMDB250和豆瓣电影250的电影',
            href: 'https://m.douban.com/doulist/968362/',
            color: '#FFAC2D'
          },
          {
            title: '同时入选IMDB250和豆瓣电影250的电影',
            href: 'https://m.douban.com/doulist/968362/',
            color: '#FFAC2D'
          },
          {
            title: '同时入选IMDB250和豆瓣电影250的电影',
            href: 'https://m.douban.com/doulist/968362/',
            color: '#FFAC2D'
          },

        ]
      }
    },
    computed: {
      movieMeta: function () {
        if (!this.subject.genres) return ''
        return this.subject.year + this.subject.genres.join(' / ') +
               this.subject.casts.map(item => item.name).join(' / ') +
               this.subject.directors.map(item => item.name).join(' / ') +
               ' / ' + this.subject.countries.join(' / ')
      },
      bookMeta: function () {
        if (!this.subject.author) return ''
        return this.subject.author.join(' / ') +
               this.subject.translator.join(' / ') + ' / ' +
               this.subject.puublisher + ' / ' +
               this.subject.binding + ' / ' + this.subject.pubdate
      },
      summary: function () {
        if (!this.subject.summary) return ''
        return this.subject.summary.slice(0, 120)
      }
    },
    methods: {
      expand: function (event) {
        this.isExpand = false
      }
    },
    beforeMount () {
      const id = this.$route.params.id
      const classify = this.$route.params.classify
      switch (classify) {
        case 'movie':
          this.$http.jsonp('https://api.douban.com/v2/' + classify + '/' + id)
            .then(res => {
              console.log(res.body)
              this.subject = res.body
            })
            break
        case 'book':
          this.$http.jsonp('https://api.douban.com/v2/' + classify + '/' + id)
            .then(res => {
              console.log(res.body)
              this.subject = res.body
            })
          break
        default:
          console.log('蛤')
      }

    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>


  .subject-card {
    padding: 0 1.8rem;

    h1 {
      margin: 2rem 0 0;
    }
  }

  .subject-info {
    overflow: hidden;
    margin-bottom: 3rem;

    .right {
      float: right;

      img {
        display: block;
        width: 100%;
        max-width: 10rem;
      }
    }

    .left {
      margin-right: 10rem;

      .meta {
        margin-top: 1.5rem;
        padding-right: 2.4rem;
        line-height: 1.6;
        font-size: 1.4rem;
        color: #494949;
      }

      .buy {
        display: inline-block;
        height: 2.4rem;
        padding: 0 0.6rem;
        line-height: 2.4rem;
        text-align: center;
        font-size: 1.3rem;
        color: #E76648;
        border: 0.1rem solid #E76648;
        border-radius: 0.3rem;
      }

      .open-app {
        display: block;
        margin-top: 1rem;
        line-height: 1;
        font-size: 1.4rem;
        color: #42bd56;
      }
    }
  }

  .vendors-link {
    position: relative;
    margin: 1.5rem 0;
    padding: 1rem 1.9rem 1rem 0;
    line-height: 2.4rem;
    font-size: 1.5rem;
    overflow: auto;
    box-sizing: border-box;

    .link {
      display: inline-block;
      width: 100%;
      position: relative;
    }

    .info {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      color: #ccc;
      font-size: 1.4rem;
    }

    &::before {
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background: #E8E8E8;
      content: '';
      position: absolute;
    }

    &::after {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #E8E8E8;
      content: '';
      position: absolute;
    }
  }

  .subject-intro, .tags, .subject-pics, .subject-comments,
  .ad, .subject-question {
    margin-bottom: 3rem;

    h2 {
      margin: 0 0 1.5rem;
      font-size: 1.5rem;
      color: #aaa;
    }
  }

  .subject-intro {
    p {
      //height: 10rem;
      font-size: 1.5rem;
      color: #494949;
      //overflow: hidden;
    }

    a {
      //float: right;
      color: #42bd56;
    }
  }

  .tags {
    li {
      display: inline-block;
      margin: 1rem 1rem 0 0;
      font-size: 1.5rem;
    }

    a {
      display: block;
      padding: 0 1.2rem;
      line-height: 2.8rem;
      font-size: 1.5rem;
      border-radius: 2.8rem;
      text-align: center;
      color: #494949;
      background: #f5f5f5;
    }
  }

  .subject-pics {
    ul {
      margin-right: -1.8rem;
      overflow-x: auto;
      white-space: nowrap;
    }

    li {
      height: 12rem;
      overflow: hidden;
      display: inline-block;
    }

    img {
      width: 18rem;
    }
  }

  .subject-comments h2, .subject-comments .list-link, .subject-question {
    margin: 0 1.8rem;
  }

  .subject-comments, .subject-question {
    .list-link {
      display: block;
      padding: 1.5rem 0;
      font-size: 1.6rem;
      line-height: 1.8rem;
      text-align: center;
      color: #42bd56;
    }
  }

  .ad {
    margin: 3rem 1.8rem;
    margin-top: -2rem;
  }

  .subject-question {
    h3 {
      padding: 0;
      line-height: 1.41;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    .info {
      margin-top: 0.5rem;
      font-size: 1.4rem;
      color: #42bd56;
    }
  }

</style>
