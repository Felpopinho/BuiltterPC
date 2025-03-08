import { db } from "../db.js";

export const getProdutos = (_, res) =>{
    const arrData = []
    const q = "SELECT * FROM produtos WHERE `tipo_produto` = 'mae'";
    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        arrData.push(data)
        const q = "SELECT * FROM produtos WHERE `tipo_produto` = 'processador'";
        db.query(q, (err, data) =>{
            if (err) return res.json(err);
            arrData.push(data)
            const q = "SELECT * FROM produtos WHERE `tipo_produto` = 'memoria'";
            db.query(q, (err, data) =>{
                if (err) return res.json(err);
                arrData.push(data)
                const q = "SELECT * FROM produtos WHERE `tipo_produto` = 'armazem'";
                db.query(q, (err, data) =>{
                    if (err) return res.json(err);
                    arrData.push(data)
                    const q = "SELECT * FROM produtos WHERE `tipo_produto` = 'pvideo'";
                    db.query(q, (err, data) =>{
                        if (err) return res.json(err);
                        arrData.push(data)
                        const q = "SELECT * FROM produtos WHERE `tipo_produto` = 'fonte'";
                        db.query(q, (err, data) =>{
                            if (err) return res.json(err);
                            arrData.push(data)

                            
                            return res.status(200).send(arrData)
                        });
                    });
                });
            });
        });
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

export const addPromocoes = (req, res) =>{
    const q = 'INSERT INTO promocoes (`promocao_nome`, `promocao_preco`, `promocao_porcentagem`, `promocao_oferta`, `promocao_imagem`, `promocao_tipo`) VALUES (?)'

    const values = [
        req.body.promocao_nome,
        req.body.promocao_preco,
        req.body.promocao_porcentagem,
        req.body.promocao_oferta,
        req.body.promocao_imagem,
        req.body.promocao_tipo
    ]

    db.query(q, [values], (err, data)=>{
        if (err) return res.json(err);

        
        return res.status(200).json(data)
    })
}