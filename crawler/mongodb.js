const mongoose = require('mongoose');

const URL = 
    "mongodb+srv://admin:1234@cluster0-9jhwf.mongodb.net/covid19?retryWrites=true&w=majority";

const localidadesSchema = new mongoose.Schema({
    country: {
        type : String
    },
    cases: {
        type : String
    },  
    death: {
        type : String
    },
    date: {
        type : String
    },
});
