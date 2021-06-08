const Conta = require('../../models/conta')

const ContaController = {


    async criarConta(req, res) {

        const bodyData = req.body
        try {
            
            const novaConta = await Conta.create(bodyData)
            return res.status(200).json(novaConta)

        } catch (error) {
            return res.status(400).json(error)
        }

    },
    async listarConta(req, res) {

        try {

            const listarContas = await Conta.find()
            return res.status(200).json(listarContas)
        } catch (error) {
            return res.status(400).json(error)
        }

    },async atualizarContaId(req, res) {

        const {conta_id} = req.params
        const bodyData = req.body

        try {

            const atualizarContaId = await Conta.findByIdAndUpdate(conta_id, bodyData, {new:true})
            return res.status(200).json(atualizarContaId)
            
        } catch (error) {
            return res.status(400).json(error)
        }

    },async deletarContaId(req, res) {

        const {conta_id} = req.params
        

        try {
            
            const deletarContaId = await Conta.findByIdAndDelete(conta_id)
            return res.status(200).json(deletarContaId)

        } catch (error) {
            return res.status(400).json(error)
        }

    },async cadastrarContaMorador(req, res) {

        const {idMorador} = req.params
        const bodyData = req.body
        

        try {
            const data = {idMorador:idMorador,...bodyData}

            const novaContaId = await Conta.create(data) 
            await novaContaId.populate('idMorador').execPopulate()

            return res.status(200).json(novaContaId)

        } catch (error) {
            return res.status(400).json(error)
        }

    },async listarContaMorador(req, res) {

        const {idMorador} = req.params
        
        try {
        
        const listarContasId = await Conta.find({idMorador})
            
        return res.status(200).json(listarContasId)
        } catch (error) {
            return res.status(400).json(error)
        }

    },async atualizarContaMorador(req, res) {


        const bodydata = req.body
        const {conta_id, idMorador} = req.params;
       
        
        try {

            const updateContaMorador = await Conta.findByIdAndUpdate(conta_id, bodydata, {new:true})
            return res.status(200).json(updateContaMorador)


        } catch (error) {
            return res.status(400).json(error)
        }

    },async deletarContaMorador(req, res) {

        
        const {conta_id, idMorador} = req.params;

        try {

            const deleteContaMorador = await Conta.findByIdAndDelete(conta_id)
            return res.status(200).json(deleteContaMorador)


        } catch (error) {
            return res.status(400).json(error)
        }

    }
    
}

module.exports = ContaController