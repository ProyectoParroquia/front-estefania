<template>

<select class="form-control" name="idTipoDoc_FK" id="idTipoDoc_FK">
    <option v-for="documento in ListaDocumentos" :key="documento.idTipoDocumento" :value="documento.idTipoDocumento">{{documento.denominacionTipoDocumento}}</option>
</select>

</template>

<script>
import axios from 'axios';


export default {
    name:"TipoDocSelect",
   data(){
        return {
            ListaDocumentos:null,
            tokenLogin: localStorage.getItem('token')
        }
        
    },
    mounted:function(){
        let direccion = "http://localhost:3000/api/tipoDoc/";
                axios.get(direccion/* ,{headers: { token:this.tokenLogin } } */).then( data =>{
                this.ListaDocumentos = data.data;
                  }); 
    }
    
        
}

</script>
