import { sessoesLista } from "./script";

export function ItensSobre(props){
    return <div className="sobre_container">
        <div>

            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <img src={props.imagem}

        </div>
    </div>
}