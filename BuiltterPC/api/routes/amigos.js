import express from 'express'
import { addAmigo, getAmigos } from '../controllers/amigo.js'

const routerAmigos = express.Router();

routerAmigos.get("/amigos", getAmigos);
routerAmigos.post("/amigos", addAmigo);

export default routerAmigos;