<template>
  <div>
    <div id="divTituloPesquisaLocal">
      <p id="infoPesquisaLocal">
        Pesquise as informações da localidade ou serviço desejado
      </p>
    </div>
    <div id="barra-pesquisa">
      <b-input-group size="lg">
        <b-form-input
          type="text"
          placeholder="Insira o nome da localidade ou o bairro..."   
          v-model="inputPesquisa"       
        ></b-form-input>
        <b-input-group-append>
          <b-button id="btn-pesquisar" @click="pesquisar">
            <b-icon icon="check2" />
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>

    <b-container v-if='mostrarSugestoes'>
      <h5 class="tituloSecao">Sugestões</h5>

      <b-row class="cards">
        <b-card
          :key="elemento.id"
          v-for="elemento in elementos"
          :title="elemento.nome"
          :img-src="require('../images/' + elemento.imagem)"
          :img-alt="elemento.descricao"
          :id="elemento.id"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="mb-3 text-center"
          @click="detalharElemento(elemento.id)"
        >
          <b-card-text> Bairro: {{ elemento.bairro }} </b-card-text>

          <b-card-text>
            <b-form-rating
              readonly
              v-model="elemento.classificacao"
              inline
              no-border
              size="sm"
              variant="danger"
              precision="1"
            ></b-form-rating>
          </b-card-text>
        </b-card>
      </b-row>
    </b-container>

    <b-container v-if='mostrarResultado'>
      <h5 class="tituloSecao">Resultado da pesquisa</h5>

      <b-row class="cards">
        <b-card
          :key="resultado.id"
          v-for="resultado in resultadosFiltrados"
          :title="resultado.nome"
          :img-src="require('../images/' + resultado.imagem)"
          :img-alt="resultado.descricao"
          :id="resultado.id"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="mb-3 text-center"
          @click="detalharElemento(resultado.id)"
        >
          <b-card-text> Bairro: {{ resultado.bairro }} </b-card-text>

          <b-card-text>
            <b-form-rating
              readonly
              v-model="resultado.classificacao"
              inline
              no-border
              size="sm"
              variant="danger"
              precision="1"
            ></b-form-rating>
          </b-card-text>
        </b-card>
      </b-row>
    </b-container>

    <b-container v-if='mostrarVazio'>
      <b-alert show variant="danger">Não foram encontrados resultados com os parâmetros informados</b-alert>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PesquisaLocal",
  data() {
    return {
      elementos: [],
      inputPesquisa: '',
      mostrarSugestoes: true,
      mostrarResultado: false,
      mostrarVazio: false,
    };
  },
  async created() {
    try {
      const busca = await axios.get(
        `http://localhost:3000/` + this.$route.name
      );
      this.elementos = busca.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    detalharElemento(idClick) {
      this.$router.push({
        name: this.$route.name + "-detalhe",
        params: { id: idClick },
      });
    },
    pesquisar() {
      let filtrados = this.elementos.filter((elemento) => {
        return (
          elemento.nome
            .toLowerCase()
            .indexOf(this.inputPesquisa.toLowerCase()) > -1 ||
          elemento.bairro
            .toLowerCase()
            .indexOf(this.inputPesquisa.toLowerCase()) > -1
        );
      });

      if (filtrados != null && filtrados.length > 0) {
        this.mostrarSugestoes = false;
        this.mostrarResultado = true;
        this.mostrarVazio = false;
      } else {
        this.mostrarSugestoes = false;
        this.mostrarResultado = false;
        this.mostrarVazio = true;
      }

      return filtrados;
    },
  },
  computed: {
    resultadosFiltrados: function(){
      return this.pesquisar();
    }
  }
};
</script>

<style>
#btn-pesquisar {
  background-color: #c6391e;
  color: whitesmoke;
}
#barra-pesquisa {
  margin-top: 50px;
}
#divTituloPesquisaLocal {
  margin-top: 50px;
  text-align: center;
}
#divTituloPesquisaLocal p {
  color: dimgray;
  font-size: 1.5em;
  font-style: italic;
}
</style>