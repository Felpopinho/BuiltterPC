import { Modal, Box, Button, IconButton } from "@mui/material";
import { useEffect, useState, React } from "react";
import { perfilDesconhecido, previewUser } from "./script";
import axios from "axios";
import { baseURL } from "./App";
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
            const res = await axios.post(baseURL+"/user/delete", {
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
            setModalOpen(false)
            props.setLogado(false)
            props.setModalConta(false)
        }catch(error){
            console.log(error)
            props.handleOpenAlert("Algo deu errado", 2)
        }
    }

    return <>
        <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4, width: "100%", height: "100vh",
            display: "grid", gridTemplateColumns: "30% 70%", gridTemplateRows: "30vh 30vh", placeItems: "center"
        }}>
            <IconButton sx={{position: "absolute"}} className="closemodal" color="primary" onClick={() => {props.setModalConta(false)}}>
                <Close/>
            </IconButton>
            <div style={{width: "200px",height: "200px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "200px", overflow: "hidden", background: "white"}} >
                <img src={previewUser.perfil} style={{objectFit: "cover"}} width={"200px"}/>
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
                <div>
                    <Button onClick={() =>{sairConta("Usuário deslogado")}} disabled={props.logado === false}>Log out</Button>
                    <Button onClick={deletarConta} disabled={props.logado === false}>Deletar conta</Button>
                </div>
            </div>
        </Box>
    </>
}
