import { useEffect, useState, useSyncExternalStore } from "react"
import { Videos } from "./Videos"
import { VideoFavorite } from "./VideoFilter"
import { baseURL } from "../App"
import { previewUser } from "../script"

export function SessaoUm(props){

    return <>
        
        <h2 className="sessaoname">Top Videos</h2>
        <div className="videos_container" id="Videos">
            {props.videos.map(video => (<Videos video_view={video.video_view} video_favorite={video.video_favorite} sessao={props.sessao} visualizar={props.visualizar} 
            favoritar={props.favoritar} key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} video_imagem={video.video_imagem} 
            video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>))}
        </div>
    
    </>
}

export function SessaoDois(props){
    return <>
    
        <h2 className="sessaoname">Hardware</h2>
        <div className="videos_container">
            {props.videos.map(video => video.video_tipo === 'hardware' ? (<Videos video_view={video.video_view} video_favorite={video.video_favorite} sessao={props.sessao} 
            visualizar={props.visualizar} favoritar={props.favoritar}  key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} 
            video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log())}
        </div>
    </>
}

export function SessaoTres(props){
    return <>
    
        <h2 className="sessaoname">Software</h2>
        <div className="videos_container">
            {props.videos.map(video => video.video_tipo === 'software' ? (<Videos video_view={video.video_view} video_favorite={video.video_favorite} sessao={props.sessao} 
            visualizar={props.visualizar} favoritar={props.favoritar} key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} 
            video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log())}
        </div>
    </>
}

export function SessaoQuatro(props){
    return <>
    
        <h2 className="sessaoname">Testes</h2>
        <div className="videos_container">
            {props.videos.map(video => video.video_tipo === 'teste' ? (<Videos video_view={video.video_view} video_favorite={video.video_favorite} sessao={props.sessao} 
            visualizar={props.visualizar} favoritar={props.favoritar} key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} 
            video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log())}
        </div>
    
    </>
}

export function SessaoFavorito(props){

    const [videosFavoritos,setVideosFavoritos] = useState("")

    const getVideosFavoritos = async() =>{
        if(props.logado === true){
            try {
                await axios.post(baseURL+"/favorites/all", {
                    user_id: previewUser.idUser
                }).then(res=>{
                    setVideosFavoritos(res.data);
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    return <>
        <h2 className="sessaoname">Favoritos</h2>

        <div className="videos_container">
            {props.videos.map(video => <VideoFavorite video_view={video.video_view} video_favorite={video.video_favorite} sessao={props.sessao} 
            visualizar={props.visualizar} favoritar={props.favoritar} setOpenAviso={props.setOpenAviso} key={video.id} logado={props.logado} idVid={video.id} 
            video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>)}
        </div>
    </>
}