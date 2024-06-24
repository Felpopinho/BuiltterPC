import { db } from "../db.js";

export const getVideos = (_, res) => {

    const q = "SELECT * FROM videos ORDER BY `video_estatisticas` DESC";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
};

export const addVideos = (req, res) =>{
    const q = "INSERT INTO videos (`video_nome`, `video_descricao`, `video_imagem`, `video_estatisticas`) VALUES(?)"

    const values = [
        req.body.video_nome,
        req.body.video_descricao,
        req.body.video_imagem,
        req.body.video_estatisticas
    ]

    db.query(q, [values], (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
};

export const updateVideo = (req, res) =>{
        const q = "UPDATE videos SET `video_favorite` = ?, `video_view` = ?, `video_estatisticas` = ?  WHERE `id` = ?"

        const values = [
            req.body.video_favorite, 
            req.body.video_view,
            req.body.video_estatisticas,
            req.body.id
        ]

        db.query(q, [...values], (err, data)=>{
            if (err) return res.json(err);

            return res.status(200).json(data)
        })
    
}
    