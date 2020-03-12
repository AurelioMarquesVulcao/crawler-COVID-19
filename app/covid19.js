//const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios')
const notices = "https://www.worldometers.info/coronavirus/#countries"


const LeanResponse = (html) => {
    let $ = cheerio.load(html)
    return $('tbody tr').map((index, element) => ({
        pais: $(element).find('td').text().split(' ')[1]
    })).get()
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