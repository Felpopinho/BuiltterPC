import { Divider, Box, Input, Modal } from "@mui/material"
import { suporteLista, videos } from "../script"
import StarIcon from '@mui/icons-material/Star'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from "react";

export function Videos(props){

    const [openVideo, setOpenVideo] = useState(false)

    const objeto = suporteLista.findIndex((element) => element === props.video);

    const setFavorite = () =>{
        suporteLista[objeto].video_favorite = 'favorito';
    }
    const setView = () =>{
        suporteLista[objeto].video_view = 'view';
        setOpenVideo(true)
    }
    const handleCloseVideo = () =>{
        setOpenVideo(false)
    }

    return <>
        <Modal open={openVideo} onClose={handleCloseVideo}>
            <Box sx={{width:'80vw', backgroundColor: 'black', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', borderRadius: '30px'}}>
                <video width="100%" controls muted autoPlay className="Video_video">
                    <source src={videos} type="video/mp4"/>
                </video>
            </Box>
        </Modal>   
        <div className="videoimagem_container">
            <img src={props.video_imagem} onClick={setView}/>
        </div>
        <div className="videodesc_container">
            <div>
                <h2>{props.video_nome}</h2>
                <p className="videoDescricao">{props.video_descricao}</p>
            </div>
            <div className="video_estatistic_container">
                <p>{props.video_estatisticas} <RemoveRedEyeIcon/></p>
                <p onClick={setFavorite} className="favoritar">Favoritar <StarIcon /></p>
            </div>
        </div>
        <Divider className="divisor_video" sx={{margin: 3}}/>
    </>
}