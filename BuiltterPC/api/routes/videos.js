import express from 'express'
import { addVideos, getVideos, updateVideo } from '../controllers/video.js'

const routerVideos = express.Router();

routerVideos.get("/videos", getVideos);
routerVideos.post("/videos", addVideos);
routerVideos.post("/videos/update", updateVideo)

export default routerVideos