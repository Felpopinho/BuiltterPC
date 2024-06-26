import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';
import userRoutes from "./api/routes/users.js";
import videoRoutes from "./api/routes/videos.js";
import produtoRoutes from "./api/routes/produtos.js";
import simulacaoRoutes from "./api/routes/simulacoes.js";
import forumRoutes from "./api/routes/comentarios.js";

const app = express();

const port = 3000

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", videoRoutes);
app.use("/", produtoRoutes);
app.use("/", simulacaoRoutes);
app.use("/", forumRoutes);

ViteExpress.listen(app, port);