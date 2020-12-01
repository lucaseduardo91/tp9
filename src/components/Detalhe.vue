<template>
  <b-container v-if="mostrar">
    <h4 id="tituloDetalhe">{{ elemento.nome }}</h4>
    <b-row class="espaco">
      <b-img
        :src="require('../images/'+elemento.imagem)"
        fluid
        :alt='elemento.descricao'
        :title='elemento.descricao'
      ></b-img>      
    </b-row>
    <b-row class="espaco">
      <b-container class="distribuicao descricao">
        <p>{{ elemento.sobre }}</p>
      </b-container>
      <b-container class="distribuicao mapa">
        <b-embed
          type="iframe"
          :src='elemento.mapa'
          :title='constroiTituloMapa'
        ></b-embed>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Detalhe",
  data() {
    return {
      elemento: null,
      mostrar: false
    };
  },
  async created() {
    try {
      let partesRota = this.$route.name.split("-");
      let rota = '';
      
      if(partesRota.length == 3)
      {
        rota = partesRota[0] + "-" + partesRota[1] + `/` + this.$route.params.id;
      }
      else
      {
        rota = partesRota[0] + `/` + this.$route.params.id;
      }
      const busca = await axios.get(`http://localhost:3000/` + rota);

      this.elemento = busca.data;
      this.mostrar = true;
    } catch (e) {
      console.error(e);
    }
  },
  computed:{
    buscarElemento(){
      return this.elemento;
    },
    constroiTituloMapa(){
      return "Localização " + this.elemento.descricao;
    }
  }
};
</script>

<style>
#tituloDetalhe {
  margin-top: 3rem;
  color: dimgray;
}
.distribuicao{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;  
  margin-bottom: 4rem;
}
.espaco{
  margin-top: 3rem;
}
.mapa{
  width: 350px;
  height: 350px;
}
.descricao{
  width: 350px;
}
</style>