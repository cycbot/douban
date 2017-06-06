/**
 * Created by cycbot on 2017/5/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import activities from './modules/activities'
import book from './modules/book'
import subject from './modules/subject'
import search from './modules/search'
import group from './modules/group'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    activities,
    book,
    subject,
    group,
    search
  }
})
