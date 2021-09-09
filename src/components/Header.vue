<template>
   <div id="app1">
      <div id="nav1">
      <b-navbar toggleable="lg" type="dark" variant="dark">
         <b-navbar-brand  class="Titulo" href="#"> SACRIS</b-navbar-brand>
           <router-link to="/dashboard">Usuario</router-link> |
           <router-link to="/TipoDoc">Tipo documento</router-link> |
           <router-link to="/TipoUsu">Tipo Usuario</router-link>|
           <router-link to="/">Salir</router-link>
      </b-navbar>
    </div>
   </div>
    

<!-- <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand class="Titulo" href="#"> SACRIS</b-navbar-brand>
           <router-link to="/dashboard">Usuario</router-link> |
           <router-link to="/TipoDoc">Tipo documento</router-link> |
           <router-link to="/TipoUsu">Tipo Usuario</router-link>
      </b-navbar>
        <br><br>
</div> -->
    
</template>

<style>
#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfe6ec;
}

#nav1 {
 margin-bottom: 30px;
}

#nav1 a {
  font-weight: bold;
  color: #d7dde4;
}

#nav1 a.router-link-exact-active {
  color: #b94295;
}


.Titulo{
  font-family: 'Courier New', Courier, monospace;
  
}
</style>