import { db } from "../db.js";

export const getComments = (_, res) =>{
    const q = 'SELECT * FROM comentarios';

    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    });
}