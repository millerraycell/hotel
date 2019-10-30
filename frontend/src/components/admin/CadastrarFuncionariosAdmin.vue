<template>
    <div class = "cadastrarFuncionario">
        <b-table hover striped :items="funcionarios" :fields="fields"></b-table>
    </div>
</template>

<script>
import axios from 'axios';
import {baseApiUrl} from '@/global';

export default {
    name:'CadastrarFuncionario',
    data: function(){
        return{
            mode: 'save',
            funcionario: {},
            funcionarios: [],
            fields:[
                {key : 'id', label : 'Código', sortable: true},
                {key : 'name', label : 'Nome', sortable: true},
                {key : 'email', label : 'E-mail', sortable: true},
                {key : 'gerente', label : 'Gerente', sortable: true, 
                formatter: value => value ? 'Sim' : 'Não'},
                {key :'actions', label: 'Ações'}
            ]
        }
    },
    methods:{
        loadFuncionarios(){
            const url = 'http://localhost:3000/funcionarios';
            axios.get(url).then(res => {
                this.funcionarios = res.data
            })
        }
    },
    mounted(){
        this.loadFuncionarios();
    }
}
</script>

<style>
</style>