<template>
    <div>
        <Header/>
            <div class="container izquierda">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo usuario</button>
                <button class="btn btn-info" v-on:click="consultarInactivos()" >Usuarios Inactivos</button>
                <button class="btn btn-info" v-on:click="consultarActivos()" >Usuarios Activos</button>
                </div>
                
                <br><br>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">TipoDoc</th>
                        <th scope="col">NumeroDoc</th>
                        <th scope="col">Fecha Nacimiento</th>
                        <th scope="col">Tipo Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in ListaUsuarios" :key="usuario.idUsuario" v-on:click="editar(usuario.idUsuario)">
                        <th scope="row">{{ usuario.idUsuario}}</th>
                        <td>{{ usuario.nombreUsuario }}</td>
                        <td>{{ usuario.apellidoUsuario }}</td>
                        <td>{{ usuario.correoUsuario }}</td>
                        <td>{{ usuario.tipoDoc.denominacionTipoDocumento }}</td>
                        <td>{{ usuario.numeroDocumentoUsuario }}</td>
                        <td>{{ usuario.fechaNacimientoUsuario }}</td>
                        <td>{{ usuario.tipoUsuario.nombreTipoUsuario }}</td>
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
    name:"Dashboard",
    data(){
        return {
            ListaUsuarios:null,
            pagina:1
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
            consultarInactivos(){
                 let direccion = "http://localhost:3000/api/usuarios/inactivos";
                axios.get(direccion).then( data =>{
                    this.ListaUsuarios = data.data;
                    console.log(this.ListaUsuarios)
                }); 
            },
            consultarActivos(){
                let direccion = "http://localhost:3000/api/usuarios";
                axios.get(direccion,{
                    headers: {
                         Authorization: '"credencial-token" '+"hola"
                        
                        
                    }})
                    .then( data =>{
                        console.log(data)
                this.ListaUsuarios = data.data;
                console.log(this.ListaUsuarios)
                  }); 
            },

            editar(id){
                this.$router.push('/editar/' + id);
                console.log(id)
            },
            nuevo(){
                this.$router.push('/nuevo');
            }
    },
    mounted:function(){
        let direccion = "http://localhost:3000/api/usuarios";
                axios.get(direccion).then( data =>{
                this.ListaUsuarios = data.data;
                console.log(this.ListaUsuarios)
                  }); 
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>