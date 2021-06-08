const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    nome: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Morador'
    },
    nomeConta: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Conta'
    },
    valor:{
        type: 'number', 
        required: true
    }
  //data
    
})
module.exports = mongoose.model('Debito', Schema)