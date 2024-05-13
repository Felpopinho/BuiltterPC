import { Fragment, useState } from "react"
import { suporteLista, simulacaoLista, promocaoLista, comentarioLista } from '../script.js';
import { Button, Box, Typography } from "@mui/material";

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

    const linkSessao = ['#Suporte', '#Simulacao', '#Promocao', '#Forum'];

    return <div className="display_esquerdo_content">
        
        {props.sessaoSelecionada === 0 ? (
        <Fragment>
            <div id="suporteDisplay" style={{display: "flex", alignItems: "start", justifyContent: "space-between", position: "absolute"}}>
                <img src={suporteLista[0].video_imagem} style={{width: "300px", borderRadius: "10px", alignSelf: "center", marginRight: "5px"}}/>
                <div style={{height: "14vh", display: "flex", flexDirection: "column", alignItems: "end"}}>
                    <p style={{fontWeight: "bold", fontSize: "1.2rem", textAlign: "end", marginTop: "5px", overflow: "hidden", height: "30%"}}>{suporteLista[0].video_nome}</p>
                    <p style={{fontWeight: "400", textAlign: "end", overflowY: "scroll"}}>{suporteLista[0].video_descricao}</p>
                </div>
            </div>
        </Fragment>
        ) : props.sessaoSelecionada === 1 ? (
        <Fragment>
            <div id="simulacaoDisplay" style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", height: "65%"}}>
                <Box sx={{width: '130px', height: '130px', border: 'solid 2px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}> 
                    <Typography id="sim_desc" variant="h5" fontWeight={600} textAlign={'center'}>{simulacaoLista[0].simulacao_nome}</Typography>
                    <Typography textAlign={'center'} variant="h6">{simulacaoLista[0].simulacao_status}</Typography>
                </Box>
                <Box sx={{width: '130px', height: '130px', border: 'solid 2px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}> 
                    <Typography id="sim_desc" variant="h5" fontWeight={600} textAlign={'center'}>{simulacaoLista[1].simulacao_nome}</Typography>
                    <Typography textAlign={'center'} variant="h6">{simulacaoLista[1].simulacao_status}</Typography>
                </Box>
                <Box sx={{width: '130px', height: '130px', border: 'solid 2px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}> 
                    <Typography id="sim_desc" variant="h5" fontWeight={600} textAlign={'center'}>{simulacaoLista[2].simulacao_nome}</Typography>
                    <Typography textAlign={'center'} variant="h6">{simulacaoLista[2].simulacao_status}</Typography>
                </Box>
                <Box sx={{width: '130px', height: '130px', border: 'solid 2px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}> 
                    <Typography id="sim_desc" variant="h5" fontWeight={600} textAlign={'center'}>{simulacaoLista[3].simulacao_nome}</Typography>
                    <Typography textAlign={'center'} variant="h6">{simulacaoLista[3].simulacao_status}</Typography>
                </Box>
            </div>
        </Fragment>
        ) : props.sessaoSelecionada === 2 ? (
        <Fragment>
            <div id="promoDisplay" style={{display: "flex", alignItems: "start", justifyContent: "space-between", position: "absolute"}}>
                <img src={promocaoLista[0].promocao_imagem} style={{width: "200px", borderRadius: "10px", alignSelf: "center", marginRight: "5px"}}/>
                <div style={{height: "13vh", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "end"}}>
                    <p style={{fontWeight: "500", textAlign: "start"}}>{promocaoLista[0].promocao_nome}</p>
                    <p style={{fontWeight: "bold", fontSize: "1.4rem", textAlign: "start", marginTop: "5px", height: "30%"}}>{promocaoLista[0].promocao_descricao}</p>
                </div>
            </div>
        </Fragment>
        ) : (
        <Fragment>
            <div id="forumDisplay" style={{display: "flex", alignItems: "center", justifyContent: "start", position: "absolute"}}>
                <p style={{fontWeight: "500", textAlign: "start", width: "55%", marginLeft: "10px", overflowY: "scroll", height: "18vh"}}>{comentarioLista[0].forum_descricao}</p>
                <div style={{height: "14vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "30%"}}>
                    <img src={comentarioLista[0].forum_imagem} style={{width: "80px", borderRadius: "10px", marginRight: "10px"}}/>
                    <p style={{fontWeight: "bold", fontSize: "1.4rem", textAlign: "start", marginTop: "5px", overflow: "hidden", height: "30%"}}>{comentarioLista[0].forum_nome}</p>
                </div>
            </div>
        </Fragment>
        )}   
        <div className="link_nav_container">
            <Button variant='contained' className="link_nav" sx={{transition: 'all 0.2s ease',padding: 0}}>
                <a href={linkSessao[props.sessaoSelecionada]}>Selecionar sessão</a>
            </Button>
        </div>
    
    </div>

}