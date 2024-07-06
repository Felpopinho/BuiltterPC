import express from 'express'
import { updateSimulacao, getProdSimulacoes,getSimulacoes, deleteSimulacao, addSimulacao, updateNomeSimulacao } from '../controllers/simulacao.js'

const routerSimulacao = express.Router()

routerSimulacao.get("/simulacoes", getSimulacoes);
routerSimulacao.post("/simulacoes/produtos", getProdSimulacoes);
routerSimulacao.post("/simulacoes", addSimulacao);
routerSimulacao.post("/simulacoes/update", updateSimulacao)
routerSimulacao.post("/simulacoes/update/nome", updateNomeSimulacao)
routerSimulacao.post("/simulacoes/del", deleteSimulacao)

export default routerSimulacao