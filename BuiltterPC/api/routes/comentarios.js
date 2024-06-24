import express from 'express'
import { getComments } from '../controllers/forum.js'

const routerForum = express.Router()

routerForum.get("/comentarios", getComments);

export default routerForum;