import { db } from "../db.js";

export const getSimulacoes = (_, res) =>{
    const q = 'SELECT * FROM simulacoes';

    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    });
}

export const addSimulacoes = (req, res) => {
    const q = "INSERT INTO simulacoes (`simulacao_nome`, `simulacao_status`, `simulacao_mae`, `simulacao_pro`, `simulacao_mem`, `simulacao_arm`, `simulacao_vid`, `simulacao_fon`) VALUES (?)"

    const values = [
        req.body.simulacao_nome,
        req.body.simulacao_status,
        req.body.simulacao_mae,
        req.body.simulacao_pro,
        req.body.simulacao_mem,
        req.body.simulacao_arm,
        req.body.simulacao_vid,
        req.body.simulacao_fon,
    ]

    db.query(q, [...values], (err, data)=>{
        if (err) return res.json(err);
        
        return res.status(200).json(data);
    })
}

export const updateSimulacao = (req, res) => {
    const q = "UPTADE simulacoes SET `simulacao_mae` = ?, `simulacao_pro` = ?, `simulacao_mem` = ?, `perfil` = ?, `titulo` = ?, `descricao` = ? WHERE `id` = ?"

    db.query(q, [...values], (err, data)=>{
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}

export const deleteSimulacao = (req, res) => {
    const q = "DELETE FROM simulacoes WHERE `id` = ?"

    db.query(q, [req.body.id], (err,data) =>{
        if (err) return res.status(500).json(err);

        return res.status(200).json("Simulacao deletada com sucesso!")
    })
}