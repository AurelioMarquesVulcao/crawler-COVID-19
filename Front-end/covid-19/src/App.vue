<template>
  <div id="app">

    <div class="container">

      <ul>
        <li v-for="(erro, index) of errors" :key="index">
          campo <b>{{erro.field}}</b> - {{erro.defaultMessage}}
        </li>
      </ul>


      

      <!-- <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos" :key="produto.id">

            <td>{{  }}</td>
            <td>{{  }}</td>
            <td>{{  }}</td>
            

          </tr>

        </tbody>
      
      </table> -->

    </div>

  </div>
</template>

<script>

</script>

<style>
</style>
