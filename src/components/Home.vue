<template>
  <div id="conteudoHome">
    <div id="boasVindas">
      <p id="mensagem">
        Bem-vindo ao Savge, um sistema feito para auxiliar visitantes em grandes
        eventos
      </p>
    </div>

    <b-container>
      <h5 class="tituloSecao">Sugestões de restaurantes</h5>

        <b-row class="cards">
      <b-card
        :key="restaurante.id"
        v-for="restaurante in restaurantes"
        :title="restaurante.nome"
        :img-src="require('../images/'+restaurante.imagem)"
        :img-alt="restaurante.descricao"
        :id="restaurante.id"
        img-top
        tag="article"
        style="max-width: 18rem"
        class="mb-3 text-center"
      >
        <b-card-text> Bairro: {{ restaurante.bairro }} </b-card-text>
        
        <b-card-text>
            <b-form-rating readonly v-model="restaurante.classificacao" inline no-border size="sm" variant="danger" precision="1"></b-form-rating>
        </b-card-text>
      </b-card>
      </b-row>
    </b-container>

    <b-container>
      <h5 class="tituloSecao">Sugestões de hotéis</h5>

        <b-row class="cards">
      <b-card
        :key="hotel.id"
        v-for="hotel in hoteis"
        :title="hotel.nome"
        :img-src="require('../images/'+hotel.imagem)"
        :img-alt="hotel.descricao"
        :id="hotel.id"
        img-top
        tag="article"
        style="max-width: 18rem"
        class="mb-3 text-center"
      >
        <b-card-text> Bairro: {{ hotel.bairro }} </b-card-text>
        
        <b-card-text>
            <b-form-rating readonly v-model="hotel.classificacao" inline no-border size="sm" variant="danger" precision="1"></b-form-rating>
        </b-card-text>
      </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      restaurantes: [],
      hoteis: [],
    };
  },
  async created() {
    try {
      const ondeComer = await axios.get(`http://localhost:3000/onde-comer`);
      const ondeDormir = await axios.get(`http://localhost:3000/onde-dormir`);

      this.restaurantes = ondeComer.data;
      this.hoteis = ondeDormir.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
#conteudoHome {
    color: dimgray;
}
#boasVindas {
  margin-top: 50px;
  text-align: center;
}
#boasVindas p {
  font-size: 1.5em;
  font-style: italic;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card:hover {
  transform: scale(1.05);
}
.tituloSecao {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
}
</style>