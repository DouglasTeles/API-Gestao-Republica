const Morador = require('../../models/morador')
 const MoradorController = {

    async criarMorador(req, res){

        const bodyData = req.body

        try {

            const novoMorador = await Morador.create(bodyData)
            return res.status(200).json(novoMorador)

        } catch (error) {
            return res.status(400).json(error)
        }

    },

    async listarMorador(req, res){

        
        try {

            const moradores = await Morador.find()
            return res.status(200).json(moradores)

        } catch (error) {
            return res.status(400).json(error)
        }

    },

    async atualizarMorador(req, res){

        const {idMorador} = req.params
        const bodyData = req.body
        

        try {
            
            const atualizarMorador = await Morador.findByIdAndUpdate(idMorador, bodyData, {new:true})
            return res.status(200).json(atualizarMorador)
            
        } catch (error) {
            
            return res.status(400).json(error)
        }

    },
    async deletarMorador(req, res){

        const {idMorador} = req.params
            

        try {
            
            const deletarMorador = await Morador.findByIdAndDelete(idMorador)
            return res.status(200).json(deletarMorador)
            
        } catch (error) {
            
            return res.status(400).json(error)
        }

    }




}
module.exports = MoradorController
