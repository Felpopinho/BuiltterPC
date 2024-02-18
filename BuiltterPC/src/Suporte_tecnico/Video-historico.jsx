import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Divider, Box } from '@mui/material';


export function VideoHistorico(props){
    return <>
    
        <Box sx={{width: '50%'}} className="historico_image">
            <img src={props.video_imagem}/>
        </Box>
        <Box>
            <h2>{props.video_nome}</h2>
            <div className="video_estatistic_container">
                <p>{props.video_estatisticas} <RemoveRedEyeIcon/></p>
            </div>
        </Box>
        <Divider className="divisor_video" sx={{margin: 3}}/>
    
    </>
}