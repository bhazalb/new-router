import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'JobView',
    component: JobsView
  },
  { 
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: JobsDetails,
    props: true
  },
  // redirect (yönlendirme)
  {
    path: '/all-jobs',
    redirect: '/jobs/'
  },

  //catchall 404
  {
    path: '/:catchAll(.*)',
    name:'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
