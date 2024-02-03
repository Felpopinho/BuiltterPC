import { useState } from 'react';
import { ItensSobre } from './itensSobre.jsx';
import { sessoesLista } from './script.js';
import { CriarConta } from './Criar-logar.jsx';


export function Menu(){

    return <>

        <div className="nav_container">
            <img src={logo} />
            <h1>BuillterPC</h1>

            <div className="conta_container">
                <img src=""/>
            </div>
        </div>

        <div className="menu_container">

            <div className="menu_esquerdo_container">

                <div className='inicio_esquerdo'>
                    <h1>Conheça a BuiltterPC</h1>
                    <p>diversas funcionalidades disponiveis para facilitar suas experiências com hardware!</p>

                    <div className="btn_accountainer">
                        <button className="btn_create" onClick={CriarConta()}>Criar conta</button>
                        <button className="btn_enter" onClick={CriarConta()}>Fazer login</button>
                    </div>
                </div>

                <div className='after_esquerdo'>

                    <h2>Já está logado? Navegue por ai</h2>

                    <div className='navegacao_esquerdo'> 
                        <ul>

                            <li id='nav_sup'><a href='#Suporte'>Suporte</a></li>
                            <li id='nav_sim'><a href='#Simulacao'>Simulacao</a></li>
                            <li id='nav_pro'><a href='#Promocoes'>Promoções</a></li>
                            <li id='nav_for'><a href='#Forum'>Forum</a></li>

                        </ul>
                    </div>

                    <div className='display_container_esquerdo'>

                        

                    </div>

                </div>

            </div>

            <div className="menu_direito_container">

                <h1>Sobre</h1>
                <p className='desc_direito'>Sessoes disponiveis da BuiltterPC:</p>

                <div className="sobre_container">
                    {sessoesLista.map(item => <ItensSobre nome={item.nome} descricao={item.descricao} imagem={item.imagem}/>)}
                </div>
            </div>

        </div>
    </>
}