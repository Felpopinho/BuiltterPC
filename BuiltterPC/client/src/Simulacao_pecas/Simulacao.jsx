import { Box, Button, Divider, Typography, LinearProgress } from "@mui/material"
import { Molde } from "./Molde"
import { Fragment, useEffect, useState } from "react"
import { previewUser } from "../script";
    
export function Simulacao(props){    

    return <div className="simulacao_container" id="Simulacao">
        <Box className="inicioSim">
            <Typography variant="h2" fontFamily={'Work Sans'} fontWeight={700} color={"white"}>Simulação de Montagem</Typography>
        </Box>
        <Divider sx={{margin: "2vh 0 2vh 0", backgroundColor: "gray"}} variant="middle"/>
        <Box className="moldeBoxContainer">
            <Box className="moldeBox" sx={{display: "flex", alignItems: "center", overflowX: 'scroll', alignSelf:"center", borderRadius: "10px"}}>
            {props.simulacoes === "" ?
                <LinearProgress sx={{width: "100%", alignSelf: "start"}}/> :
                props.logado === false ? (<Fragment><Typography variant="h3" fontWeight={700} sx={{display: "flex", alignItems: "center", justifyContent: "center", color: "white", width: "100%", height: "100%", textAlign: "center", padding: "10%"}}>Crie uma conta ou faça login para acessar os moldes</Typography></Fragment>) : (
                <Box className="boxs" sx={{display: 'flex'}}> 
                    {Array.from(props.simulacoes).map(molde => molde.userId === previewUser.idUser ? (<Molde getData={props.getData} produtos={props.produtos} key={molde.id} simulacao_nome={molde.nome} molde={molde} 
                    simulacao_status={molde.status} simulacao_id={molde.id} simulacao_mae={molde.mae} simulacao_pro={molde.pro} simulacao_mem={molde.mem} simulacoes={props.simulacoes}
                    simulacao_arm={molde.arm} simulacao_vid={molde.vid} simulacao_fon={molde.fon} handleOpenAlert={props.handleOpenAlert} setOpenAviso={props.setOpenAviso}/>): "")}
                    <Box></Box>
                </Box>)
            }
            </Box>
        </Box>
    </div>
}