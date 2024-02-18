import { Typography, Box } from "@mui/material";

export function Molde(props){

    return <Box sx={{cursor: 'pointer'}}>
        <img src={props.simulacao_imagem} className="molde_image"/>
        <Typography variant="h4" fontWeight={600} textAlign={'center'}>{props.simulacao_nome}</Typography>
    </Box>

}