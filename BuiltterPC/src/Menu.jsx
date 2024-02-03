import { useState } from 'react';
import { ItensSobre } from './itensSobre.jsx';
import { sessoesLista } from './script.js';

export function Menu(){

    return <>

        <div className="nav_container">
            <h1>BuillterPC</h1>

            <div className="conta_container">
                <img src=""/>
            </div>
        </div>

        <div className="menu_container">

            <div className="menu_esquerdo_container">

                <h1>Conheça a BuiltterPC</h1>
                <p>diversas funcionalidades disponiveis para facilitar suas experiências com hardware!</p>

                <div className="btn_accountainer">
                    <button className="btn_create">Criar conta</button>
                    <button className="btn_enter">Fazer login</button>
                </div>

            </div>

            <div className="menu_direito_container">

                <h1>Sobre</h1>
                <p>Sessoes disponiveis da BuiltterPC:</p>

                {sessoesLista.map(item => <ItensSobre nome={item.nome} descricao={item.descricao} imagem={item.imagem}/>)}

            </div>

        </div>
    </>
}