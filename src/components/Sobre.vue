<template>
  <div id="containerSobre">
  <b-card
    title="Savge"    
    img-src="https://cdn.pixabay.com/photo/2016/04/03/02/28/rio-1303951_960_720.jpg"
    img-alt="Imagem do Rio de Janeiro"
    img-top
    tag="article"
    id="ficha"
    class="mb-2"
  >
    <b-card-text>
      Savge (Sistema de Apoio a Visitantes em Grandes Eventos) foi desenvolvido para facilitar a pesquisa dos turistas por estabelecimentos, pontos turísticos e serviços. 
    </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
    name: 'Sobre'
}
</script>

<style>
#containerSobre{
  margin-top: 50px;
  width: 100%;
}
#ficha{
  max-width: 70%;
  margin: 0 auto;
}
</style>