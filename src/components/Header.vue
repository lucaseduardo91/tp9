<template>
  <div>
    <div id="banner">
      <img src="../images/logoEstrelaSemBkg.png" alt="Logo" />
    </div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item><router-link tag="nav" to="/">Home</router-link></b-nav-item>
          <b-nav-item-dropdown text="Pontos de Interesse">
            <b-dropdown-item><router-link tag="nav" to="/hospital">Hospitais</router-link></b-dropdown-item>
            <b-dropdown-item><router-link tag="nav" to="/delegacia">Delegacias</router-link></b-dropdown-item>
            <b-dropdown-item><router-link tag="nav" to="/ponto-turistico">Pontos Turísticos</router-link></b-dropdown-item>
            <b-dropdown-item><router-link tag="nav" to="/praia">Praias</router-link></b-dropdown-item>
            <b-dropdown-item><router-link tag="nav" to="/onde-comer">Onde Comer</router-link></b-dropdown-item>
            <b-dropdown-item><router-link tag="nav" to="/onde-dormir">Onde Dormir</router-link></b-dropdown-item>
            <b-dropdown-item><router-link tag="nav" to="/evento">Eventos</router-link></b-dropdown-item>
            <b-dropdown-item><router-link tag="nav" to="/banheiro">Banheiros</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item><router-link tag="nav" to="/sobre">Sobre</router-link></b-nav-item>
          <b-nav-item><router-link tag="nav" to="/contato">Contato</router-link></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
#banner {
  background-image: linear-gradient(
    to bottom,
    #b51d1d,
    #c6391e,
    #d6511f,
    #e66821,
    #f47e23
  );
  width: 100%;
  height: 250px;
  text-align: center;
}
#banner img {
  max-width: 12rem;
  max-height: 12rem;
  margin-top: 1.5rem;
}
</style>