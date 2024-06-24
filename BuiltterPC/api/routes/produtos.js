import express from 'express'
import { addProdutos, getProdutos, getPromocoes } from '../controllers/produto.js'

const routerProdutos = express.Router()

routerProdutos.get("/produtos", getProdutos)
routerProdutos.post("/produtos", addProdutos)
routerProdutos.get("/promocoes", getPromocoes)

export default routerProdutos