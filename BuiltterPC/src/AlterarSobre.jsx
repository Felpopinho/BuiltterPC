export function AlterarSessaoSobre(props){

    return <div className="nav_sobre">
        <input type='radio' onClick={props.AlterarSessao(0)}>{sessoesLista[0].nome}</input>
        <input type='radio' onClick={props.AlterarSessao(1)}>{sessoesLista[1].nome}</input>
        <input type='radio' onClick={props.AlterarSessao(2)}>{sessoesLista[2].nome}</input>
        <input type='radio' onClick={props.AlterarSessao(3)}>{sessoesLista[3].nome}</input>
    </div>

}