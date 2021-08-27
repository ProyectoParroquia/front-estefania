<template>
    <div>
        <Header/>

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo TipoUsu</button>
                <br><br>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tipo Usu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tipoUsu in ListaTipoUsu" :key="tipoUsu.idTipoUsuario" v-on:click="editar(tipoUsu.idTipoUsuario)">
                        <th scope="row">{{ tipoUsu.idTipoUsuario}}</th>
                        <td>{{ tipoUsu.nombreTipoUsuario }}</td>
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
    name:"ListTU",
    data(){
        return {
            ListaTipoUsu:null,
            pagina:1
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
            editar(id){
                this.$router.push('/editarTU/' + id);
                console.log(id)
            },
            nuevo(){
                this.$router.push('/nuevoTU');
            }
    },
    mounted:function(){
        let direccion = "http://localhost:3000/api/tipoUsuario";
                axios.get(direccion).then( data =>{
                this.ListaTipoUsu = data.data;
                console.log(this.ListaTipoUsu)
                  }); 
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>