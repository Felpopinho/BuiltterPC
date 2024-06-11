import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import { PreviewPerfil } from "./Menu/Preview-Perfil";
import { previewUser } from "./script";

export function Conta(props){

    const [modalOpen, setModalOpen] = useState(true)

    const modalClose = () =>{
        setModalOpen(false)
        props.fecharModal(false)
    }

    return <Modal open={modalOpen} onClose={modalClose} aria-labelledby="modal-criarconta">
        {previewUser.usuario === "" ?
        <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px', width: "20%", height: "20vh",
            display: "flex", alignItems: "center",  justifyContent: "space-evenly"
        }}>
            <Button variant="contained" color="primary" onClick={modalClose} sx={{transition: 'all 0.2s ease', height: "80%", width: "80%", borderRadius: "20px"}}>Crie uma conta ou faça login</Button>
        </Box> :
        <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px', width: "60%", height: "60vh",
            display: "grid", gridTemplateColumns: "30% 70%", gridTemplateRows: "30vh 30vh", placeItems: "center"
        }}>
            <div style={{width: "200px",height: "200px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "200px", overflow: "hidden", background: "white"}} >
                <img src={previewUser.perfil === "" ? "/src/assets/imagens/perfil-desconhecido.png" : previewUser.perfil} style={{objectFit: "cover"}} width={"200px"}/>
            </div>
            <div style={{gridColumn: "2/3", gridRow: "1/3", width: "90%", height: "90%"}}>
                <h1 style={{fontSize: "2.3rem", margin: "0vh 0 3vh 0"}}>Titulo: {previewUser.titulo}</h1>
                <p style={{fontSize: "1.5rem", wordWrap: "break-word"}}>{previewUser.descricao}</p>
            </div>
            <div style={{width: "90%", height: "90%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{fontSize: "2.5rem", margin: "0vh 0 3vh 0"}}>{previewUser.usuario}</h1>
                <p>{previewUser.email}</p>
            </div>
        </Box>
        }
    </Modal>

}