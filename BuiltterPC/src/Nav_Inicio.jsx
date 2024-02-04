import { useState } from "react"

import { suporteLista, simulacaoLista, promocaoLista, comentarioLista, sessoesLista } from './script.js';

export function NavEsquerdo(props){

    return <div className='navegacao_esquerdo'> 
        <ul>

            <input type='radio' id='nav_sup'  defaultChecked onClick={() => {props.refreshSection(0)}}/><label htmlFor='nav_sup'>Suporte</label>
            <input type='radio' id='nav_sim' onClick={() => {props.refreshSection(1)}}/><label htmlFor='nav_sim'>Simulação</label>
            <input type='radio' id='nav_pro' onClick={() => {props.refreshSection(2)}}/><label htmlFor='nav_pro'>Promoções</label>
            <input type='radio' id='nav_for' onClick={() => {props.refreshSection(3)}}/><label htmlFor='nav_for'>Forum</label>

        </ul>
    </div>
        
}

export function NavDisplay(props){

    return <div display_esquerdo_content>
        
        <div>
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} />
    
    </div>

}