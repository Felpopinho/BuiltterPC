import { sessoesLista } from "../script";
import { tituloSobre, descSobre, imageSobre } from "../script";

export function ItensSobre(props){
    return <div className="section_content">

        <div className="image_sobre_container">
            <img src={props.imagem} id="Image_sobre"/>
            <div></div>
        </div>
        
        <h2 id="Titulo_sobre">{props.nome}</h2>
        <p id="Desc_sobre">{props.descricao}</p>
    </div>
}