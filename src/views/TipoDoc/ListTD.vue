<template>
    <div>
        <Header/>

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo TipoDoc</button>
                <br><br>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tipo Documento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tipoDoc in ListaTipoDoc" :key="tipoDoc.idTipoDocumento" v-on:click="editar(tipoDoc.idTipoDocumento)">
                        <th scope="row">{{ tipoDoc.idTipoDocumento}}</th>
                        <td>{{ tipoDoc.denominacionTipoDocumento }}</td>
                    </tr>
            
                </tbody>
                </table>

            </div>

        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"ListTD",
    data(){
        return {
            ListaTipoDoc:null,
            pagina:1
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
            editar(id){
                this.$router.push('/editarTD/' + id);
                console.log(id)
            },
            nuevo(){
                this.$router.push('/nuevoTD');
            }
    },
    mounted:function(){
        let direccion = "http://localhost:3000/api/tipoDoc";
                axios.get(direccion).then( data =>{
                this.ListaTipoDoc = data.data;
                console.log(this.ListaTipoDoc)
                  }); 
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>