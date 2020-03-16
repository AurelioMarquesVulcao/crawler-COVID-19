
const cheerio = require("cheerio");
const request = require("request");
const axios = require("axios");
var save = require('./mongodb.js')
const data = require("./datenow")


const notices = "https://www.worldometers.info/coronavirus/#countries";

const localidades = [];


const crawler = () => {
  request(notices, function(error, response, body) {
  var $ = cheerio.load(body);
  $('tbody tr').each(function(element){
      localidade = $(this).find('td').slice(0,1).text().trim();
      caSe = $(this).find('td').slice(1,2).text().trim();
      death = $(this).find('td').slice(3,4).text().trim();
      date = data()
      localidades.push({'localidade':localidade, 'cases':caSe, 'death':death, 'date':date})

     
  });
  console.log(JSON.stringify(localidades[0]) + ' ' + 'Captura realizada com sucesso')

  save(localidades);

})};

// Ativa o Crawler 

crawler()

// repete o processo varias vezes para manter os dados atualizados
setInterval(function() {
  crawler()
}, 900000);

