import { Box, Button, Divider, Typography } from "@mui/material"
import { simulacaoLista } from "../script"
import { Molde } from "./Molde"
    
export function Simulacao(){

    return <div className="simulacao_container" id="Simulacao">
        <Box sx={{display:'flex', height: '15vh', width: '100%', justifyContent: "space-around", alignItems: 'center'}}>
            <Typography variant="h2" fontFamily={'Work Sans'} fontWeight={700}>Simulação de Montagem</Typography>
            <Button variant="contained" sx={{height: '5vh'}}>
                Começar Simulação
            </Button>
        </Box>
        <Divider sx={{margin: 3}}/>
        <Box sx={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', margin: '0 auto', width: '80%',height: '60vh' , justifyItems: 'center', alignItems: 'center'}}>
            {simulacaoLista.map(molde => (<Molde simulacao_nome={molde.simulacao_nome} simulacao_status={molde.simulacao_status} simulacao_id={molde.simulacao_id}/>))}
        </Box>
    </div>
}