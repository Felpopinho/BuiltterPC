import express from 'express'
import { addVideos, favoriteVideo, getVideos, viewVideo, deleteFavorite, deleteView, getFavoritos, getAllView, getAllFavoritos, updateViews } from '../controllers/video.js'

const routerVideos = express.Router();

routerVideos.get("/videos", getVideos);
routerVideos.post("/videos", addVideos);

routerVideos.post("/videos/favorite", favoriteVideo)
routerVideos.post("/videos/updateFavorite", deleteFavorite)
routerVideos.post("/favorite", getFavoritos)
routerVideos.post("/favorite/all", getAllFavoritos)

routerVideos.post("/videos/view", viewVideo)
routerVideos.post("/videos/updateView", deleteView)
routerVideos.post("/view/all", getAllView)
routerVideos.post("/view/viewUpdate", updateViews)

export default routerVideos