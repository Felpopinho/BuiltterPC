import { Box, Typography, Tab, Tabs, Divider, Menu, MenuItem, Button } from "@mui/material";
import { Fragment, useState, useEffect } from "react";
import { promocaoLista } from "../script";
import { Catalogo } from "./Catalogo";
import { iconSection } from "../script"

export function Promocoes(){

    const [tabValue, setTabValue] = useState('1')

    const handleTab = (e, nValue) =>{
        setTabValue(nValue)
    }
    const handleTabValue = (nValue) =>{
        setTabValue(nValue)
        handleCloseMenu()
    } 

    const passoSessao = [iconSection.mae, iconSection.processador, iconSection.memoria, iconSection.armazem, iconSection.pvideo, iconSection.fonte];

    const [match, setMatch] = useState(false)
    var mediaQuery = window.matchMedia("(max-width: 700px)")

    const mediaQueryFunction = () =>{
        if (mediaQuery.matches){
            setMatch(true)
        } else{
            setMatch(false)
        }
    }

    useEffect(() => {
        mediaQueryFunction()
    })

    mediaQuery.addEventListener('change', ()=>{
        mediaQueryFunction()
    })

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);

    const handleMenu = (e) =>{
        setAnchorEl(e.currentTarget);
    }
    const handleCloseMenu = () =>{
        setAnchorEl(null);
    }

    return <div className="promocoes_container" id="Promocao">
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} flexWrap={"wrap"} width={"99%"}>
            <h1 fontFamily={'Work Sans'} fontWeight={700} className="tituloPromo">Catalogo de promoções</h1>
            <Box className="navPromo">
                {match === false ?
                    <Fragment>
                        <Tabs value={tabValue} onChange={handleTab} variant="scrollable">
                            <Tab value="1" label="Todos"/>
                            <Tab value="2" label="Placa-mãe"/>
                            <Tab value="3" label="Processador"/>
                            <Tab value="4" label="Memória"/>
                            <Tab value="5" label="Armazém"/>
                            <Tab value="6" label="Placa de vídeo"/>
                            <Tab value="7" label="Fonte"/>
                        </Tabs> 
                    </Fragment> : 
                    <Fragment>
                        <Button onClick={handleMenu} variant="contained">
                              Filtrar
                        </Button>
                        <Menu open={open} onClose={handleCloseMenu} anchorEl={anchorEl} sx={{textAlign: "center", width: "100%"}}>
                            <MenuItem onClick={()=>{handleTabValue("1")}}>Todos</MenuItem> 
                            <MenuItem onClick={()=>{handleTabValue("2")}} sx={{gap: "10px", display: "flex"}}><img style={{width: "20px"}} src={passoSessao[0]}/>Placa-mãe</MenuItem> 
                            <MenuItem onClick={()=>{handleTabValue("3")}} sx={{gap: "10px", display: "flex"}}><img style={{width: "20px"}} src={passoSessao[1]}/>Processador</MenuItem>
                            <MenuItem onClick={()=>{handleTabValue("4")}} sx={{gap: "10px", display: "flex"}}><img style={{width: "20px"}} src={passoSessao[2]}/>Memória</MenuItem> 
                            <MenuItem onClick={()=>{handleTabValue("5")}} sx={{gap: "10px", display: "flex"}}><img style={{width: "20px"}} src={passoSessao[3]}/>Armazém</MenuItem> 
                            <MenuItem onClick={()=>{handleTabValue("6")}} sx={{gap: "10px", display: "flex"}}><img style={{width: "20px"}} src={passoSessao[4]}/>Placa de vídeo</MenuItem> 
                            <MenuItem onClick={()=>{handleTabValue("7")}} sx={{gap: "10px", display: "flex"}}><img style={{width: "20px"}} src={passoSessao[5]}/>Fonte</MenuItem>  
                        </Menu> 
                    </Fragment>
                }
            </Box>
        </Box>
        <Divider sx={{margin: "1vh 0 1vh 0", width: "90%"}}/>
        <Box className="catalogoContainer">
            {tabValue === "1" ?
                <Fragment>
                    {promocaoLista.map(item => <Catalogo key={item.promocao_nome} nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>)}
                </Fragment> :
            tabValue === "2" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "mae" ? <Catalogo key={item.promocao_nome} nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
            tabValue === "3" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "processador" ? <Catalogo key={item.promocao_nome} nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
            tabValue === "4" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "memoria" ? <Catalogo key={item.promocao_nome} nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
            tabValue === "5" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "armazem" ? <Catalogo key={item.promocao_nome} nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
            tabValue === "6" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "pvideo" ? <Catalogo key={item.promocao_nome} nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "fonte" ? <Catalogo key={item.promocao_nome} nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment>
            }
        </Box>

    </div>
}