import { db } from "../db.js";

export const getSimulacoes = (_, res) =>{
    const q = 'SELECT * FROM simulacoes';

    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    });
}
export const getProdSimulacoes = (req, res) =>{
    const q = "SELECT * FROM produtos WHERE `nome_produto` LIKE ?";

    db.query(q, [req.body.mae], (err,data)=>{
        if (err) return res.json(err);
        let mae = data
        db.query(q, [req.body.pro], (err,data)=>{
            if (err) return res.json(err);
            let pro = data
            db.query(q, [req.body.mem], (err,data)=>{
                if (err) return res.json(err);
                let mem = data
                db.query(q, [req.body.arm], (err,data)=>{
                    if (err) return res.json(err);
                    let arm = data
                    db.query(q, [req.body.vid], (err,data)=>{
                        if (err) return res.json(err);
                        let vid = data
                        db.query(q, [req.body.fon], (err,data)=>{
                            if (err) return res.json(err);
                            let fon = data
                            return res.json([mae,pro,mem,arm,vid,fon])
                        })
                    })
                })
            })
        })
    })

}

export const addSimulacao = (req, res) => {
    const q = "INSERT INTO simulacoes (`userId`, `nome`, `mae`, `pro`, `mem`, `arm`, `vid`, `fon`) VALUES (?)"

    const values = [
        req.body.userId,
        req.body.simulacao_nome,
        req.body.simulacao_mae,
        req.body.simulacao_pro,
        req.body.simulacao_mem,
        req.body.simulacao_arm,
        req.body.simulacao_vid,
        req.body.simulacao_fon,
    ]

    db.query(q, [values], (err, data)=>{
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}

export const updateSimulacao = (req, res) => {
    const q = "SELECT tipo_produto FROM produtos WHERE `nome_produto` = ?"

    db.query(q, [req.body.pNome], (err, data)=>{
        if (err) return res.status(500).json(err)

        if (data[0].tipo_produto === "mae") {
            const q = "UPDATE simulacoes SET `mae` = ? WHERE `id` = ?"

            db.query(q, [req.body.pNome, req.body.id], (err,data)=>{
                if (err) return res.status(500).json(err);

                return res.status(200).json(data);
            })
        } else if (data[0].tipo_produto === "processador") {
            const q = "UPDATE simulacoes SET `pro` = ? WHERE `id` = ?"

            db.query(q, [req.body.pNome, req.body.id], (err,data)=>{
                if (err) return res.status(500).json(err);

                return res.status(200).json(data);
            })
        } else if (data[0].tipo_produto === "memoria") {
            const q = "UPDATE simulacoes SET `mem` = ? WHERE `id` = ?"

            db.query(q, [req.body.pNome, req.body.id], (err,data)=>{
                if (err) return res.status(500).json(err);

                return res.status(200).json(data);
            })
        } else if (data[0].tipo_produto === "armazem") {
            const q = "UPDATE simulacoes SET `arm` = ? WHERE `id` = ?"

            db.query(q, [req.body.pNome, req.body.id], (err,data)=>{
                if (err) return res.status(500).json(err);

                return res.status(200).json(data);
            })
        } else if (data[0].tipo_produto === "pvideo") {
            const q = "UPDATE simulacoes SET `vid` = ? WHERE `id` = ?"

            db.query(q, [req.body.pNome, req.body.id], (err,data)=>{
                if (err) return res.status(500).json(err);

                return res.status(200).json(data);
            })
        } else if (data[0].tipo_produto === "fonte") {
            const q = "UPDATE simulacoes SET `fon` = ? WHERE `id` = ?"

            db.query(q, [req.body.pNome, req.body.id], (err,data)=>{
                if (err) return res.status(500).json(err);

                return res.status(200).json(data);
            })
        } else{
            return res.status(404).json("tipo não encontrado")
        }
    })
}
export const updateNomeSimulacao = (req, res) =>{
    const q = "UPDATE simulacoes SET `nome` = ? WHERE `id` = ?"

    db.query(q, [req.body.nome, req.body.id] ,(err,data)=>{
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}

export const deleteSimulacao = (req, res) => {
    const q = "DELETE FROM simulacoes WHERE `id` = ?"

    db.query(q, [req.body.id, req.body.id], (err,data) =>{
        if (err) return res.status(500).json(err);

        return res.status(200).json(data)
    })
}