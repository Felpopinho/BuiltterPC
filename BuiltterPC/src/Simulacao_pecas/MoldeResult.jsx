import { Typography, Box, Divider, TextField } from "@mui/material";
import { useState } from "react";

export function MoldeResult(props){

    const setNome = (e) =>{
        props.setIdNome(e.target.value)
    }

    return<>
        <Box sx={{display: "flex", alignItems: "center"}} className="resultadoSimulacao_container">

            <Typography fontWeight={700} sx={{display: "flex", justifyContent: "center", marginBottom: "15px", fontSize: "2rem"}}>
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
                <h1 style={{display: "flex", justifyContent: "center", margin: "15px"}}>{props.mae[3]+props.pro[3]+props.mem[3]+props.arm[3]+props.vid[3]+props.fon[3]}</h1>
            </Box>
        </Box>
    </>

}