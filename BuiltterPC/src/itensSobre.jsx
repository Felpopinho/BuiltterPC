import { sessoesLista } from "./script";

export function itensSobre(props){
    return <div className="sobre_container">

        <h2>{props.nome}</h2>
        <p>{props.descricao}</p>
        <img src={props.imagem} />
        
    </div>
}