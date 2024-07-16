import express from 'express'
import { addComment, getComments, getRespostas, addRespostas, deleteComment, deleteRespostas, likeComment, updateLikes, dislikeComment, getLikes } from '../controllers/forum.js'

const routerForum = express.Router()

routerForum.post("/comentarios", getComments);
routerForum.post("/comentarios/add", addComment);
routerForum.post("/comentarios/del", deleteComment);

routerForum.post("/comentarios/like", likeComment);
routerForum.post("/comentarios/dislike", dislikeComment);
routerForum.post("/comentarios/updateLikes", updateLikes);
routerForum.post("/likes", getLikes);

routerForum.get("/respostas", getRespostas);
routerForum.post("/respostas/add", addRespostas);
routerForum.post("/respostas/del", deleteRespostas);

export default routerForum;