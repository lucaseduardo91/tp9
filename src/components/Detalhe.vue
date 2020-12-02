<template>
  <b-container v-if="mostrar">
    <h4 id="tituloDetalhe">{{ elemento.nome }}</h4>
    <b-row class="espacoTitulo">
      <b-img class="imagemCentro"
        :src="require('../images/'+elemento.imagem)"
        fluid
        :alt='elemento.descricao'
        :title='elemento.descricao'
      ></b-img>      
    </b-row>
    <b-row class="espaco">
      <b-container class="distribuicao descricao">
        <p>{{ elemento.sobre }}</p>
        <p>Endereço: {{ elemento.endereco}}</p>
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
    constroiTituloMapa: function(){
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
.imagemCentro{
  margin: 0 auto;
}
.distribuicao{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;  
  margin-bottom: 4rem;
}
.espaco{
  margin-top: 4rem;
}
.espacoTitulo{
  margin-top: 2rem;
}
.mapa{
  width: 50%;
}
.descricao{  
  width: 50%;
  color: dimgray;
  font-family: 'Sansita Swashed', cursive;
  font-size: 1.2rem;
  text-align: justify;
}

@media screen and (max-width: 700px) {
  .distribuicao {
    display: initial;
  }
  .mapa{
    width: 96%;
  }
  .descricao{  
    width: 96%;
    color: dimgray;
    font-family: 'Sansita Swashed', cursive;
    font-size: 1rem;
    text-align: justify;
  }
}
</style>