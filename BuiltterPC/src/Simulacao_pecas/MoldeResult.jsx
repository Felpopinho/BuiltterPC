import { Typography, Box, Divider, TextField, Input, IconButton, Button, FormControl, FormHelperText } from "@mui/material";
import { useState, Fragment, useEffect } from "react";
import { Close } from "@mui/icons-material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditOffRoundedIcon from '@mui/icons-material/EditOffRounded';
import SendIcon from '@mui/icons-material/Send';
import { baseURL } from "../App";
import axios from "axios";

export function MoldeResultUm(props){

    const setNome = (e) =>{
        props.setIdNome(e.target.value)
        if ((e.target.value).length >= 16){
            props.setIdNome(e.target.value.slice(0,(e.target.value).length-1))
        }
    }

    return<>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-evenly", height: "100%"}} className="resultadoSimulacao_container">
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
            <Box sx={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
                <FormControl sx={{width: "40%"}}>
                    <TextField onChange={(e)=>{setNome(e)}} label="Nome do molde" value={props.idNome} fullWidth/>
                    <FormHelperText>{props.idNome.length}/15</FormHelperText>
                </FormControl>
                <h1 style={{display: "flex", justifyContent: "center", margin: "15px"}}>Preço total: {props.mae[3]+props.processador[3]+props.memoria[3]+props.armazem[3]+props.pvideo[3]+props.fonte[3]}</h1>
            </Box>
        </Box>
    </>
    
}

export function MoldeResultDois(props){

    const [pMedia, setPmedia] = useState(0)
    const precos = [props.mae[0].preco_produto, props.processador[0].preco_produto, props.memoria[0].preco_produto, props.armazem[0].preco_produto, props.pvideo[0].preco_produto, props.fonte[0].preco_produto]

    const precoMedia = () =>{
        const arrP = []
        for (let i = 0; i < precos.length; i++) {
            if (precos[i]){
                let PrecoMin = precos[i].slice(2,6);
                let PrecoMax = precos[i].slice(11,16);
                let PrecoMedia = (parseFloat(PrecoMin) + parseFloat(PrecoMax)) / 2;
                arrP.push(PrecoMedia)
            }
        }
        setPmedia(arrP[0]+arrP[1]+arrP[2]+arrP[3]+arrP[4]+arrP[5])
    }

    const editNome = async () =>{
        try{
            await axios.post(baseURL+"/simulacoes/update/nome", {
                nome: nome,
                id: props.simulacao_id
            }).then(res=>{
                props.handleOpenAlert("Nome do molde alterado!", 1)
            })
        }catch(error){
            console.log(error)
            props.handleOpenAlert("Alterar nome do molde falhou!", 2)
        }
    }
    const editMae = () =>{
        props.setMoldeOpen(true)
        props.setResultOpen(false)
        props.setSection(1)
    }
    const editPro = () =>{
        props.setMoldeOpen(true)
        props.setResultOpen(false)
        props.setSection(2)
    }
    const editMem = () =>{
        props.setMoldeOpen(true)
        props.setResultOpen(false)
        props.setSection(3)
    }
    const editArm = () =>{
        props.setMoldeOpen(true)
        props.setResultOpen(false)
        props.setSection(4)
    }
    const editVid = () =>{
        props.setMoldeOpen(true)
        props.setResultOpen(false)
        props.setSection(5)
    }
    const editFon = () =>{
        props.setMoldeOpen(true)
        props.setResultOpen(false)
        props.setSection(6)
    }

    const fecharEdit = () =>{
        props.setEditMolde(false)
        props.setResultOpen(false)
        props.setIdNome(props.simulacao_nome)
    }

    useEffect (()=>{
        precoMedia();
    }, [props.mae,props.processador,props.memoria,props.pvideo,props.fonte,props.armazem])

    const [nome, setNome] = useState(props.simulacao_nome)

    const setNomeEdit = (e) =>{
        setNome(e.target.value)
        if ((e.target.value).length >= 16){
            setNome(e.target.value.slice(0,(e.target.value).length-1))
        }
    }

    return<>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-evenly", height: "80vh"}} className="resultadoSimulacaoDois_container">
        {props.edit === false ?
            <IconButton sx={{position: "absolute"}} className="closemodal" color="primary" onClick={()=>{props.setResultOpen(false)}}>
                <Close/>
            </IconButton> :
        console.log }
            <Box sx={{width: "80%", display: "flex", justifyContent: "center"}}>
                {props.edit === false ?
                <Typography sx={{display: "flex", justifyContent: "center", marginBottom: "15px", fontSize: "2.5rem", fontWeight: "700"}}>
                    {props.simulacao_nome}
                </Typography> : 
                <Box sx={{display:"flex", justifyContent: "space-between"}}>
                    <FormControl>
                        <Input size="small" onChange={(e)=>{setNomeEdit(e)}} label="Editar nome do molde" value={nome} sx={{width: "90%", fontSize: "2.2rem"}}/>
                        <FormHelperText>{nome.length}/15</FormHelperText>
                    </FormControl>
                    <IconButton disabled={nome === ""} color="primary" onClick={editNome}>
                        <SendIcon/>
                    </IconButton>
                </Box>
                }
            </Box>
            <Box>
                <Typography fontWeight={700} sx={{display: "flex", justifyContent: "center", marginBottom: "15px", fontSize: "2rem"}}>
                    Produtos selecionados:
                </Typography>
                <Box sx={{height: "30vh", overflowY: "scroll", padding: "0 5px 0 5px"}}>
                    <Box className="sel_prod_container" sx={{position: "relative"}}>
                        {props.edit === true ? <IconButton onClick={editMae} color="primary" sx={{position: "absolute", bottom: "0px", left: "0px", margin: "2px"}}><EditRoundedIcon/></IconButton> : console.log}
                        <img src={props.mae[0].imagem_produto}/>
                        <div>
                            <p>{props.mae[0].nome_produto}</p>
                            <p>{props.mae[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container" sx={{position: "relative"}}>
                        {props.edit === true ? <IconButton onClick={editPro} color="primary" sx={{position: "absolute", bottom: "0px", left: "0px", margin: "2px"}}><EditRoundedIcon/></IconButton> : console.log}
                        <img src={props.processador[0].imagem_produto}/>
                        <div>
                            <p>{props.processador[0].nome_produto}</p>
                            <p>{props.processador[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container" sx={{position: "relative"}}>
                        {props.edit === true ? <IconButton onClick={editMem} color="primary" sx={{position: "absolute", bottom: "0px", left: "0px", margin: "2px"}}><EditRoundedIcon/></IconButton> : console.log}
                        <img src={props.memoria[0].imagem_produto}/>
                        <div>
                            <p>{props.memoria[0].nome_produto}</p>
                            <p>{props.memoria[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container" sx={{position: "relative"}}>
                        {props.edit === true ? <IconButton onClick={editArm} color="primary" sx={{position: "absolute", bottom: "0px", left: "0px", margin: "2px"}}><EditRoundedIcon/></IconButton> : console.log}
                        <img src={props.armazem[0].imagem_produto}/>
                        <div>
                            <p>{props.armazem[0].nome_produto}</p>
                            <p>{props.armazem[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container" sx={{position: "relative"}}>
                        {props.edit === true ? <IconButton onClick={editVid} color="primary" sx={{position: "absolute", bottom: "0px", left: "0px", margin: "2px"}}><EditRoundedIcon/></IconButton> : console.log}
                        <img src={props.pvideo[0].imagem_produto}/>
                        <div>
                            <p>{props.pvideo[0].nome_produto}</p>
                            <p>{props.pvideo[0].preco_produto}</p>
                        </div>
                    </Box>
                    <Divider sx={{margin: "10px 0 10px 0"}}/>
                    <Box className="sel_prod_container" sx={{position: "relative"}}>
                        {props.edit === true ? <IconButton onClick={editFon} color="primary" sx={{position: "absolute", bottom: "0px", left: "0px", margin: "2px"}}><EditRoundedIcon/></IconButton> : console.log}
                        <img src={props.fonte[0].imagem_produto}/>
                        <div>
                            <p>{props.fonte[0].nome_produto}</p>
                            <p>{props.fonte[0].preco_produto}</p>
                        </div>
                    </Box>
                </Box>
            </Box>
            <Box>
                <h1 style={{display: "flex", justifyContent: "center", margin: "15px", width: "auto"}}>Preço total: {pMedia}</h1>
                {props.edit === true ? <Button onClick={fecharEdit} fullWidth variant="contained">Finalizar edição</Button>:console.log}
            </Box>
        </Box>
    </>

}