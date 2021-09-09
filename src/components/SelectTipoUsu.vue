<template>

<select class="form-control" name="idTipoUsuario_FK" id="idTipoUsuario_FK">
    <option v-for="TipoUsuario in ListaTipoUsuarios" 
    :key="TipoUsuario.idTipoUsuario" :value="TipoUsuario.idTipoUsuario">
    {{TipoUsuario.nombreTipoUsuario}}</option>
</select>

</template>

<script>
import axios from 'axios';


export default {
    name:"TipoUsuarioSelect",
   data(){
        return {
            ListaTipoUsuarios:null,
        }
        
    },
    mounted:function(){
        let direccion = "http://localhost:3000/api/tipoUsuario/";
                axios.get(direccion).then( data =>{
                this.ListaTipoUsuarios = data.data;
                  }); 
    }
    
        
}

</script>
