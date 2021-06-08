const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    nomeConta: {
        type:'String',
        required: true
    },
    descricaoConta: {
        type:'String',
        required: true
    },
    data:{
        type: 'Date',
        required: true
    },
    valor: {
        type:'Number',
    },
    idMorador: {
         type: mongoose.Schema.Types.ObjectId,
         ref:'Morador',
         required: true
    }

})
module.exports = mongoose.model('Conta', Schema)