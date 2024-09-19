import { Divider, Box, Input, Modal } from "@mui/material"
import { previewUser, videos } from "../script"
import StarIcon from '@mui/icons-material/Star'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../App";

export function Videos(props){

    const [favoritado, setFavoritado] = useState(false)

    const getFavoritos = async () =>{
        try {
            await axios.post(baseURL+"/favorite", {
                user_id: previewUser.idUser,
                video_id: props.idVid
            }).then(res=>{
                res.data.length !== 0 ? setFavoritado(true) : setFavoritado(false);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getFavoritos()
    }, [props.logado])

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
            props.visualizar(1, previewUser.idUser, props.idVid, props.video_estatisticas)
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