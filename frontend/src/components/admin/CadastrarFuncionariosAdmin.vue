<template>
    <div class = "cadastrarFuncionario">
        <b-form>
            <input id="funcionario-id" type="hidden" v-model="funcionario.id" />
            <b-row>
                <b-col md ='6' sm='12'>
                    <b-form-group label="Nome" label-for="funcionario-name">
                        <b-form-input id="funcionario-name" type='text'
                        v-model= "funcionario.name" required
                        placeholder="Informe o Nome do Funcionário..."/>
                    </b-form-group>
                </b-col>
                <b-col md ='6' sm='12'>
                    <b-form-group label="E-mail" label-for="funcionario-email">
                        <b-form-input id="funcionario-email" type='text'
                        v-model= "funcionario.email" required
                        placeholder="Informe o E-mail do Funcionário..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md ='6' sm='12'>
                    <b-form-group label="CPF" label-for="funcionario-cpf">
                        <b-form-input id="funcionario-cpf" type='text'
                        class="form-control" placeholder="123.456.789-10"
                        v-model= "funcionario.cpf" required/>
                    </b-form-group>
                </b-col>
                <b-col md ='6' sm='12'>
                    <b-form-group label="RG" label-for="funcionario-rg">
                        <b-form-input id="funcionario-rg" type='text'
                        v-model= "funcionario.rg" required
                        placeholder="Informe RG do Usuário..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md ='6' sm='12'>
                    <b-form-group label="telefone" label-for="funcionario-telefone">
                        <b-form-input id="funcionario-telefone" type='text'
                        class="form-control" placeholder="(DDD) 91324-5678"
                        v-model= "funcionario.telefone" required/>
                    </b-form-group>
                </b-col>
                <b-col md ='6' sm='12'>
                    <b-form-group label="Dia de Nascimento" label-for="funcionario-dataAniversario">
                        <b-form-input id="funcionario-dataAniversario" type='date'
                        v-model= "funcionario.dataAniversario" required
                        placeholder="Informe a Data de Nascimento"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-checkbox id="funcionario-gerente" v-model ="funcionario.gerente" class="mt-3 mb-3">
            Gerente?
            </b-form-checkbox>
            <b-row>
                <b-col md ='6' sm='12'>
                    <b-form-group label="Senha" label-for="funcionario-password">
                        <b-form-input id="funcionario-password" type='password'
                        v-model= "funcionario.password" required
                        placeholder="Informe a Senha..."/>
                    </b-form-group>
                </b-col>
                <b-col md ='6' sm='12'>
                    <b-form-group label="Confirmar Senha" label-for="funcionario-confirmPassword">
                        <b-form-input id="funcionario-confirmPassword" type='password'
                        v-model= "funcionario.confirmPassword" required
                        placeholder="Confirme a Senha..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'deletar'" @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover striped :items="funcionarios" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadFuncionario(data.item)" class="mr-2">
                    <i class='fa fa-pencil'></i>
                </b-button>
                <b-button variant="danger" @click="loadFuncionario(data.item,'deletar')">
                    <i class='fa fa-trash'></i>

                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import axios from 'axios';
import {baseApiUrl, showError} from '@/global';

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
            const url = `${baseApiUrl}/funcionarios`;
            axios.get(url).then(res => {
                this.funcionarios = res.data
            })
        },
        reset(){
            this.mode='save';
            this.funcionario = {};
            this.loadFuncionarios()
        },
        save(){
            const method = this.funcionario.id ? 'put' : 'post';
            const id = this.funcionario.id ? `/${this.funcionario.id}` : '';

            axios[method](`${baseApiUrl}/funcionarios${id}`, this.funcionario)
                .then(()=>{
                    this.$toasted.global.defaultSucess();
                    this.reset()})
                .catch(showError)
        },
        deletar(){
            const id = this.funcionario.id;
            axios.delete(`${baseApiUrl}/funcionarios/${id}`)
                .then(() => {
                    this.toasted.global.defaultSucess()
                    this.reset()
                })
                .catch(showError);
        },
        loadFuncionario(funcionario, mode='save'){
            this.mode = mode;
            this.funcionario = {...funcionario};
        }
    },
    mounted(){
        this.loadFuncionarios();
    }
}
</script>

<style>
</style>