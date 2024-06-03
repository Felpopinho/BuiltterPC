import { Box, Typography, Tab, Tabs, Divider } from "@mui/material";
import { Fragment, useState } from "react";
import { promocaoLista } from "../script";
import { Catalogo } from "./Catalogo";

export function Promocoes(){

    const [tabValue, setTabValue] = useState('1')

    const handleTab = (e, nValue) =>{
        setTabValue(nValue)
    }

    return <div className="promocoes_container" id="Promocao">
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} flexWrap={"wrap"} width={"80%"}>
            <Typography variant="h2" fontFamily={'Work Sans'} fontWeight={700} sx={{textWrap: "nowrap"}}>Catalogo de promoções</Typography>
            <Box sx={{width: "600px"}}>
                <Tabs value={tabValue} onChange={handleTab} variant="scrollable">
                    <Tab value="1" label="Tudo" variant="outlined"/>
                    <Tab value="2" label="Placa-mãe"/>
                    <Tab value="3" label="Processador"/>
                    <Tab value="4" label="Memória"/>
                    <Tab value="5" label="Armazenamento"/>
                    <Tab value="6" label="Placa de vídeo"/>
                    <Tab value="7" label="Fonte"/>
                </Tabs>
            </Box>
        </Box>
        <Divider sx={{margin: "3vh", width: "90%"}}/>
        <Box className="catalogoContainer">
            {tabValue === "1" ?
                <Fragment>
                    {promocaoLista.map(item => <Catalogo nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>)}
                </Fragment> :
            tabValue === "2" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "mae" ? <Catalogo nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
            tabValue === "3" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "processador" ? <Catalogo nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
            tabValue === "4" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "memoria" ? <Catalogo nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
            tabValue === "5" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "armazem" ? <Catalogo nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
            tabValue === "6" ?
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "pvideo" ? <Catalogo nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment> :
                <Fragment>
                    {promocaoLista.map(item => item.promocao_id === "fonte" ? <Catalogo nome={item.promocao_nome} preco={item.promocao_preco} descricao={item.promocao_oferta} porcentagem={item.promocao_porcentagem} imagem={item.promocao_imagem}/>: console.log())}
                </Fragment>
            }
        </Box>

    </div>
}