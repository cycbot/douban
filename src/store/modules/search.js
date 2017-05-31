/**
 * Created by cycbot on 2017/5/31.
 */
import Vue from 'vue'

const state = {
  queryRes: [],
  queryRes_movie: [],
  queryRes_book: [],
  queryRes_music: [],
}

const mutations = {
  query (state, payload) {
    switch (payload.tag) {
      case 'movie':
        state.queryRes_movie = payload.res
        break
      case 'book':
        state.queryRes_book = payload.res
        break
      case 'music':
        state.queryRes_book = payload.res
        break
      default:
        console.log('蛤')

    }
  }
}

const actions = {
  query ({ commit }, payload) {
    Vue.http.jsonp('https://api.douban.com/v2/movie/search?q=' +
      payload.queryStr + '&count=3')
      .then(res => {
        commit({
          type: 'query',
          tag: 'movie',
          res: res.body.subjects
        })
      })
    Vue.http.jsonp('https://api.douban.com/v2/book/search?q=' +
      payload.queryStr + '&count=3')
      .then(res => {
        commit({
          type: 'query',
          tag: 'book',
          res: res.body.subjects
        })
      })
    Vue.http.jsonp('https://api.douban.com/v2/music/search?q=' +
      payload.queryStr + '&count=3')
      .then(res => {
        commit({
          type: 'query',
          tag: 'music',
          res: res.body.subjects
        })
      })
  }
}

export default {
  state,
  mutations,
  actions
}
