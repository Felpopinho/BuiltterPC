import { db } from "../db.js";

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