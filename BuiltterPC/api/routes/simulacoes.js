import express from 'express'
import { updateSimulacao, getProdSimulacoes,getSimulacoes, deleteSimulacao } from '../controllers/simulacao.js'

const routerSimulacao = express.Router()

routerSimulacao.get("/simulacoes", getSimulacoes);
routerSimulacao.post("/simulacoes/produtos", getProdSimulacoes);
routerSimulacao.post("/simulacoes", updateSimulacao);
routerSimulacao.post("/simulacoes/del", deleteSimulacao)

export default routerSimulacao