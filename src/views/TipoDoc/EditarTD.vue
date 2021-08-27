<template>
     <div>
          <Header />
            <div class="container">
              
                <form action="" class="form-horizontal">

                    <input type="hidden" name="idTiDoc" id="idTiDoc" v-model="form.idTipoDocumento">


                    <div class="form-group left row ">
                        <div class="col">
                              <label for="" class="control-label col-sm-2">Tipo Documento</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="nomTiDoc" id="nomTiDoc" v-model="form.denominacionTipoDocumento">
                            </div>
                        </div>
                        
                    </div>

                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-primary" v-on:click="borrar()" >Borrar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>
            </div>
          <!-- <Footer />   -->
        </div>
</template>
<script>
import Header from '@/components/Header.vue';
/* import Footer from '@/components/Footer.vue'; */
import axios from 'axios';

export default{
  name:"EditarTD",
  components:{
      Header
      /* Footer */
  },
  data:function(){
        return{
            form:{
                "idTipoDocumento":"",
                "denominacionTipoDocumento":""
            }
        }       

  },
  methods:{
      salir(){
        this.$router.push("/TipoDoc");
      },
      borrar(){
            axios.delete("http://localhost:3000/api/tipoDoc/"+this.form.idTipoDocumento, this.form)
            .then(data=>{
                if(data.status===201){  
              console.log(data)
              this.makeToast("Eliminado",data.data.success,"info");
                   setTimeout(this.salir,1800);
            }else{
              this.makeToast("Error",data.data.mensage,"danger");
            }
            })
        },
      editar(){
        /* this.form.idTipoDoc_FK = document.getElementById("idTipoDoc_FK").value */
          axios.put("http://localhost:3000/api/tipoDoc/actualizar/"+this.form.idTipoDocumento, this.form)
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
      this.form.idTipoDocumento = this.$route.params.id;
      axios.get("http://localhost:3000/api/tipoDoc/id/"+ this.form.idTipoDocumento)
      .then( datos => {
        console.log(datos)
        this.form.denominacionTipoDocumento = datos.data.denominacionTipoDocumento;


/*         this.form.token = localStorage.getItem("token"); */
        console.log(this.form);

      })
     
  } 

}
</script>

<style>

</style>
