import Vue from 'vue'
import Router from 'vue-router'
import MovieView from '../views/MovieView.vue'
import BookView from '../views/BookView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieView',
      component: MovieView
    },
    {
      path: '/book',
      name: 'BookView',
      component: BookView
    }
  ]
})
