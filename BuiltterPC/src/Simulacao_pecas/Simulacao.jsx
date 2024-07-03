import { Box, Button, Divider, Typography } from "@mui/material"
import { Molde } from "./Molde"
    
export function Simulacao(props){

    return <div className="simulacao_container" id="Simulacao">
        <Box className="inicioSim">
            <Typography variant="h2" fontFamily={'Work Sans'} fontWeight={700} color={"white"}>Simulação de Montagem</Typography>
            <Button className="infoSim" variant="contained" sx={{height: '5vh'}}>
                Clique em um dos moldes para começar!
            </Button>
        </Box>
        <Divider sx={{margin: "2vh 0 2vh 0", backgroundColor: "gray"}} variant="middle"/>
        <Box className="moldeBoxContainer">
            <Box className="moldeBox" sx={{display: "flex", alignItems: "center", overflowX: 'scroll', alignSelf:"center", borderRadius: "10px"}}>
                <Box className="boxs" sx={{display: 'flex'}}>
                    {props.simulacoes.map(molde => (<Molde getData={props.getData} produtos={props.produtos} key={molde.id} simulacao_nome={molde.simulacao_nome} molde={molde} 
                    simulacao_status={molde.simulacao_status} simulacao_id={molde.id} simulacao_mae={molde.simulacao_mae} simulacao_pro={molde.simulacao_pro} simulacao_mem={molde.simulacao_mem}
                    simulacao_arm={molde.simulacao_arm} simulacao_vid={molde.simulacao_vid} simulacao_fon={molde.simulacao_fon}/>))}
                </Box>
            </Box>
        </Box>
    </div>
}