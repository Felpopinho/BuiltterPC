import { db } from "../db.js";

export const getProdutos = (_, res) =>{
    const q = 'SELECT * FROM produtos';

    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    });
}

export const addProdutos = (req, res) =>{
    const q = "INSERT INTO produtos (`nome_produto`, `preco_produto`, `imagem_produto`, `tipo_produto`) VALUES (?)"

    const values = [
        req.body.nome_produto,
        req.body.preco_produto,
        req.body.imagem_produto,
        req.body.tipo_produto
    ]

    db.query(q, [values], (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
}

export const getPromocoes = (_, res) =>{
    const q = 'SELECT * FROM promocoes';

    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    });
}