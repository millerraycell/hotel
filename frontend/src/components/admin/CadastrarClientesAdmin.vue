<template>
  <div class="cadastrarClientes">
    <b-form>
      <input id="cliente-id" type="hidden" v-model="cliente.id" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome" label-for="cliente-name">
            <b-form-input
              id="cliente-name"
              type="text"
              v-model="cliente.name"
              required
              placeholder="Informe o Nome do Cliente..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail" label-for="cliente-email">
            <b-form-input
              id="cliente-email"
              type="text"
              v-model="cliente.email"
              required
              placeholder="Informe o E-mail do cliente..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="CPF" label-for="cliente-cpf">
            <b-form-input
              id="cliente-cpf"
              type="text"
              class="form-control"
              placeholder="123.456.789-10"
              v-model="cliente.cpf"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="RG" label-for="cliente-rg">
            <b-form-input
              id="cliente-rg"
              type="text"
              v-model="cliente.rg"
              required
              placeholder="Informe RG do Cliente..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="telefone" label-for="cliente-telefone">
            <b-form-input
              id="cliente-telefone"
              type="text"
              class="form-control"
              placeholder="(DDD) 91324-5678"
              v-model="cliente.telefone"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Dia de Nascimento" label-for="cliente-dataAniversario">
            <b-form-input
              id="cliente-dataAniversario"
              type="date"
              v-model="cliente.dataAniversario"
              required
              placeholder="Informe a Data de Nascimento"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Forma de Pagamento" label-for="cliente-formaDePagamento">
            <b-form-input
              id="cliente-formaDePagamento"
              type="text"
              v-model="cliente.formaDePagamento"
              required
              placeholder="Informe a Forma de Pagamento..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
      <b-button variant="danger" v-if="mode === 'deletar'" @click="remove">Excluir</b-button>
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
      <hr />
    </b-form>
    <b-table hover striped :items="clientes" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "@/global";

export default {
  name: "CadastrarClientes",
  data: function() {
    return {
      mode: "save",
      cliente: {},
      clientes: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "telefone", label: "Celular", sortable: true }
      ]
    };
  },
  methods: {
    loadClientes() {
      const url = `${baseApiUrl}/clientes`;
      axios.get(url).then(res => {
        this.clientes = res.data;
      });
    },
    reset() {
      this.mode = "save";
      this.cliente = {};
      this.loadClientes();
    },
    save() {
      const method = this.cliente.id ? "put" : "post";
      const id = this.cliente.id ? `/${this.user.id}` : "";

      axios[method](`${baseApiUrl}/clientes${id}`, this.cliente)
        .then(() => {
          this.$toasted.global.defaultSucess();
          this.reset();
        })
        .catch(showError);
    },
    deletar() {
      const id = this.clientes.id;
      axios
        .delete(`${baseApiUrl}/clientes/${id}`)
        .then(() => {
          this.toasted.global.defaultSucess();
          this.reset();
        })
        .catch(showError);
    },
    loadCliente(cliente, mode = "save") {
      this.mode = mode;
      this.cliente = { ...cliente };
    }
  },
  mounted() {
    this.loadClientes();
  }
};
</script>

<style>
</style>