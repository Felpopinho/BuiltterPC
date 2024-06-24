import express from 'express'
import { addSimulacoes, getSimulacoes } from '../controllers/simulacao.js'

const routerSimulacao = express.Router()

routerSimulacao.get("/simulacoes", getSimulacoes);
routerSimulacao.post("/simulacoes", addSimulacoes);

export default routerSimulacao