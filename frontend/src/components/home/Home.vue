<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main='Dashboard' sub='Opções hotel'/>
        <div class="quartos">
            <Quartos title = "Quartos" icon = "fa fa-bed" color='#d54d50' />
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
            quarto:{}
        }
    },
    methods:{
        getQuartos(){
            axios.get(`${baseApiUrl}/quartos`).then(res => this.quarto = res.data)
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