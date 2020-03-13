//const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios')
const notices = "https://www.worldometers.info/coronavirus/#countries"
var countr = {}

const LeanResponse = (html) => {
    let $ = cheerio.load(html)
    var covid =  $('tbody tr').map((index, element) => ({
        // pais: {
        //    // nome: $(element).find('td').text().split(' ')[1], // Criar função para tratar esse dado --- pais com nome composto
        //    nome: $(element).find('td').text()
        //  }
        // countr:  $(element).find('td').text().replace(',', ".").split(' ')[2] = String ? $(element).find('td').text().split(' ')[1]+$(element).find('td').text().split(' ')[2] : $(element).find('td').text().split(' ')[1]
        countr:  $(element).find("td").slice(0,1).text() // o uso do slice me da o poder de definir qual item quero pegar e assim posso selecionar pontualmente qual vou sacar das varias td.
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