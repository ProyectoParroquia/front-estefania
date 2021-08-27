<template>
    <div>
        <Header />
            <div class="container">
                <form action="" class="form-horizontal">
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Tipo Usuario</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="TipoUsu" id="TipoUsu" v-model="form.nombreTipoUsuario">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
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

//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"NuevoTU",
    data:function(){
        return {
            form:{
                "nombreTipoUsuario": "",
                
/*                 "token" : ""  */
            }
        }
    },
    components:{
        Header
        //Footer
    },

    methods:{
        
        guardar(){/* 
            this.form.token = localStorage.getItem("token"); */

            axios.post("http://localhost:3000/api/tipoUsuario",this.form)
            .then(data =>{
                console.log(data);
                if(data.status === 201){
                this.makeToast("Hecho",data.data.success,"success");
                setTimeout(this.salir,1800);
                }else{
                    /* data.data.err.errors.forEach(element => {
                        this.makeToast("Error",element.message,"danger");
                    }); */

                    console.log(data.data.mensage);
                    this.makeToast("Error",data.data.mensage,"danger");
                }
                
            })
        },
        salir(){
            this.$router.push("/TipoUsu");
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
        
        
    }
}
</script>
<style scoped>
.left{
    text-align:  left;
}
</style>