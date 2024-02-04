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

    return <div className="display_esquerdo_content">
        
        <div className={props.video_class1}>
            <div className={props.video_class2}>
                <img src={props.video_imagem} className="display_sup_image"/>
                <div>
                    <h3>{props.video_nome}</h3>
                    <p>{props.video_descricao}</p>
                </div>
            </div>
        </div>

        <div className={props.simulacao_class1}>
            <div className={props.simulacao_class2}>
                <h3>{props.simulacao_nome}</h3>
                <img src={props.simulacao_imagem} className="display_sim_image"/>
            </div>
        </div>

        <div className={props.promocao_class1}>
            <h3>{props.promocao_nome}</h3>
            <p>{props.promocao_descricao}</p>
            <img src={props.promocao_imagem} className="display_pro_image"/>
        </div>

        <div className={props.forum_class1}>
            <h3>{props.forum_nome}</h3>
            <p>{props.forum_descricao}</p>
            <img src={props.forum_imagem} className="display_com_image"/>
        </div>
    
    </div>

}