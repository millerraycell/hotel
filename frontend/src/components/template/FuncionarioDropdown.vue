<template>
    <div class = "funcionario-dropdown">
        <div class="funcionario-button">
            <span class="d-none d-sm-block">{{funcionario.name}}</span>
            <div class ="funcionario-dropdown-img">
                <Gravatar :email="funcionario.email" alt="Funcionario"/>
            </div>
            <i class = "fa fa-angle-down"></i>
        </div>
        <div class="funcionario-dropdown-content">
            <router-link to="/admin">
                <i class="fa fa-cogs"></i>Adminstração
            </router-link>

            <a href><i class="fa fa-sign-out"></i>Sair</a> 
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Gravatar from 'vue-gravatar';


export default {
    nome : 'FuncionarioDropdown',
    components:{Gravatar},
    computed:mapState(['funcionario'])    
}
</script>

<style>
    .funcionario-dropdown{
        position: relative;
        height: 100%,
    }

    .funcionario-button{
        display: flex;
        align-items: center;
        color: #FFF;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
    }

    .funcionario-dropdown:hover{
        background-color: rgba(0, 0, 0, 0.2)
    }

    .funcionario-dropdown-img{
        margin: 0px 10px;
    }

    .funcionario-dropdown-img > img{
        max-height: 37px;
        border-radius: 5px;
    }

    .funcionario-dropdown-content{
        position: absolute;
        right: 0px;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
    }

    .funcionario-dropdown:hover .funcionario-dropdown-content{
        visibility: visible;
        opacity: 1;
    }

    .funcionario-dropdown-content a{
        text-decoration: none;
        color: #000;
        padding: 10px;
    }

    .funcionario-dropdown-content a:hover{
        text-decoration: none;
        color: #000;
        background-color: #ededed;
    }
</style>