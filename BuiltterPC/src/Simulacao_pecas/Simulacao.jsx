import { Box, Button, Divider, Typography } from "@mui/material"
import { simulacaoLista } from "../script"
import { Molde } from "./Molde"
    
export function Simulacao(){

    return <div className="simulacao_container" id="Simulacao">
        <Box sx={{display:'flex', height: '15vh', width: '100%', justifyContent: "space-around", alignItems: 'center'}}>
            <Typography variant="h2" fontFamily={'Work Sans'} fontWeight={700} color={"white"}>Simulação de Montagem</Typography>
            <Button variant="contained" sx={{height: '5vh', fontSize: '1.1rem'}}>
                Clique em um dos moldes para começar!
            </Button>
        </Box>
        <Divider sx={{margin: 3, backgroundColor: "gray"}} variant="middle"/>
        <Box className="moldeBox" sx={{display: "flex", alignItems: "center", height: "40vh", width: "75%", overflowX: 'scroll', alignSelf:"center", borderRadius: "10px"}}>
            <Box sx={{display: 'flex', width: "500px"}}>
                {simulacaoLista.map(molde => (<Molde simulacao_nome={molde.simulacao_nome} simulacao_status={molde.simulacao_status} simulacao_id={molde.simulacao_id}/>))}
            </Box>
        </Box>
    </div>
}