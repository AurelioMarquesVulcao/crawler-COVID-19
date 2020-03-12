var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('...', function(err, res, body) {
    if (err) console.log('Erro: ', err);

    var $ =cheerio.load(body);
    
    $('...').each(function() {
        var xxx = $(this).find('...').text().trim();
        
        console.log('...', + xxx);

        fs.appendFile('covid19.txt', xxx + '\n');
    });
});