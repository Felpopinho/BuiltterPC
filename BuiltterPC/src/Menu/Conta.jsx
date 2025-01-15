import { Box, Button, IconButton, Avatar, Divider } from "@mui/material";
import { useState, React } from "react";
import { previewUser } from "../script";
import axios from "axios";
import { baseURL } from "../App";
import { Close } from "@mui/icons-material";


export function Conta(props){

    const sairConta = (m) =>{
        previewUser.idUser = ''
        previewUser.usuario = '';
        previewUser.email = '';
        previewUser.senha = '';
        previewUser.perfil = '';
        previewUser.titulo = '';
        previewUser.descricao = '';
        props.handleOpenAlert("Usuário deslogado", 1)
        props.setModalConta(false)
        props.setLogado(false)
    }
    const deletarConta = async () =>{
        try{
            await axios.post(baseURL+"/user/delete", {
                id: previewUser.idUser
            })
            previewUser.idUser = ''
            previewUser.usuario = '';
            previewUser.email = '';
            previewUser.senha = '';
            previewUser.perfil = '';
            previewUser.titulo = '';
            previewUser.descricao = '';
            props.handleOpenAlert("Usuário deletado", 1)
            props.setLogado(false)
            props.setModalConta(false)
        }catch(error){
            console.log(error)
            props.handleOpenAlert("Algo deu errado", 2)
        }
    }

    const [assistidos, setAssistidos] = useState(0);
    const [favoritos, setFavoritos] = useState(0);
    const [criados, setCriados] = useState(0);

    const getSuporteStats = async() =>{
        try {
            await axios.post(baseURL+"/favorite/all",{
                user_id: previewUser.idUser
            }).then(res=>{
                setFavoritos(res.data.length)
            });
            await axios.post(baseURL+"/")
        } catch (error) {
            console.log(error)
        }
    }

    return <>
    <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4, width: "100%", height: "100vh", overflowY: "scroll"}}>
        <Box sx={{display: "grid", gridTemplateColumns: "30% 70%", gridTemplateRows: "30vh 30vh", placeItems: "center"}}>
            <IconButton sx={{position: "absolute", top: "5%", right: "5%"}} color="primary" onClick={() => {props.setModalConta(false)}}>
                <Close/>
            </IconButton>
            <div style={{width: "200px",height: "200px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "200px", overflow: "hidden", background: "white"}} >
                <Avatar sx={{bgcolor:previewUser.perfil, width:"100%", height:"100%"}}/>
            </div>
            <div style={{gridColumn: "2/3", gridRow: "1/3", width: "90%", height: "90%", justifySelf: "flex-end"}}>
                <h1 style={{fontSize: "2.3rem", margin: "0vh 0 3vh 0"}}>Titulo: {previewUser.titulo}</h1>
                <div style={{width: "100%", height: "80%", backgroundColor: "var(--darkgray)", padding: "20px", borderRadius: "20px"}}>
                    <p style={{fontSize: "1rem", color: "gray"}}>Sobre mim</p>
                    <p style={{fontSize: "1.5rem", wordWrap: "break-word", color: "white"}}>{previewUser.descricao}</p>
                </div>
            </div>
            <div style={{width: "90%", height: "90%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{fontSize: "2.5rem", margin: "0vh 0 3vh 0"}}>{previewUser.usuario}</h1>
                <p style={{margin: "0vh 0 3vh 0"}}>{previewUser.email}</p>
                <div style={{display: "flex", justifyContent: "space-between", width: "80%"}}>
                    <Button color="red" onClick={() =>{sairConta("Usuário deslogado")}} disabled={props.logado === false}>Log out</Button>
                    <Button variant="outlined" onClick={deletarConta} disabled={props.logado === false}>Deletar conta</Button>
                </div>
            </div>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "50% 50%", gridTemplateRows: "10vh 1fr"}}>
            <h1 style={{gridColumn: "1/3"}}>Estasticas</h1>
            <Box>
                <h2>Suporte</h2>
                <Box>
                    <h3>Assistidos: {assistidos}</h3>
                    <h3>Favoritos: {favoritos}</h3>
                    <h3>Criados: {criados}</h3>
                </Box>
            </Box>
            <Box>
                <h2>Simulação</h2>
                {props.videos.map(video => video.video_view === "visto" ? <Box>
                    <Box sx={{width: "80%", height: "10vh", overflow: "hidden"}}>
                        <img src={video.video_imagem} style={{width: "100%"}}/>
                    </Box>
                    <Box sx={{display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "auto auto"}}>
                        <h2 style={{gridColumn: "1/3"}}>{video.video_nome}</h2>
                    </Box>
                    <Divider sx={{margin: "2vh 0vh 2vh 0vh", width: "90%"}}/>
                </Box>:console.log)}
            </Box>
            <Box>
                <h2>Promoções</h2>
                {props.videos.map(video => video.video_view === "visto" ? <Box>
                    <Box sx={{width: "80%", height: "10vh", overflow: "hidden"}}>
                        <img src={video.video_imagem} style={{width: "100%"}}/>
                    </Box>
                    <Box sx={{display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "auto auto"}}>
                        <h2 style={{gridColumn: "1/3"}}>{video.video_nome}</h2>
                    </Box>
                    <Divider sx={{margin: "2vh 0vh 2vh 0vh", width: "90%"}}/>
                </Box>:console.log)}
            </Box>
            <Box>
                <h2>Forum</h2>
                {props.videos.map(video => video.video_view === "visto" ? <Box>
                    <Box sx={{width: "80%", height: "10vh", overflow: "hidden"}}>
                        <img src={video.video_imagem} style={{width: "100%"}}/>
                    </Box>
                    <Box sx={{display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "auto auto"}}>
                        <h2 style={{gridColumn: "1/3"}}>{video.video_nome}</h2>
                    </Box>
                    <Divider sx={{margin: "2vh 0vh 2vh 0vh", width: "90%"}}/>
                </Box>:console.log)}
            </Box>
        </Box>
    </Box>
    </>
}
