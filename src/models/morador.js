const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    nomeMorador: {
        type:'String',
        required: true
    },
    email: {
        type:'String',
        required: true
    },
    senha:{
        type:"String",
        required: true
    }

})
module.exports = mongoose.model('Morador', Schema)