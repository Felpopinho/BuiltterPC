import { useState } from 'react';
import logo from './assets/imagens/Logo.png';
import { ItensSobre } from './itensSobre.jsx';
import { comentarioLista, sessoesLista } from './script.js';
import { CriarConta } from './Criar-logar.jsx';
import { NavEsquerdo, NavDisplay } from './Nav_Inicio.jsx'; 


export function Menu(){

    const previewSessao = ['suporteLista', 'simulacaoLista', 'promocaoLista', comentarioLista];
    const [sessaoSelecionada, refreshSection] = useState(0);

    return <>

        <div className="nav_container">
            <div className='logo_container'>
                <img src={logo} className='Logo'/>
                <div></div>
                <h1>BuillterPC</h1>
            </div>

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

                    <NavEsquerdo refreshSection={refreshSection}/>

                    <div className='display_container_esquerdo'>

                        {previewSessao[1].map(section => <NavDisplay nome={section.nome} descricao={section.descricao} imagem={section.imagem}/>)}

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