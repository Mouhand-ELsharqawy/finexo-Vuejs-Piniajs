import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import TeamView from '../views/TeamView.vue'
import TestimonialView from '../views/TestimonialView.vue'
import CurrencyView from '../views/currency/CurrencyView.vue'
import AddCurrencyView from '../views/currency/AddCurrencyView.vue'
import SingleCurrencyView from '../views/currency/SingleCurrencyView.vue' 
import UpdateCurrencyView from '../views/currency/UpdateCurrencyView.vue' 
import CustomerView from '../views/customer/CustomerView.vue' 
import AddCustomerView from '../views/customer/AddCustomerView.vue' 
import SingleCustomerView from '../views/customer/SingleCustomerView.vue' 
import UpdateCustomerView from '../views/customer/UpdateCustomerView.vue' 
import AddServiceView from '../views/service/AddServiceView.vue' 
import SingleServiceView from '../views/service/SingleServiceView.vue' 
import UpdateServiceView from '../views/service/UpdateServiceView.vue' 
import AddTeamView from '../views/team/AddTeamView.vue'
import SingleTeamView from '../views/team/SingleTeamView.vue'
import UpdateTeamView from '../views/team/UpdateTeamView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/service/add',
    name: 'addservice',
    component: AddServiceView
  },
  {
    path: '/service/single',
    name: 'singleservice',
    component: SingleServiceView,
    props: true
  },
  {
    path: '/service/update',
    name: 'updateservice',
    component: UpdateServiceView,
    props: true
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/team/add',
    name: 'addteam',
    component: AddTeamView
  },
  {
    path: '/team/single',
    name: 'singleteam',
    component: SingleTeamView,
    props: true
  },
  {
    path: '/team/update',
    name: 'updateteam',
    component: UpdateTeamView,
    props: true
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: TestimonialView
  },
  {
    path: '/currency',
    name: 'currency',
    component: CurrencyView
  },
  {
    path: '/currency/add',
    name: 'addcurrency',
    component: AddCurrencyView
  },
  {
    path: '/currency/single',
    name: 'singlecurrency',
    component: SingleCurrencyView,
    props: true
  },
  {
    path: '/currency/update',
    name: 'updatecurrency',
    component: UpdateCurrencyView,
    props: true
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView
  },
  {
    path: '/customer/add',
    name: 'addcustomer',
    component: AddCustomerView
  },
  {
    path: '/customer/single',
    name: 'singlecustomer',
    component: SingleCustomerView,
    props: true
  },
  {
    path: '/customer/update',
    name: 'updatecustomer',
    component: UpdateCustomerView,
    props: true
  },
  {
    path: '/:catchAll .* ',
    component:   () => import("../views/NotFoundView.vue") 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL) ,
  routes
})

export default router
