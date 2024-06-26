import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';
import userRoutes from "./api/routes/users.js";
import videoRoutes from "./api/routes/videos.js";
import produtoRoutes from "./api/routes/produtos.js";
import simulacaoRoutes from "./api/routes/simulacoes.js";
import forumRoutes from "./api/routes/comentarios.js";
import 'dotenv/config'

const app = express();

<<<<<<< HEAD
const port = process.env.PORT || 3000
=======
export const port = process.env.PORT || 3000
>>>>>>> 5c2938f359f90d18fd10a631896c065481bcfd93

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use("/", userRoutes);
app.use("/", videoRoutes);
app.use("/", produtoRoutes);
app.use("/", simulacaoRoutes);
app.use("/", forumRoutes);

ViteExpress.listen(app, port, () =>{
    console.log(port)
});