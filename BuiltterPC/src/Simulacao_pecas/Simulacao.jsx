import { Box, Button, Divider, Typography } from "@mui/material"
import { Fragment, useState } from "react"
import { simulacaoLista } from "../script"
import { Molde } from "./Molde"


export function Simulacao(){

    let [section, setSection] = useState(0)

    return <div className="simulacao_container" id="Simulacao">
        <Box sx={{display:'flex', height: '15vh', width: '100%', justifyContent: "space-around", alignItems: 'center'}}>
            <Typography variant="h2" fontFamily={'Work Sans'} fontWeight={700}>Simulação de Montagem</Typography>
            <Button variant="contained" sx={{height: '5vh'}}>
                Começar Simulação
            </Button>
        </Box>
        <Divider sx={{margin: 3}}/>
        {section === 0 ? (
            <Fragment>
                <Box sx={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', margin: '0 auto', width: '80%',height: '60vh' , justifyItems: 'center', alignItems: 'center'}}>
                    {simulacaoLista.map(molde => (<Molde simulacao_nome={molde.simulacao_nome} simulacao_imagem={molde.simulacao_imagem} />))}
                </Box>
            </Fragment>) :
        section === 1 ? (
            <Fragment>
                <SectionDois/>
            </Fragment>) :
        section === 3 ? (
            <Fragment>
                <SectionTrês/>
            </Fragment>) :
        section === 4 ? (
            <Fragment>
                <SectionQuatro/>
            </Fragment>) :
        <Fragment>
            <SectionCinco/>
        </Fragment>}
        <Box>

        </Box>
    </div>
}