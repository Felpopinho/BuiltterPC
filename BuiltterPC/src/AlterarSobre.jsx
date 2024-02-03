import { sessoesLista } from "./script"

export function AlterarSessaoSobre(props){

    return <div className="nav_sobre">
        <input type='radio' id="0-sessao" defaultChecked onClick={() => props.AlterarSessao(0)}/>
        <label htmlFor="0-sessao">{sessoesLista[0].nome}</label>

        <input type='radio' id="1-sessao" onClick={() => props.AlterarSessao(1)}/>
        <label htmlFor="1-sessao">{sessoesLista[1].nome}</label>

        <input type='radio' id="2-sessao" onClick={() => props.AlterarSessao(2)}/>
        <label htmlFor="2-sessao">{sessoesLista[2].nome}</label>

        <input type='radio' id="3-sessao" onClick={() => props.AlterarSessao(3)}/>
        <label htmlFor="3-sessao">{sessoesLista[3].nome}</label>
    </div>

}