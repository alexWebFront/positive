import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import Program from "@/pages/Program";
import '@/css/main.css'
import Scheme from "@/pages/Scheme";
import Program2 from "@/pages/Program2";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/program',
    component: Program
  },
  {
    path: '/program2',
    component: Program2
  },
  {
    path: '/scheme',
    component: Scheme
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
