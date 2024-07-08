import express from 'express'
import { addProdutos, getProdutos, getPromocoes, addPromocoes } from '../controllers/produto.js'

const routerProdutos = express.Router()

routerProdutos.get("/produtos", getProdutos)
routerProdutos.post("/produtos", addProdutos)
routerProdutos.get("/promocoes", getPromocoes)
routerProdutos.post("/promocoes", addPromocoes)

export default routerProdutos