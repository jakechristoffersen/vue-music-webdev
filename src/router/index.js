import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../components/Auth'
import Home from '../components/Home'
import Itunes from '../components/Itunes'
import Mytunes from '../components/Mytunes'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',    
    name: 'Auth',
    component: Auth
  },
  {
    path: '/home',
    name: 'Home',
    component: Home  
  },
  {
    path: '/Itunes',
    name: 'Itunes',
    component: Itunes  
  },
  {
    path: '/mytunes',
    name: 'Mytunes',
    component: Mytunes  
  }
  
]
})