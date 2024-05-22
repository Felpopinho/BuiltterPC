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
            <div id="suporteDisplay" style={{display: "grid", gridTemplateColumns: "40% 55%", gridTemplateRows: "auto", width: "100%", columnGap: "20px"}}>
                <div>
                    <img src={suporteLista[0].video_imagem} style={{width: "300px", placeSelf: "center"}}/>
                </div>
                <div style={{height: "70%", overflowY: "scroll"}}>
                    <h2 style={{textAlign: "left", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "95%"}}>{suporteLista[0].video_nome}</h2>
                    <p style={{textAlign: "left"}}>{suporteLista[0].video_descricao}</p>
                </div>
            </div> :
        props.selectedSection === 1 ?
            <div id="simulacaoDisplay" style={{display: "flex", justifyContent: "space-evenly", width: "100%", marginTop: "3vh"}}>
                <div className="molde"><h3>{simulacaoLista[0].simulacao_nome}</h3><p>{simulacaoLista[0].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[1].simulacao_nome}</h3><p>{simulacaoLista[1].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[2].simulacao_nome}</h3><p>{simulacaoLista[2].simulacao_status}</p></div>
                <div className="molde"><h3>{simulacaoLista[3].simulacao_nome}</h3><p>{simulacaoLista[3].simulacao_status}</p></div>
            </div> :
        props.selectedSection === 2 ?
            <div id="promoDisplay" style={{display: "grid", gridTemplateColumns: "30% 65%", width: "100%", columnGap: "20px", placeItems: "center"}}>
                <div>
                    <img src={promocaoLista[0].promocao_imagem} style={{width: "200px", }}/>
                </div>
                <div style={{height: "70%"}}>
                    <p>{promocaoLista[0].promocao_nome}</p>
                    <h2 style={{color: "red", textAlign: "left"}}>{promocaoLista[0].promocao_descricao}</h2>
                </div>
            </div> :

            <div id="forumDisplay" style={{display: "grid", gridTemplateColumns: "70% 30%"}}>
                <div style={{backgroundColor: "#292929", margin: "10px", padding: "10px", borderRadius: "10px"}}>
                    <p style={{color: "white"}}>{comentarioLista[0].forum_descricao}</p>
                </div>
                <div style={{justifySelf: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h3>Comentario de:</h3>
                    <img src={comentarioLista[0].forum_imagem}/>
                    <h2>{comentarioLista[0].forum_nome}</h2>
                </div>
            </div>
        }
    
    </div>

}