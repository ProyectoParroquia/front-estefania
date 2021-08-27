<template>
        <div>
          <Header />
            <div class="container">
              
                <form action="" class="form-horizontal">

                    <input type="hidden" name="idUsu" id="idUsu" v-model="form.idUsuario">

                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Nombre</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="Nombre" id="Nombre" v-model="form.nombreUsuario">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">Apellido</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="ApellidoUsuario" id="ApellidoUsuario" v-model="form.apellidoUsuario">
                          </div>
                        </div> 
                    </div>

                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Correo</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="Correo" id="Correo" v-model="form.correoUsuario">
                       </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Tipo Doc</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="TipoDoc" id="TipoDoc" v-model="form.idTipoDoc_FK">
                            </div>
                            <!-- <div class="col-sm-7">
                                <SelectTipoDoc />
                            </div> -->
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">Numero Documento</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="NumeroDocumento" id="NumeroDocumento" v-model="form.numeroDocumentoUsuario">
                          </div>
                        </div> 
                    </div>

                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Fecha Nacimiento</label>
                       <div class="col-sm-10">
                          <input type="date" class="form-control" name="FechaNacimiento" id="FechaNacimiento" v-model="form.fechaNacimientoUsuario">
                       </div>
                    </div>

                    <div class="form-group left row ">
                        <div class="col">
                              <label for="" class="control-label col-sm-2">Usuario</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="username" id="username" v-model="form.username">
                            </div>
                        </div>
                        
                    </div>

                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-danger margen mx-4" v-on:click="functionBtn(botonForm.valor, botonForm.idUsuario)" >{{botonForm.valor}}</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>
            </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
/* import SelectTipoDoc from '@/components/SelectTipoDoc.vue' */
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:"Editar",
  components:{
    Header
    /* SelectTipoDoc */
    //Footer
  },
  data:function(){
    return {
        form:{
                "idUsuario":"",
                "nombreUsuario": "",
                "apellidoUsuario": "",
                "correoUsuario": "",
                "numeroDocumentoUsuario": "",
                "fechaNacimientoUsuario": "",
    
                "username": "",
                
            
                "idTipoDoc_FK":"",

                "estadoUsuario":""
          /* "token" : "" */ 
        },
        botonForm:{
          "valor":"",
          "idUsuario":"",
          
        }
    }
  },
  methods:{
      salir(){
        this.$router.push("/dashboard");
      },
      editar(){
        /* this.form.idTipoDoc_FK = document.getElementById("idTipoDoc_FK").value */
          axios.put("http://localhost:3000/api/usuarios/actualizar/"+this.form.idUsuario, this.form)
          .then(data =>{
            if(data.status===201){  
              console.log(data)
              this.makeToast("Actualizado",data.data.success,"info");
                   setTimeout(this.salir,1800);
            }else{
              this.makeToast("Error",data.data.mensage,"danger");
            }
          })
      },
      functionBtn(accion, idUsuario){
            axios.put("http://localhost:3000/api/usuarios/"+accion+"/"+idUsuario)
              .then( () =>{
                   this.makeToast("Actualizado","Se a hecho un cambio en el estado","succes");
                   setTimeout(this.salir,1800);
              })
          },
      makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        }
  },
  
  mounted:function(){
      this.form.idUsuario = this.$route.params.id;
      axios.get("http://localhost:3000/api/usuarios/id/"+ this.form.idUsuario)
      .then( datos => {
        console.log(datos)
        this.form.nombreUsuario = datos.data.nombreUsuario;
        this.form.apellidoUsuario = datos.data.apellidoUsuario;
        this.form.correoUsuario = datos.data.correoUsuario;
        this.form.numeroDocumentoUsuario = datos.data.numeroDocumentoUsuario;
        this.form.fechaNacimientoUsuario = datos.data.fechaNacimientoUsuario;
        this.form.username = datos.data.credencial.username;
        this.form.idTipoDoc_FK = datos.data.idTipoDoc_FK;

        this.botonForm.idUsuario = this.form.idUsuario;

        let estado = datos.data.estadoUsuario;
        if(estado == "Activo"){
          this.botonForm.valor = "Inhabilitar"
        }else{
          this.botonForm.valor = "Activar"
        }


/*         this.form.token = localStorage.getItem("token"); */
        console.log(this.form);

      })
     
  }  
}
</script>
<style scoped>
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
</style>