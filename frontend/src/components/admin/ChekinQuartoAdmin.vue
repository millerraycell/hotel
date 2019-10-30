<template>
    <div class = "chekinQuartoAdmins">
        <b-form>
            <input id="locacao-clienteId" type="hidden" v-model="locacao.clienteId" />
            <b-row>
                <b-col md ='6' sm='12'>
                    <b-form-group label="CPF" label-for="cliente-cpf">
                        <b-form-input id="cliente-cpf" type='text'
                        class="form-control" placeholder="123.456.789-10"
                        v-model= "cliente.cpf" required/>
                    </b-form-group>
                </b-col>
                <b-col md ='6' sm='12'>
                    <b-form-group label="Tipo do Quarto" label-for="quarto-tipo">
                        <b-form-input id="quarto-tipo" type='text'
                        v-model= "quarto.tipo" required
                        placeholder="Informe o tipo do Quarto..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
               <b-col md ='6' sm='12'>
                    <b-form-group label="Data Entrada" label-for="locacao-dataEntrada">
                        <b-form-input id="locacao-dataEntrada" type='date'
                        v-model= "locacao.dataEntrada" required
                        placeholder="Informe a Data de Entrada"/>
                    </b-form-group>
                </b-col>
                <b-col md ='6' sm='12'>
                    <b-form-group label="Data Saida" label-for="locacao-dataSaida">
                        <b-form-input id="locacao-dataSaida" type='date'
                        v-model= "locacao.dataSaida" required
                        placeholder="Informe a Data de Saida"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button variant="primary" v-if="mode === 'alocar'" @click="alocar">Salvar</b-button>
            <hr>
        </b-form>
        <b-table hover striped :items="locacoes"></b-table>
    </div>
</template>

<script>
import axios from 'axios';
import {baseApiUrl, showError} from '@/global';
export default {
    name: 'ChekinQuartoAdmins',
    data: function(){
        return{
            mode : "alocar",
            cliente: {},
            clientes :[],

            quarto:{},
            quartos:[],

            locacao : {},
            locacoes: [],
        }
    },
    methods:{
        loadLocacoes() {
        const url = `${baseApiUrl}/locacao`;
        axios.get(url).then(res => {
            this.locacao = res.data;
            });
        },
        alocar(){
            axios['post'](`${baseApiUrl}/locacao`,{clienteId : this.clientes['id'],
            quartoId : this.quartos['numero'], dataEntrada: this.locacoes['dataEntrada'],
            dataSaida: this.locacoes['dataSaida']})
                   .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
            })
            .catch(showError);
        },
        getQuarto(){
            const url = `${baseApiUrl}/quartos`;
            axios.get(url).then(res => {
                this.quarto = res.data
            })
        },
        getCliente(){
            const url = `${baseApiUrl}/clientes`;
            axios.get(url).then(res => {
                this.cliente = res.data
            })
        },
        reset() {
            this.mode = 'alocar'
            this.category = {}
            this.loadLocacoes()
        }
    },
    mounted() {
        this.loadLocacoes();
        this.getQuarto();
        this.getCliente()
    }
};
</script>

<style>
</style>