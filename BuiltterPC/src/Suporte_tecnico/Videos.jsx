import { Divider } from "@mui/material"

export function Videos(props){
    return <>

        <div className="videoimagem_container">
            <img src={props.video_imagem}/>
        </div>
        <div className="videodesc_container">
            <h2>{props.video_nome}</h2>
            <p>{props.video_descricao}</p>
        </div>
        <Divider className="divisor_video" sx={{margin: 3}}/>
    </>
}