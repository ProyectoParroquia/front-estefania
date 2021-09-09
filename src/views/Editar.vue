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
                             <div class="col-sm-7">
                                <SelectTipoDoc />
                            </div>
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

                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-primary" v-on:click="open1()" >Editar tipo Usuario</button>
                      <button type="button" class="btn btn-danger " v-on:click="open()" >{{botonForm.valor}}</button>
                      <button type="button" class="btn btn-dark " v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>
                
                  <transition name="fade">
                  <div class="popup-modal" v-if="isVisibleTUsu">
                     <div class="window">
                      <form action="" method="post">
                       <label for="" class="control-label col-sm-3">Tipo Usuario</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="TipoUsu" id="TipoUsu" v-model="form.idTipoUsuario_FK">
                            </div>
                           <div class="btn-group" role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-primary" v-on:click="editarTU()" >Editar tipo Usuario</button>
            
                           </div>
                      </form>
                      <button v-on:click="close1()">Cancelar</button>
                    </div>
                 </div>
                 </transition>


                 <transition name="fade">
                  <div class="popup-modal" v-if="isVisible">
                     <div class="window">
                      <h4>Esta Seguro De Realizar Esta Accion?</h4>

                      <button class="btn btn-warning" v-on:click="functionBtn(botonForm.valor, botonForm.idUsuario)">{{botonForm.valor}}</button>
                      
                      <button v-on:click="close()">Cancelar</button>
                    </div>
                 </div>
                 </transition>
            </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
import SelectTipoDoc from '@/components/SelectTipoDoc.vue'
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:"Editar",
  components:{
    Header,
    SelectTipoDoc
    //Footer
  },
  data:function(){
    return {
      isVisible: false,
      isVisibleTUsu:false,
      tokenLogin: localStorage.getItem('token'),
        form:{
                "idUsuario":"",
                "nombreUsuario": "",
                "apellidoUsuario": "",
                "correoUsuario": "",
                "numeroDocumentoUsuario": "",
                "fechaNacimientoUsuario": "",
    
                "username": "",
                
            
                "idTipoDoc_FK":"",

                "estadoUsuario":"",

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
          axios.put("http://localhost:3000/api/usuarios/actualizar/"+this.form.idUsuario, this.form,{ headers: { token:this.tokenLogin } })
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
       editarTU(){
        /* this.form.idTipoDoc_FK = document.getElementById("idTipoDoc_FK").value */
          axios.put("http://localhost:3000/api/usuarios/tipoUsu/"+this.form.idUsuario, this.form, { headers: { token:this.tokenLogin } })
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
        console.log(this.tokenLogin)
            axios.put("http://localhost:3000/api/usuarios/"+accion+"/"+idUsuario, this.form,{headers: { token:this.tokenLogin } })
              .then( () =>{
                   this.makeToast("Actualizado","Se a hecho un cambio en el estado","success");
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
        },
        open() {
            this.isVisible = true
        },

        close() {
            this.isVisible = false
        },
        open1() {
            this.isVisibleTUsu = true
        },
        close1(){
            this.isVisibleTUsu = false
        }

  },
  
  mounted:function(){
      this.form.idUsuario = this.$route.params.id;
      axios.get("http://localhost:3000/api/usuarios/id/"+ this.form.idUsuario, { headers: { token:this.tokenLogin } })
      .then( datos => {
        
        console.log(datos)
        this.form.nombreUsuario = datos.data.nombreUsuario;
        this.form.apellidoUsuario = datos.data.apellidoUsuario;
        this.form.correoUsuario = datos.data.correoUsuario;
        this.form.numeroDocumentoUsuario = datos.data.numeroDocumentoUsuario;
        this.form.fechaNacimientoUsuario = datos.data.fechaNacimientoUsuario;
        this.form.username = datos.data.credencial.username;
        this.form.idTipoDoc_FK = datos.data.idTipoDoc_FK;
        this.form.idTipoDoc_FK = datos.data.idTipoUsuario_FK;

        this.botonForm.idUsuario = this.form.idUsuario;

        this.form.credencial_token = localStorage.getItem("token");
        
        let estado = datos.data.estadoUsuario;
        if(estado == "Activo"){
          this.botonForm.valor = "Inhabilitar"
        }else{
          this.botonForm.valor = "Activar"
        }
        console.log(this.form);

      })
     
  }  
}

/* export default {
    name: 'PopupModal',

    data: () => ({
        isVisible: false,
    }),

    methods: {
        open() {
            this.isVisible = true
        },

        close() {
            this.isVisible = false
        },
    },
} */

</script>



<style scoped>
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }

/* css class for the transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.popup-modal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    z-index: 1;
}

.window {
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
}

</style>