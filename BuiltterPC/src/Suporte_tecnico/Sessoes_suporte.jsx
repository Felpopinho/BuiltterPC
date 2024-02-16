import { Button } from "@mui/material"
import { suporteLista } from "../script"
import { Videos } from "./Videos"

export function SessaoUm(){
    return <>
        <h2 className="sessaoname">Top Videos</h2>
        <div className="videos_container">
            {suporteLista.map(video => (<Videos video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao}/>))}
        </div>
    
    </>
}

export function SessaoDois(){
    return <>
    
        <h2 className="sessaoname">Hardware</h2>
        <div className="videos_container">
            {suporteLista.map(video => video.video_id === 'hardware' ? (<Videos video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao}/>): console.log("a"))}
        </div>
    </>
}

export function SessaoTres(){
    return <>
    
        <h2 className="sessaoname">Software</h2>
        <div className="videos_container">
            {suporteLista.map(video => video.video_id === 'software' ? (<Videos video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao}/>): console.log("a"))}
        </div>
    </>
}

export function SessaoQuatro(){
    return <>
    
        <h2 className="sessaoname">Testes</h2>
        <div className="videos_container">
            {suporteLista.map(video => video.video_id === 'testes' ? (<Videos video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao}/>): console.log("a"))}
        </div>
    
    </>
}

export function SessaoFavorito(){
    return <>

        <h2 className="sessaoname">Favoritos</h2>
        
        {suporteLista.slice(0,1).map(video => (video.video_favorite === 'favorito' ?
        (console.log) : 
        (<h1 className="alert_favorite">Você não tem videos favoritos ainda!</h1>)))}

        <div className="videos_container">
            {suporteLista.map(video => video.video_favorite === 'favorito' ? (<Videos video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao}/>): console.log('a'))}
        </div>
    </>
}