const mongoose = require('mongoose');

const URL = 
    "mongodb+srv://admin:1234@cluster0-9jhwf.mongodb.net/test?retryWrites=true&w=majority";

const conectDB = async() => {
    await mongoose.connect(URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
    console.log('Conectado ao banco de dados.');
}

module.exports = conectDB;
