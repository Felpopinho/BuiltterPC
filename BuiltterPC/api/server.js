import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';
import multer from "multer";
import { serverRouter } from 'server-router.js'
import 'dotenv/config'

const app = express();

const port = process.env.DB_PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", serverRouter);

ViteExpress.listen(app, port, ()=>{console.log(`http://localhost:${port}`)});