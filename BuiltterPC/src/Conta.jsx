import { Modal, Box, Button, Snackbar } from "@mui/material";
import { useEffect, useState, React, Fragment } from "react";
import { PreviewPerfil } from "./Menu/Preview-Perfil";
import { perfilDesconhecido, previewUser } from "./script";
import axios from "axios";
import { baseURL } from "./App";

export function Conta(props){

    const [modalOpen, setModalOpen] = useState(true)

    const modalClose = (a) =>{
        if (a === 1) {
            props.setOpenAviso(true);
            props.fecharModal(false)
        } else {
            setModalOpen(false)
            props.fecharModal(false)
        }
        setAviso(true)
    }

    const sairConta = () =>{
        previewUser.idUser = ''
        previewUser.usuario = '';
        previewUser.email = '';
        previewUser.senha = '';
        previewUser.perfil = '';
        previewUser.titulo = '';
        previewUser.descricao = '';
        props.setLogado(false)
        setModalOpen(false)
        props.fecharModal(false)
    }
    const deletarConta = async () =>{
        try{
            const res = await axios.post(baseURL+"/del", {
                id: previewUser.idUser
            })
            setMessage(res.data)
        }catch(error){
            console.log(error)
        }
        sairConta()
    }

    const [aviso, setAviso] = useState(false);
    const [message, setMessage] = useState("")
    const handleAviso = (e, r) =>{
        if (r === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return <>
    {props.logado === false ? modalClose(1) :
        <Modal open={modalOpen} onClose={modalClose} aria-labelledby="modal-criarconta">

            <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px', width: "60%", height: "60vh",
                display: "grid", gridTemplateColumns: "30% 70%", gridTemplateRows: "30vh 30vh", placeItems: "center"
            }}>
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
                        <Button onClick={sairConta} disabled={props.logado === false}>Log out</Button>
                        <Button onClick={deletarConta} disabled={props.logado === false}>Deletar conta</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    }
    </>
}
