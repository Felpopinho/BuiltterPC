import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';
import multer from "multer";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import produtoRoutes from "./routes/produtos.js";
import simulacaoRoutes from "./routes/simulacoes.js";
import forumRoutes from "./routes/comentarios.js";
import 'dotenv/config'

const app = express();

const port = process.env.DB_PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", videoRoutes);
app.use("/", produtoRoutes);
app.use("/", simulacaoRoutes);
app.use("/", forumRoutes);

ViteExpress.listen(app, port, ()=>{console.log(`http://localhost:${port}`)});