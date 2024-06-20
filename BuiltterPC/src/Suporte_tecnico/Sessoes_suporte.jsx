import { suporteLista } from "../script"
import { Videos } from "./Videos"

export function SessaoUm(props){
    return <>
        <h2 className="sessaoname">Top Videos</h2>
        <div className="videos_container" id="Videos">
            {suporteLista.map(video => (<Videos setOpenAviso={props.setOpenAviso} logado={props.logado}  video={video} video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>))}
        </div>
    
    </>
}

export function SessaoDois(props){
    return <>
    
        <h2 className="sessaoname">Hardware</h2>
        <div className="videos_container">
            {suporteLista.map(video => video.video_id === 'hardware' ? (<Videos setOpenAviso={props.setOpenAviso} logado={props.logado} video={video} video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log("a"))}
        </div>
    </>
}

export function SessaoTres(props){
    return <>
    
        <h2 className="sessaoname">Software</h2>
        <div className="videos_container">
            {suporteLista.map(video => video.video_id === 'software' ? (<Videos setOpenAviso={props.setOpenAviso} logado={props.logado} video={video} video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log("a"))}
        </div>
    </>
}

export function SessaoQuatro(props){
    return <>
    
        <h2 className="sessaoname">Testes</h2>
        <div className="videos_container">
            {suporteLista.map(video => video.video_id === 'testes' ? (<Videos setOpenAviso={props.setOpenAviso} logado={props.logado} video={video} video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>): console.log("a"))}
        </div>
    
    </>
}

export function SessaoFavorito(props){
    return <>

        <h2 className="sessaoname">Favoritos</h2>

        <div className="videos_container">
            {suporteLista.map(video => video.video_favorite === 'favorito' ? (<Videos video={video} video_imagem={video.video_imagem} video_nome={video.video_nome} video_descricao={video.video_descricao} video_estatisticas={video.video_estatisticas}/>) : console.log('a'))}
        </div>
    </>
}