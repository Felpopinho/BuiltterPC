import { Typography, Box, Modal, Stepper, Step, StepButton, Button, Divider } from "@mui/material";
import { fontesObject, iArm, iFon, iMae, iMem, iPro, iVid, maeObject } from "../script";
import { useState } from "react";

export function MoldeResult(props){

    return<>
    
        <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}}>
            <Box sx={props.sessao === 7 ? {display: "flex"} : {display: "none"}} className="resultadoSimulacao_container">
                <Typography variant="h3" fontWeight={700} sx={{display: "flex", justifyContent: "center", marginBottom: "15px"}}>
                    Produtos selecionados
                </Typography>
                <Box sx={{height: "30vh", overflowY: "scroll"}}>
                    <Box className="sel_prod_container">
                        <img src={props.mae[0]}/>
                        <div>
                            <p>{props.mae[1]}</p>
                            <p>{props.mae[2]}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.processador[0]}/>
                        <div>
                            <p>{props.processador[1]}</p>
                            <p>{props.processador[2]}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.memoria[0]}/>
                        <div>
                            <p>{props.memoria[1]}</p>
                            <p>{props.memoria[2]}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.armazem[0]}/>
                        <div>
                            <p>{props.armazem[1]}</p>
                            <p>{props.armazem[2]}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.pvideo[0]}/>
                        <div>
                            <p>{props.pvideo[1]}</p>
                            <p>{props.pvideo[2]}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.fonte[0]}/>
                        <div>
                            <p>{props.fonte[1]}</p>
                            <p>{props.fonte[2]}</p>
                        </div>
                    </Box>
                </Box>
                <Box>
                    <h1 style={{display: "flex", justifyContent: "center", margin: "15px"}}></h1>
                </Box>
            </Box>
        </Box>

    </>

}