<template>
    <div>
        <Header />
            <div class="container">
                

                <form action="" class="form-horizontal">
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
                                <SelectTipoDoc  />
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
                        <div class="col">
                               <label for="" class="control-label col-sm-2">Contraseña</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="password" id="password" v-model="form.password">
                                </div>
                        </div>
                    </div>

                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button>
                        <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div>
                    
                </form>


            </div>
        <!-- <Footer /> -->

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import SelectTipoDoc from '@/components/SelectTipoDoc.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"Nuevo",
    data:function(){
        return {
            form:{
                "nombreUsuario": "",
                "apellidoUsuario": "",
                "correoUsuario": "",
                "numeroDocumentoUsuario": "",
                "fechaNacimientoUsuario": "",
    
                "username": "",
                "password":"",
            
                "idTipoDoc_FK":""
/*                 "token" : ""  */
            }
        }
    },
    components:{
        Header,
        SelectTipoDoc
        //Footer
    },

    methods:{
        guardar(){/* 
            this.form.token = localStorage.getItem("token"); */

            this.form.idTipoDoc_FK = document.getElementById("idTipoDoc_FK").value

            axios.post("http://localhost:3000/api/usuarios",this.form)
            .then(data =>{
                console.log(data);
                if(data.status === 201){
                this.makeToast("Hecho",data.data.success,"success");
                setTimeout(this.salir,1800);
                }else{
                    data.data.err.errors.forEach(element => {
                        this.makeToast("Error",element.message,"danger");
                    });
                    

                    console.log(data.data.err);
                    this.makeToast("Error",data.data.mensage,"danger");
                }
                
            })
        },
        salir(){
            this.$router.push("/dashboard");
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
        cambiarTipoDoc(tipo){
            this.form.idTipoDoc_FK = tipo
        }
        
    }
}
</script>
<style scoped>
.left{
    text-align:  left;
}
</style>