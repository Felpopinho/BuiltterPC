import { db } from "../db.js";

//USERS
export const getUsers = (_, res) => {
    const q = 'SELECT * FROM usuarios';

    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    });
};
export const loginUser = (req, res) =>{
    const q = "SELECT * FROM usuarios WHERE `email` = ? AND `senha` = ?"

    db.query(q, [req.body.email, req.body.senha], (err, data) =>{
        if (err) return res.status(500).json(err);
        if (data.lenght === 0) return res.status(404).json("Usuário não encontrado!")
        
        return res.status(200).json(data)
    })
};

export const addUser = (req, res) => {
    const q = "SELECT * FROM usuarios WHERE `email` = ?"

    db.query(q, [req.body.email], (err,data) =>{
        if (err) return res.status(500).json(err);

        if (data.lenght) return res.status(409).json("Este email já está sendo utilizado!")

        const q = "INSERT INTO usuarios (`nome`, `email`, `senha`, `perfil`, `titulo`, `descricao`) VALUES(?)";

        const values = [
            req.body.nome,
            req.body.email,
            req.body.senha,
            req.body.perfil,
            req.body.titulo,
            req.body.descricao,
        ];

        db.query(q, [values], (err,data) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json("Usuário criado com sucesso!")
        })

    });
};

export const updateUser = (req, res) =>{
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

        return res.status(200).json("Usuário editado com sucesso")
    });
};

export const deleteUser = (req, res) =>{
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.body.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!")
    });
};


//AMIGOS
export const getAmigos = (_,res)=>{
    const q = "SELECT * FROM amigos"

    db.query(q, (err,data)=>{
        if (err) return res.status(404).json(err)

        return res.status(200).json(data)
    })
}

export const addAmigo = (req, res)=>{
    const q = "INSERT INTO amigos (`userId`, `amigoId`) VALUES (?)"

    db.query(q, [req.body.userId, req.body.amigoId], (err,data)=>{
        if (err) return res.status(500).json(err)

        return res.status(200).json("Amigo adicionado")
    })
}