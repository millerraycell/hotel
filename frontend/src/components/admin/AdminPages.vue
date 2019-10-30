<template>
    <div class="admin-pages">
        <PageTitle icon = "fa fa-cogs" main = " Gerência do Sistema" sub="Cadastros"/>

        <div class = "admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title= "Cadastrar Funcionários" active>
                        <CadastrarFuncionarios/>
                    </b-tab>
                    <b-tab title= "Cadastrar Clientes">
                        <CadastrarClientes/>
                    </b-tab>
                     <b-tab title= "Checkin Quarto">
                        <CheckinQuarto/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle';
import CheckinQuarto from './ChekinQuartoAdmin'
import CadastrarClientes from './CadastrarClientesAdmin'
import CadastrarFuncionarios from './CadastrarFuncionariosAdmin';

export default {
    name: 'AdminPages',
    components:{PageTitle, CadastrarClientes, CadastrarFuncionarios, CheckinQuarto}    
}
</script>

<style>

</style>