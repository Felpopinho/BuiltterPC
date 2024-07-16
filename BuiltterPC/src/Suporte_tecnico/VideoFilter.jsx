import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Divider, Box, IconButton, Modal } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState, useEffect } from 'react';
import { previewUser, videos } from "../script"
import StarIcon from '@mui/icons-material/Star'
import axios from 'axios';
import { baseURL } from '../App';

export function VideoHistorico(props){
    return <>
    
        <Box className="historico_image">
            <img src={props.video_imagem}/>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "auto auto"}}>
            <h2 style={{gridColumn: "1/3"}}>{props.video_nome}</h2>
            <div className="video_estatistic_container">
                <p>{props.video_estatisticas}&nbsp;<RemoveRedEyeIcon/></p>
            </div>
            <IconButton sx={{justifySelf: "end"}} onClick={() => {props.visualizar(props.idVid, props.video_favorite, props.video_estatisticas, 2)}}>
                <DeleteForeverIcon />
            </IconButton>
        </Box>
        <Divider className="divisor_video" sx={{margin: "2vh 0vh 2vh 0vh", width: "90%"}}/>
    
    </>
}

export function VideoFavorite(props){
    const setFavorite = (n) =>{
        if (props.logado === true){
            props.favoritar(n, previewUser.idUser, props.idVid);
            getFavoritos()
        } else{
            return props.setOpenAviso(true)
        }
    }
    const setView = () =>{
        if (props.logado === true){
            setOpenVideo(true)
            props.visualizar(previewUser.idUser, props.idVid)
        }
    }

    const [openVideo, setOpenVideo] = useState(false)
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
                <p>{props.video_estatisticas}&nbsp;<RemoveRedEyeIcon/></p>
                {favoritado === true ? <p onClick={() => setFavorite(2)} className="desfavoritar">Desfavoritar&nbsp;<StarIcon /></p> : <p onClick={() => setFavorite(1)} className="favoritar">Favoritar&nbsp;<StarIcon /></p>}
            </div>
        </div>
        <Divider className="divisor_video" sx={{margin: "2vh 0 2vh 0"}}/>
    </>
}