const mongoose = require('mongoose');

// codigo aproveitado, devo mudar as variaveis antes de ir para produção
const user = new mongoose.Schema({
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

// aqui 'localidades' é o nome onde vou colocar meus dados ficando ... covid19/localidades
module.exports = User = mongoose.model('localidades', user);
