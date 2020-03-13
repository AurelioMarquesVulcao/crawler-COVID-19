//const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios')
const notices = "https://www.worldometers.info/coronavirus/#countries"
var countr = {}



setInterval(function() {
const LeanResponse = (html) => {
    let $ = cheerio.load(html)
    var covid =  $('tbody tr').map((index, element) => ({
        // pais: {
        //    // nome: $(element).find('td').text().split(' ')[1], // Criar função para tratar esse dado --- pais com nome composto
        //    nome: $(element).find('td').text()
        //  }
        // countr:  $(element).find('td').text().replace(',', ".").split(' ')[2] = String ? $(element).find('td').text().split(' ')[1]+$(element).find('td').text().split(' ')[2] : $(element).find('td').text().split(' ')[1]
        countr:  $(element).find("td").slice(0,1).text(),
        cases:  $(element).find("td").slice(1,2).text(),
        death:  $(element).find("td").slice(3,4).text()
    })).get()
    return covid
}


const SearchNotices = async (LeanResponse) =>{
    try{
        const response = await axios({ url: notices, method: 'get'})
        const objectReurn = await LeanResponse(response.data)
        return Promise.resolve(objectReurn)
    } catch (err) {
        return Promise.reject(err)
    }
}



SearchNotices(LeanResponse)
    .then(resp => console.log('response', resp))
    .catch(err => console.log('erro', err))


function RetornaDataHoraAtual(){
    var dNow = new Date();
    var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    return localdate;
  }

  console.log(RetornaDataHoraAtual())

}, 120000000);

