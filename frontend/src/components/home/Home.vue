<template>
    <div class="home">
        <PageTitle icon="fa fa-bed" main=' Acomodações' sub='Quartos do hotel'/>
        <div class="quartos">
            <b-table hover striped :items="quartos" :fields="fields"></b-table>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle';
import Quartos from './Quartos';
import axios from 'axios';
import {baseApiUrl} from '@/global'

export default {
    name : "Home",
    components: {PageTitle, Quartos},
    data : function(){
        return {
            quartos:[],
            fields:[
                {key : 'numero', label : 'Número do Quarto', sortable: true},
                {key : 'tipo', label : 'Quantidade de pessoas', sortable: true},
                {key : 'preco', label : 'Valor', sortable: true},
                {key : 'locado', label : 'Disponível', sortable: true, 
                formatter: value => value ? 'Não' : 'Sim'},
            ]
        }
    },
    methods:{
        getQuartos(){
            axios.get(`${baseApiUrl}/quartos`).then(res => this.quartos = res.data)
        }
    },
    mounted(){
        this.getQuartos()
    }
}
</script>

<style>
    .quartos{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>