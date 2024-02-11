import { Divider, List } from "@mui/material" 
import { suporteLista } from "../script"
import { Videos } from "./Videos"

export function Suporte(){
    return <div className="suporte_container" id="Suporte">

        <div className="nav_suporte_container">
            <i className="bi bi-house-door-fill"></i>
        </div>

        <div className="titulo_sessao_container">
            <h1>Suporte Técnico</h1>
            <Divider className="divisor_video" sx={{margin: 1}}/>
        </div>

        <div className="sessao_videos_container">
            <div className="videos_container">
                {suporteLista.map(video => (<Videos video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao}/>))}
            </div>
        </div>

    </div>
}