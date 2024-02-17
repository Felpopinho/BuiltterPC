import { Divider } from "@mui/material"
import { suporteLista } from "../script"
import StarIcon from '@mui/icons-material/Star'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export function Videos(props){

    const objeto = suporteLista.findIndex((element) => element === props.video);

    const setFavorite = () =>{
        suporteLista[objeto].video_favorite = 'favorito'
    }
    const unsetFavorite = () =>{
        suporteLista[objeto].video_favorite = ''
    }

    return <>

        <div className="videoimagem_container">
            <img src={props.video_imagem}/>
        </div>
        <div className="videodesc_container">
            <h2>{props.video_nome}</h2>
            <p>{props.video_descricao}</p>
            <div className="video_estatistic_container">
                <p>{props.video_estatisticas} <RemoveRedEyeIcon/></p>
                <p onClick={setFavorite} className="favoritar">Favoritar <StarIcon /></p>
            </div>
        </div>
        <Divider className="divisor_video" sx={{margin: 3}}/>
    </>
}