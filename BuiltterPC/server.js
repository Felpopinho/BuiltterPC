import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';
import { db } from "./api/db.js";
import fileUpload from "express-fileupload";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/src", (_, res) => {
    const q = 'SELECT * FROM usuarios';

    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    });
});
app.post("/log", (req, res) =>{
    const q = "SELECT * FROM usuarios WHERE `email` = ? AND `senha` = ?"

    db.query(q, [req.body.email, req.body.senha], (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
})

app.post("/src", (req, res) => {
    const q = "INSERT INTO usuarios (`nome`, `email`, `senha`, `perfil`, `titulo`, `descricao`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.perfil,
        req.body.titulo,
        req.body.descricao,
    ];

    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data)
    });
});

app.put("/src", (req, res) =>{
    const q = "UPTADE usuarios SET `nome` = ?, `email` = ?, `senha` = ?, `perfil` = ?, `titulo` = ?, `descricao` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.perfil,
        req.body.titulo,
        req.body.descricao,
    ];

    db.query(q, [...values, req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("usuario deletado com sucesso")
    });
});

app.post("/del", (req, res) =>{
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.body.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("usuario deletado com sucesso!")
    });
});

ViteExpress.listen(app, 3000);