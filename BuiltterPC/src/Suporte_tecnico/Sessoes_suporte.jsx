import { useEffect, useState, useSyncExternalStore } from "react"
import { Videos } from "./Videos"
import { VideoFavorite } from "./VideoFilter"
import { baseURL } from "../App"
import { previewUser } from "../script"
import axios from "axios"

export function SessaoUm(props){

    return <>
        
        <h2 className="sessaoname">Top Videos</h2>
        <div className="videos_container" id="Videos">
            {props.videos.map(video => (<Videos sessao={props.sessao} visualizar={props.visualizar} 
            favoritar={props.favoritar} key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} video_imagem={video.video_imagem} 
            video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>))}
        </div>
    
    </>
}

export function SessaoDois(props){
    return <>
    
        <h2 className="sessaoname">Hardware</h2>
        <div className="videos_container">
            {props.videos.map(video => video.video_tipo === 'hardware' ? (<Videos sessao={props.sessao} 
            visualizar={props.visualizar} favoritar={props.favoritar}  key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} 
            video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log)}
        </div>
    </>
}

export function SessaoTres(props){
    return <>
    
        <h2 className="sessaoname">Software</h2>
        <div className="videos_container">
            {props.videos.map(video => video.video_tipo === 'software' ? (<Videos sessao={props.sessao} 
            visualizar={props.visualizar} favoritar={props.favoritar} key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} 
            video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log)}
        </div>
    </>
}

export function SessaoQuatro(props){
    return <>
    
        <h2 className="sessaoname">Testes</h2>
        <div className="videos_container">
            {props.videos.map(video => video.video_tipo === 'teste' ? (<Videos sessao={props.sessao} 
            visualizar={props.visualizar} favoritar={props.favoritar} key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} 
            video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log)}
        </div>
    
    </>
}

export function SessaoFavorito(props){

    return <>
        <h2 className="sessaoname">Favoritos</h2>

        <div className="videos_container">
            {Array.from(props.videos).map(video => <VideoFavorite sessao={props.sessao} favoritos={props.videosFavoritados} videoAtual={video}
            visualizar={props.visualizar} favoritar={props.favoritar} key={video.id} idVid={video.id} setOpenAviso={props.setOpenAviso} logado={props.logado} 
            video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>)}
        </div>
    </>
}