const cheerio = require('cheerio')
const axios = require('request')


const request = require('request');
request('https://www.worldometers.info/coronavirus/#countries', function (error, response, body) {
    if (error) throw new Error(error);
    
    var $ = cheerio.load(body);

    var nome = $("tbody tr td").text();
    $('tbody tr').each(function(){
        var country = $(this).find('td').text()
    });
    

    console.log(nome);

});

