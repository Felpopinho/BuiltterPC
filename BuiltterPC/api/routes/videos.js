import express from 'express'
import { addVideos, favoriteVideo, getVideos, viewVideo, deleteFavorite } from '../controllers/video.js'

const routerVideos = express.Router();

routerVideos.get("/videos", getVideos);
routerVideos.post("/videos", addVideos);
routerVideos.post("/videos/favorite", favoriteVideo)
routerVideos.post("/videos/view", viewVideo)
routerVideos.post("/videos/update", deleteFavorite)

export default routerVideos