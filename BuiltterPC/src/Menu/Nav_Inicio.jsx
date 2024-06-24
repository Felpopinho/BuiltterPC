import { useState } from "react"

import { suporteLista, simulacaoLista, promocaoLista, comentarioLista } from '../script.js';

export function NavEsquerdo(props){

    return <div className='navegacao_esquerdo'> 
        <div>

            <input type='radio' name="input-nav" id='nav_sup' onClick={() => {props.refreshSection(0)}} defaultChecked/>
            <label htmlFor='nav_sup'>Suporte</label>
            
            <input type='radio' name="input-nav" id='nav_sim' onClick={() => {props.refreshSection(1);}}/>
            <label htmlFor='nav_sim'>Simulação</label>

            <input type='radio' name="input-nav" id='nav_pro' onClick={() => {props.refreshSection(2);}}/>
            <label htmlFor='nav_pro'>Promoções</label>

            <input type='radio' name="input-nav" id='nav_for' onClick={() => {props.refreshSection(3);}}/>
            <label htmlFor='nav_for'>Forum</label> 

        </div>
    </div>
        
}

export function NavDisplay(props){

    return <div className="display_esquerdo_content">

        {props.selectedSection === 0 ?
            <div id="suporteDisplay">
                <div>
                    <h2 style={{textAlign: "left", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "95%"}}>{suporteLista[0].video_nome}</h2>
                    <p className="suporteDescVid">{suporteLista[0].video_descricao}</p>
                </div>
                <div className="vidImg">
                    <img src={suporteLista[0].video_imagem}/>
                </div>
            </div> :
        props.selectedSection === 1 ?
            <div id="simulacaoDisplay">
                <div className="molde"><h3>{simulacaoLista[0].simulacao_nome}</h3><p>{simulacaoLista[0].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[1].simulacao_nome}</h3><p>{simulacaoLista[1].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[2].simulacao_nome}</h3><p>{simulacaoLista[2].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[3].simulacao_nome}</h3><p>{simulacaoLista[3].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[4].simulacao_nome}</h3><p>{simulacaoLista[4].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[5].simulacao_nome}</h3><p>{simulacaoLista[5].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[6].simulacao_nome}</h3><p>{simulacaoLista[6].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[7].simulacao_nome}</h3><p>{simulacaoLista[7].simulacao_status}</p></div>
            </div> :
        props.selectedSection === 2 ?
            <div id="promoDisplay" style={{display: "grid", gridTemplateColumns: "30% 63%", width: "100%", columnGap: "20px", placeItems: "center"}}>
                <div>
                    <img src={promocaoLista[0].promocao_imagem}/>
                </div>
                <div className="promoDescCont" style={{height: "80%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignSelf: "start"}}>
                    <p>{promocaoLista[0].promocao_nome}</p>
                    <p style={{textDecoration: "line-through", color: "gray"}}>{promocaoLista[0].promocao_preco}</p>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2 style={{color: "red", textAlign: "left"}}>{promocaoLista[0].promocao_oferta}</h2>
                        <h3 style={{alignSelf: "center", color: "blue"}}>{promocaoLista[0].promocao_porcentagem}</h3>
                    </div>
                </div>
            </div> :

            <div id="forumDisplay" style={{display: "grid", gridTemplateColumns: "70% 30%"}}>
                <div style={{backgroundColor: "#292929", margin: "10px", padding: "10px", borderRadius: "10px", height: "90%", overflowY: "scroll"}}>
                    <p style={{color: "white"}}>{comentarioLista[0].forum_descricao}</p>
                </div>
                <div style={{justifySelf: "space-evenly", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h4>Por:</h4>
                    <img src={comentarioLista[0].forum_imagem}/>
                    <h2>{comentarioLista[0].forum_nome}</h2>
                </div>
            </div>
        }
    
    </div>

}