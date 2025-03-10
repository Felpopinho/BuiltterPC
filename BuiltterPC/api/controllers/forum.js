import { db } from "../db.js";

export const getComments = (req, res) =>{
    const q = `SELECT * FROM comentarios ORDER BY ${req.body.filtro} DESC`;

    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    });
}

export const addComment = (req, res) =>{
    const q = "INSERT INTO comentarios (`forum_id`, `forum_descricao`, `forum_tipo`, `forum_titulo`, `forum_curtidas`) VALUES (?)"

    const values = [
        req.body.forum_id,
        req.body.forum_descricao,
        req.body.forum_tipo,
        req.body.forum_titulo,
        req.body.forum_curtidas,
    ]

    db.query(q, [values], (err,data)=>{
        if (err) return res.status(500).json(err)

        

        return res.status(200).json("Postagem feita")
    })
}

export const deleteComment = (req, res) =>{
    const q = "DELETE FROM comentarios WHERE `id` = ?";

    db.query(q, [req.body.id], (err) =>{
        if (err) return res.json(err);

        

        return res.status(200).json("Comentario deletado com sucesso!")
    });
};

export const likeComment = (req, res) =>{
    const q = "INSERT INTO curtidas (`userId`, `postId`) VALUES (?)"

    const values=[
        req.body.userId, 
        req.body.postId
    ]

    db.query(q, [values], (err,data)=>{
        if (err) return res.status(500).json(err);

        

        return res.status(200).json(data);
    })
}

export const dislikeComment = (req,res) =>{
    const q = "DELETE FROM curtidas WHERE `userId` = ? AND `postId` = ?"

    db.query(q, [req.body.userId, req.body.postId], (err,data)=>{
        if (err) return res.status(404).json(err);

        

        return res.status(200).json(data);
    })
}

export const updateLikes = (req,res) =>{
    const q = "UPDATE comentarios SET `forum_curtidas` = ? WHERE `id` = ?"

    db.query(q, [req.body.forum_curtidas, req.body.postId], (err,data)=>{
        if (err) return res.status(500).json(err)

        
        
        return res.status(200).json(data)
    })
}

export const getLikes = (req, res) =>{
    const q = "SELECT * FROM curtidas WHERE `userId` = ? AND `postId` = ?"

    db.query(q, [req.body.userId,req.body.postId],(err,data)=>{
        if (err) return res.status(404).json(err)

        

        return res.status(200).json(data)
    })
}

export const getRespostas = (req, res) =>{
    const q = "SELECT * FROM respostas"

    db.query(q, (err,data)=>{
        if (err) return res.status(404).json(err)
        
        

        return res.status(200).json(data)
    })
}
export const getActualRespostas = (req, res) =>{
    const q = "SELECT * FROM respostas WHERE `postId` = ?"

    db.query(q, [req.body.id], (err,data)=>{
        if (err) return res.status(404).json(err)

        

        return res.status(200).json(data)
    })
}

export const addRespostas = (req,res) =>{
    const q = "INSERT INTO respostas (`userId`, `postId`, `resposta_titulo`, `resposta_desc`, `resposta_curtida`) VALUES (?)"

    const values = [
        req.body.forum_id,
        req.body.forum_postId,
        req.body.forum_titulo,
        req.body.forum_descricao,
        req.body.forum_curtidas
    ]

    db.query(q, [values], (err,data)=>{
        if (err) return res.status(500).json(err)

        

        return res.status(200).json("Respostas postada!")
    })
}

export const deleteRespostas = (req, res) =>{
    const q = "DELETE FROM respostas WHERE `id` = ?";

    db.query(q, [req.body.id], (err) =>{
        if (err) return res.json(err);

        

        return res.status(200).json("Resposta deletada com sucesso!")
    });
};