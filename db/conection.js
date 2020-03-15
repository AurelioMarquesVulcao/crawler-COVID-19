const mongoose = require('mongoose');


// na parte da variavel abaixo -- mongodb.net/covid19 -- é onde defino minha collections a ser usada
const URL = 
    "mongodb+srv://admin:1234@cluster0-9jhwf.mongodb.net/covid19?retryWrites=true&w=majority";

const conectDB = async() => {
    await mongoose.connect(URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
    console.log('Conectado ao banco de dados.');
}

module.exports = conectDB;
