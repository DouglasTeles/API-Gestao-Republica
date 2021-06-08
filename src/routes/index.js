const {Router} = require('express')
const routes = Router()




routes.get('/',(req, res)=>{
    res.send("rodando")
    })

//Moradores
const MoradorController = require('../controllers/MoradorController')
routes.post('/morador', MoradorController.criarMorador)
routes.get('/morador', MoradorController.listarMorador)
routes.patch('/morador/:idMorador', MoradorController.atualizarMorador)
routes.delete('/morador/:idMorador', MoradorController.deletarMorador)

//Contas
const ContaController = require('../controllers/ContaController')
routes.post('/conta', ContaController.criarConta)//Cadastrar conta
routes.get('/conta', ContaController.listarConta)//Listar todas as contas
routes.patch('/conta/:conta_id', ContaController.atualizarContaId)//Atualizar 
routes.delete('/conta/:conta_id', ContaController.deletarContaId)//Deletar Conta especifica
routes.post('/conta/:idMorador', ContaController.cadastrarContaMorador )//Cadastrar conta para um morador
routes.get('/conta/:idMorador', ContaController.listarContaMorador)//listar contas de um morador
routes.patch('/conta/:idMorador/:conta_id', ContaController.atualizarContaMorador)//Atualizar conta de um morador
routes.delete('/conta/:idMorador/:conta_id', ContaController.deletarContaMorador)//Deletar conta de um morador
// routes.get('/conta/:qtd/:vlr', ContaController.soma)//Deletar conta de um morador


//Login
routes.post('/login')

module.exports = routes