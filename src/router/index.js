import Vue from 'vue'
import Router from 'vue-router'
import MovieView from '../views/MovieView.vue'
import BookView from '../views/BookView.vue'
import StatusView from '../views/StatusView.vue'
import GroupView from '../views/GroupView.vue'
import PagesView from '../views/PagesView.vue'
import SubjectView from '../views/SubjectView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/pages'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: '/pages/:classify/subject/:id',
          name: 'SubjectView',
          components: {
            default: PagesView,
            subject: SubjectView
          }
        }
      ]
    }
  ]
})
