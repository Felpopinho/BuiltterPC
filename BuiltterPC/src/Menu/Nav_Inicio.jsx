import { Button } from "@mui/material";
import { Fragment } from "react";
import { suporteLista, simulacaoLista, promocaoLista, comentarioLista} from "../script.js"

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

    const linkSessao = ['#Suporte', '#Simulacao', '#Promocao', '#Forum']

    return <div className="display_esquerdo_content">
        {props.section === 1 ? (
        <Fragment>
            <div id="simulacaoDisplay">
                <div style={{display: "flex", width: "60%", justifyContent: 'space-evenly'}}>
                    <div style={{border: "2px solid", borderRadius: "10px", width: "150px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                        <h2>{simulacaoLista[0].simulacao_nome}</h2>
                        <p>{simulacaoLista[0].simulacao_status}</p>
                    </div>
                    <div style={{border: "2px solid", borderRadius: "10px", width: "150px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                        <h2>{simulacaoLista[1].simulacao_nome}</h2>
                        <p>{simulacaoLista[1].simulacao_status}</p>
                    </div>
                </div>
                <h2 style={{alignSelf: "start", marginTop: "15px"}}>Principais moldes</h2>
            </div>
        </Fragment>
        ) : props.section === 2 ? (
        <Fragment>
            <div  id="promoDisplay" style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between"}}>
                <section style={{width: "35%", display: "flex"}}>
                    <img src={promocaoLista[0].promocao_imagem} style={{width: "200px"}}/>
                </section>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", height: "100%", marginTop: "10px"}}>
                    <h3>{promocaoLista[0].promocao_nome}</h3>
                    <h2 style={{marginTop: "10px"}}>{promocaoLista[0].promocao_descricao}</h2>
                </div>
            </div>
        </Fragment>
        ) : props.section === 3 ? (
        <Fragment>
            <div  id="forumDisplay">
                
            </div>
        </Fragment>
        ) : (
        <Fragment>
            <div  id="suporteDisplay">
                <img src={suporteLista[0].video_imagem}/>
                <div>
                    <h3>{suporteLista[0].video_nome}</h3>
                    <p>{suporteLista[0].video_descricao}</p>
                </div>
            </div>
        </Fragment>
        )}
        
        <div className='link_nav_container'>
            <Button variant='contained' className="link_nav" sx={{transition: 'all 0.2s ease',padding: 0}}>
                <a href={linkSessao[props.section]}>Selecionar sessão</a>
            </Button>
        </div>
    
    </div>

}