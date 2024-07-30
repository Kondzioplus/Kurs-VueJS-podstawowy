import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorView from '@/views/AuthorView.vue'
import AuthorDetails from '@/components/AuthorDetails.vue'
import AuthorEdit from '@/components/AuthorEdit.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: { pageName: 'Programowanie VueJS'}
  },
  {
    path: '/author',
    name: 'author',
    component: AuthorView,
    children: [
      { path: ':name', component: AuthorDetails, props: true, name: 'author-name' },
      { path: ':name/edit', component: AuthorEdit }
    ]
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
