import { Typography, Box, Modal, Stepper, Step, StepButton, Button, Divider, IconButton, CircularProgress } from "@mui/material";
import { useState, Fragment, useEffect } from "react";

import { MoldeResultDois } from "./MoldeResult";
import axios from "axios";
import { baseURL } from "../App.jsx"
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditOffRoundedIcon from '@mui/icons-material/EditOffRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export function Molde(props){

    props.setMoldeAtual(props.id)

    const editarMolde = () =>{
        props.setEditMolde(true)
    }

    const getProdSimulacoes = async () =>{
        try{
            await axios.post(baseURL+"/simulacoes/produtos", {
                mae: props.mae,
                pro: props.pro,
                mem: props.mem,
                arm: props.arm,
                vid: props.vid,
                fon: props.fon,
            }).then(res=>{
                props.setIdMae(res.data[0])
                props.setIdPro(res.data[1])
                props.setIdMem(res.data[2])
                props.setIdArm(res.data[3])
                props.setIdVid(res.data[4])
                props.setIdFon(res.data[5])
                props.getData()
            })
        } catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        getProdSimulacoes()
    }, [])

    return <Box>
        
        <Box className="boxCont" sx={{cursor: 'pointer', border: 'solid 3px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'var(--fundo)', position: "relative"}} onMouseUp={props.handleOpenResult}>
                <h2 className="sim_desc" fontWeight={600}>{props.nome}</h2>
                <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", position: "absolute", bottom: "0px", padding: "10px", zIndex: "4"}}>
                    <IconButton onClick={editarMolde}>
                        <EditRoundedIcon/>
                    </IconButton>
                    <IconButton onClick={()=>{props.deleteMolde(props.id)}}>
                        <DeleteForeverRoundedIcon/>
                    </IconButton>
                </Box> 
        </Box>
        <Modal open={props.resultOpen}>
            <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}}>
                <MoldeResultDois sessao={props.section} mae={props.idMae} processador={props.idPro} memoria={props.idMem} armazem={props.idArm} fonte={props.idFon} pvideo={props.idVid} idNome={props.idNome} setIdNome={props.setIdNome}
                setEditMolde={props.setEditMolde} edit={props.editMolde} simulacao_nome={props.nome} setCompleted={props.setCompleted} setSection={props.setSection} setPassar={props.setPassar} 
                setMoldeOpen={props.setMoldeOpen} setResultOpen={props.setResultOpen} resultOpen={props.resultOpen} simulacao_id={props.id} getProdSimulacoes={getProdSimulacoes} handleOpenAlert={props.handleOpenAlert}/>
            </Box>
        </Modal>

    </Box>

}