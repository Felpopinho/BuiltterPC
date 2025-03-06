import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Divider, Box, IconButton, Modal } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState, useEffect, Fragment } from 'react';
import { previewUser, videos } from "../script"
import StarIcon from '@mui/icons-material/Star'
import axios from 'axios';
import { baseURL } from '../App';

export function VideoHistorico(props){
    const [videosVistos, setVideosVistos] = useState("")
    const getVistos = () =>{
        Array.from(props.vistos).forEach(visto=>{
            visto.video_id === props.idVid ? setVideosVistos(props.videoAtual) : console.log
        })
    }

    useEffect(()=>{
        getVistos()
    },[props.vistos])

    const setView = (n) =>{
        props.visualizar(n, previewUser.idUser, props.idVid);
        setVideosVistos("")
    }

    return <>
        {videosVistos === "" ? "" : <Fragment>
            <Box className="historico_image">
                <img src={videosVistos.video_imagem}/>
            </Box>
            <Box sx={{display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "auto auto"}}>
                <h2 style={{gridColumn: "1/3"}}>{videosVistos.video_nome}</h2>
                <div className="video_estatistic_container">
                    <p>{videosVistos.video_estatisticas}&nbsp;<RemoveRedEyeIcon/></p>
                </div>
                <IconButton sx={{justifySelf: "end", alignSelf: "center", height: "50px", width: "50px"}} onClick={()=>{setView(2)}}>
                    <DeleteForeverIcon />
                </IconButton>
            </Box>
            <Divider className="divisor_video" sx={{margin: "2vh 0vh 2vh 0vh", width: "90%"}}/>
        </Fragment>}
    </>
}

export function VideoFavorite(props){

    const setFavorite = (n) =>{
        if (props.logado === true){
            props.favoritar(n, previewUser.idUser, props.idVid);
        } else{
            return props.setOpenAviso(true)
        }
        setVideosFavoritos("")
    }

    const [videosFavoritos, setVideosFavoritos] = useState("")
    const getFavoritos = () =>{
        Array.from(props.favoritos).forEach(favorito=>{
            favorito.video_id === props.idVid ? setVideosFavoritos(props.videoAtual) : console.log
        })
    }

    useEffect(()=>{
        getFavoritos()
    },[props.favoritos])

    return <>
        {videosFavoritos === "" ? "" : <Fragment>
            <div className="videoimagem_container">
                <img src={videosFavoritos.video_imagem}/>
            </div>
            <div className="videodesc_container">
                <div>
                    <h2>{videosFavoritos.video_nome}</h2>
                    <p className="videoDescricao">{videosFavoritos.video_descricao}</p>
                </div>
                <div className="video_estatistic_container">
                    <p>{videosFavoritos.video_estatisticas}&nbsp;<RemoveRedEyeIcon/></p>
                    <p onClick={() => setFavorite(2)} className="desfavoritar">Desfavoritar&nbsp;<StarIcon /></p>
                </div>
            </div>
            <Divider className="divisor_video" sx={{margin: "2vh 0 2vh 0"}}/>     
        </Fragment>}
    </>
}