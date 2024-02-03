import { useState } from "react"

export function NavEsquerdo(props){

    return <div className='navegacao_esquerdo'> 
        <ul>

            <input type='radio' id='nav_sup'  defaultChecked onMouseEnter={() => {props.refreshSection(0)}}/><label for='nav_sup'><a href='#Suporte'>Suporte</a></label>
            <input type='radio' id='nav_sim' onMouseEnter={() => {props.refreshSection(1)}}/><label for='nav_sim'><a href='#Simulacao'>Simulacao</a></label>
            <input type='radio' id='nav_pro' onMouseEnter={() => {props.refreshSection(2)}}/><label for='nav_pro'><a href='#Promocoes'>Promoções</a></label>
            <input type='radio' id='nav_for' onMouseEnter={() => {props.refreshSection(3)}}/><label for='nav_for'><a href='#Forum'>Forum</a></label>

        </ul>
    </div>
        
}

export function NavDisplay(props){

    return <>
    
        <img src={props.imagem} />
        
        <div>
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
        </div>
    
    </>

}