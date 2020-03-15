const mongoose = require('mongoose');

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
});

module.exports = User = mongoose.model('user', user);
