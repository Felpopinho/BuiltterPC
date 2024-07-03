import { Typography, Box, Divider, TextField, Input, IconButton } from "@mui/material";
import { useState, Fragment, useEffect } from "react";
import { previewUser } from "../script";

export function MoldeResultUm(props){

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
                <h1 style={{display: "flex", justifyContent: "center", margin: "15px"}}>{}</h1>
            </Box>
        </Box>
    </>
    
}

export function MoldeResultDois(props){

    const setNome = (e) =>{
        props.setIdNome(e.target.value)
    }

    const [pMedia, setPmedia] = useState(0)
    const precos = [props.mae[0].preco_produto, props.processador[0].preco_produto, props.memoria[0].preco_produto, props.armazem[0].preco_produto, props.pvideo[0].preco_produto, props.fonte[0].preco_produto]

    const precoMedia = () =>{
        const arrP = []
        for (let i = 0; i < precos.length; i++) {
            let PrecoMin = precos[i].slice(2,6);
            let PrecoMax = precos[i].slice(11,16);
            let PrecoMedia = (parseFloat(PrecoMin) + parseFloat(PrecoMax)) / 2;
            arrP.push(PrecoMedia)
        }
        setPmedia(arrP[0]+arrP[1]+arrP[2]+arrP[3]+arrP[4]+arrP[5])
    }

    useEffect (()=>{
        precoMedia
    }, [])

    return<>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-evenly", height: "100%"}} className="resultadoSimulacao_container">
            <Box>
                <Typography fontWeight={700} sx={{display: "flex", justifyContent: "center", marginBottom: "15px", fontSize: "2rem"}}>
                    Produtos selecionados
                </Typography>
                <Box sx={{height: "30vh", overflowY: "scroll", padding: "0 5px 0 5px"}}>
                    <Box className="sel_prod_container">
                        <img src={props.mae[0].imagem_produto}/>
                        <div>
                            <p>{props.mae[0].nome_produto}</p>
                            <p>{props.mae[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.processador[0].imagem_produto}/>
                        <div>
                            <p>{props.processador[0].nome_produto}</p>
                            <p>{props.processador[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.memoria[0].imagem_produto}/>
                        <div>
                            <p>{props.memoria[0].nome_produto}</p>
                            <p>{props.memoria[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.armazem[0].imagem_produto}/>
                        <div>
                            <p>{props.armazem[0].nome_produto}</p>
                            <p>{props.armazem[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.pvideo[0].imagem_produto}/>
                        <div>
                            <p>{props.pvideo[0].nome_produto}</p>
                            <p>{props.pvideo[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container">
                        <img src={props.fonte[0].imagem_produto}/>
                        <div>
                            <p>{props.fonte[0].nome_produto}</p>
                            <p>{props.fonte[0].preco_produto}</p>
                        </div>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
                <h1 style={{display: "flex", justifyContent: "center", margin: "15px", width: "auto"}}>Preço total: {pMedia}</h1>
            </Box>
        </Box>
    </>

}