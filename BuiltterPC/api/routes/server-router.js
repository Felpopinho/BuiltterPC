import express from 'express'
import { addUser, getUsers, deleteUser, updateUser, loginUser, addAmigo, getAmigos } from '../controllers/user.js'
import { addVideos, favoriteVideo, getVideos, viewVideo, deleteFavorite, deleteView, getFavoritos, getAllView, getAllFavoritos, updateViews } from '../controllers/video.js'
import { updateSimulacao, getProdSimulacoes,getSimulacoes, deleteSimulacao, addSimulacao, updateNomeSimulacao } from '../controllers/simulacao.js'
import { addProdutos, getProdutos, getPromocoes, addPromocoes } from '../controllers/produto.js'
import { addComment, getComments, getRespostas, getActualRespostas, addRespostas, deleteComment, deleteRespostas, likeComment, updateLikes, dislikeComment, getLikes } from '../controllers/forum.js'

const serverRouter = express.Router()

serverRouter.get("/user", getUsers);
serverRouter.post("/user/log", loginUser);
serverRouter.post("/user", addUser);
serverRouter.put("/user", updateUser);
serverRouter.post("/user/delete", deleteUser);

serverRouter.get("/amigos", getAmigos);
serverRouter.post("/amigos", addAmigo);

serverRouter.get("/videos", getVideos);
serverRouter.post("/videos", addVideos);

serverRouter.post("/videos/favorite", favoriteVideo)
serverRouter.post("/videos/updateFavorite", deleteFavorite)
serverRouter.post("/favorite", getFavoritos)
serverRouter.post("/favorite/all", getAllFavoritos)

serverRouter.post("/videos/view", viewVideo)
serverRouter.post("/videos/updateView", deleteView)
serverRouter.post("/view/all", getAllView)
serverRouter.post("/view/viewUpdate", updateViews)

serverRouter.get("/simulacoes", getSimulacoes);
serverRouter.post("/simulacoes/produtos", getProdSimulacoes);
serverRouter.post("/simulacoes", addSimulacao);
serverRouter.post("/simulacoes/update", updateSimulacao)
serverRouter.post("/simulacoes/update/nome", updateNomeSimulacao)
serverRouter.post("/simulacoes/del", deleteSimulacao)

serverRouter.get("/produtos", getProdutos);
serverRouter.post("/produtos", addProdutos);

serverRouter.get("/promocoes", getPromocoes);
serverRouter.post("/promocoes", addPromocoes);

serverRouter.post("/comentarios", getComments);
serverRouter.post("/comentarios/add", addComment);
serverRouter.post("/comentarios/del", deleteComment);

serverRouter.post("/comentarios/like", likeComment);
serverRouter.post("/comentarios/dislike", dislikeComment);
serverRouter.post("/comentarios/updateLikes", updateLikes);
serverRouter.post("/likes", getLikes);

serverRouter.get("/respostas", getRespostas);
serverRouter.post("/respostas/actual", getActualRespostas);
serverRouter.post("/respostas/add", addRespostas);
serverRouter.post("/respostas/del", deleteRespostas);

export default serverRouter