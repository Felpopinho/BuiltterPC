import { useState } from 'react';
import logo from '../assets/imagens/Logo.png';
import { ItensSobre } from './itensSobre.jsx';
import { sessoesLista } from '../script.js';
import { CriarLogarConta } from './Criar-logar.jsx';
import { NavEsquerdo, NavDisplay } from './Nav_Inicio.jsx'; 
import { Button, Divider } from '@mui/material';

export function Menu(props){

    const [sessaoSelecionada, refreshSection] = useState(0);
    let objetoSessao = {
        section: sessaoSelecionada,
    }

    return <>

        <div className="nav_container" id='Menu'>
            <div className='logo_container'>
                <img src={logo} className='Logo'/>
                <div></div>
                <h1>BuillterPC</h1>
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
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <h2>Já está logado? Navegue por ai</h2>
                        <div style={{backgroundColor: "#292929", padding: "3px", borderRadius: "5px"}}>
                            <p style={{color: "white", fontWeight: "600"}}>novos</p>
                        </div>
                    </div>

                    <div className='nav_esquerdo_container'>
                        <NavEsquerdo refreshSection={refreshSection}/>
                        <Divider variant='middle' sx={{marginTop: 1, marginBottom: 1}}/>
                        <div className='display_container_esquerdo'>
                            <NavDisplay sessaoSelecionada={objetoSessao.section}/>
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