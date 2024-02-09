import { useState } from 'react';
import logo from '../assets/imagens/Logo.png';
import { ItensSobre } from './itensSobre.jsx';
import { suporteLista, simulacaoLista, promocaoLista, comentarioLista, sessoesLista } from '../script.js';
import { CriarLogarConta } from './Criar-logar.jsx';
import { NavEsquerdo, NavDisplay } from './Nav_Inicio.jsx'; 
import { Button } from '@mui/material';
import { linkNav } from '../object-styles.js'; 

export function Menu(){

    const previewSessao = [suporteLista,simulacaoLista,promocaoLista,comentarioLista];
    const linkSessao = ['#Suporte', '#Simulacao', '#Promocao', '#Forum']
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
                        <CriarLogarConta />
                    </div>
                </div>

                <div className='after_esquerdo'>

                    <h2>Já está logado? Navegue por ai</h2>

                    <div className='nav_esquerdo_container'>
                        <NavEsquerdo refreshSection={refreshSection}/>

                        <div className='display_container_esquerdo'>

                            {previewSessao[sessaoSelecionada].slice(0, 1).map( sessao => 
                            <NavDisplay video_nome={sessao.video_nome} video_descricao={sessao.video_descricao} video_imagem={sessao.video_imagem} video_class1={sessao.video_class1} video_class2={sessao.video_class2}
                            simulacao_nome={sessao.simulacao_nome} simulacao_descricao={sessao.simulacao_descricao} simulacao_imagem={sessao.simulacao_imagem} simulacao_class1={sessao.simulacao_class1} simulacao_class2={sessao.simulacao_class2}
                            promocao_nome={sessao.promocao_nome} promocao_descricao={sessao.promocao_descricao} promocao_imagem={sessao.promocao_imagem} promocao_class1={sessao.promocao_class1} promocao_class2={sessao.promocao_class2}
                            forum_nome={sessao.forum_nome} forum_descricao={sessao.forum_descricao} forum_imagem={sessao.forum_imagem} forum_class1={sessao.forum_class1} forum_class2={sessao.forum_class2}
                            />)}

                            <div className='link_nav_container'>
                                <Button variant='contained' className="link_nav" sx={linkNav}>
                                    <a href={linkSessao[sessaoSelecionada]}>Selecionar sessão</a>
                                </Button>
                            </div>
                        </div>
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