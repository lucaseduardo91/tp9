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
        ></b-form-input>
        <b-input-group-append>
          <b-button id="btn-pesquisar">
            <b-icon icon="check2" />
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesquisaLocal",
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