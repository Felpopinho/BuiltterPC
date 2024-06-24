import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Divider, Box, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export function VideoHistorico(props){
    return <>
    
        <Box className="historico_image">
            <img src={props.video_imagem}/>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "auto auto"}}>
            <h2 style={{gridColumn: "1/3"}}>{props.video_nome}</h2>
            <div className="video_estatistic_container">
                <p>{props.video_estatisticas}&nbsp;<RemoveRedEyeIcon/></p>
            </div>
            <IconButton sx={{justifySelf: "end"}} onClick={() => {props.visualizar(props.idVid, props.video_favorite, props.video_estatisticas, 2)}}>
                <DeleteForeverIcon />
            </IconButton>
        </Box>
        <Divider className="divisor_video" sx={{margin: "2vh 0vh 2vh 0vh", width: "90%"}}/>
    
    </>
}