import express from 'express'
import { addComment, getComments, getRespostas, addRespostas, deleteComment, deleteRespostas } from '../controllers/forum.js'

const routerForum = express.Router()

routerForum.post("/comentarios", getComments);
routerForum.post("/comentarios/add", addComment);
routerForum.post("/comentarios/del", deleteComment);
routerForum.get("/respostas", getRespostas);
routerForum.post("/respostas/add", addRespostas)
routerForum.post("/respostas/del", deleteRespostas)

export default routerForum;