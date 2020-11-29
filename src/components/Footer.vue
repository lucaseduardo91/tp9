<template>
  <div id="footer">      
      <p>&copy;Savge - Todos os direitos reservados</p>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
#body {   
   padding-bottom: 3rem;
}
#footer{
    width: 100%;
    height: 3rem;
    background-color: rgba(198, 57, 30, 0.95); 
    position: fixed;
    bottom: 0; 
}    
#footer p{    
    color: whitesmoke;
    padding: 5px;
}
</style>