import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue';
import ListTD from '../views/TipoDoc/ListTD.vue';
import ListTU from '../views/TipoUsu/ListTU.vue';

import Editar from '../views/Editar.vue';
import EditarTD from '../views/TipoDoc/EditarTD.vue';
import EditarTU from '../views/TipoUsu/EditarTU.vue';

import Nuevo from '../views/Nuevo.vue';
import NuevoTD from '../views/TipoDoc/NuevoTD.vue';
import NuevoTU from '../views/TipoUsu/NuevoTU.vue';
 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/nuevo',
    name: 'Nuevo',
    component: Nuevo
  },

//RUTAS TIPO DOCUMENTO
  {
    path: '/TipoDoc',
    name: 'ListTD',
    component: ListTD
  },
  {
    path: '/editarTD/:id',
    name: 'EditarTD',
    component: EditarTD
  },
  {
    path: '/nuevoTD',
    name: 'NuevoTD',
    component: NuevoTD
  },

  //RUTAS TIPO Usu
  {
    path: '/TipoUsu',
    name: 'ListTU',
    component: ListTU
  },
  {
    path: '/editarTU/:id',
    name: 'EditarTU',
    component: EditarTU
  },
  {
    path: '/nuevoTU',
    name: 'NuevoTU',
    component: NuevoTU
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
