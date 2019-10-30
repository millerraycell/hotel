<template>
    <div class="admin-pages">
        <PageTitle icon = "fa fa-cogs" main = " Gerência do Sistema" sub="Cadastros"/>

        <div class = "admin-page-tab">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title= "Cadastrar Funcionarios" active>
                        <CadastrarFuncionarios/>
                    </b-tab>
                    <b-tab title= "Listar Funcionarios">
                        <ListarFuncionarios/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle';
import ListarFuncionarios from './ListarFuncionariosAdmin'
import CadastrarFuncionarios from './CadastrarFuncionariosAdmin';

export default {
    name: 'AdminPages',
    components:{PageTitle, ListarFuncionarios, CadastrarFuncionarios}    
}
</script>

<style>

</style>