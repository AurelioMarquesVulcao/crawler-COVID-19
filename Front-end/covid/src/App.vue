<template>
  <div id="app">
  

  


     

      <table>

        <thead>

          <tr>
            <th>Localidade</th>
            <th>Casos</th>
            <th>Mortes</th>
            <th>Atualização (Data/Hora)</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="local of locais" :key="local.id">

            <td>{{ local.country }}</td>
            <td>{{ local.cases }}</td>
            <td>{{ local.death }}</td>
            <td>{{ local.date }}</td>

          </tr>

        </tbody>
      
      </table>

    

  </div>
</template>


<script>

import Locais from './sevices/locais'

export default {
  data(){
    return{
      locais: []
    }
  },

  mounted(){
    Locais.listar().then(resposta =>{
      console.log(resposta.data)
      this.locais = resposta.data
    })
  }
}

</script>

<style>

</style>
