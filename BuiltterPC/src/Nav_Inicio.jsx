import { useState } from "react"

export function NavEsquerdo(props){

    return <div className='navegacao_esquerdo'> 
        <ul>

            <input type='radio' id='nav_sup'  defaultChecked onClick={() => {props.refreshSection(0)}}/><label htmlFor='nav_sup'><a href='#Suporte'>Suporte</a></label>
            <input type='radio' id='nav_sim' onClick={() => {props.refreshSection(1)}}/><label htmlFor='nav_sim'><a href='#Simulacao'>Simulacao</a></label>
            <input type='radio' id='nav_pro' onClick={() => {props.refreshSection(2)}}/><label htmlFor='nav_pro'><a href='#Promocoes'>Promoções</a></label>
            <input type='radio' id='nav_for' onClick={() => {props.refreshSection(3)}}/><label htmlFor='nav_for'><a href='#Forum'>Forum</a></label>

        </ul>
    </div>
        
}

export function NavDisplay(props){

    return <>
        
        <div>
            <h3>{(props.nome)}</h3>
            <p>{(props.descricao)}</p>
        </div>
        <img src={(props.imagem)} />
    
    </>

}