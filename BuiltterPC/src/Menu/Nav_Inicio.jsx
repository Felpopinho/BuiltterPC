import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

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

    const [videoNome, setVideoNome] = useState("")

    return <>
        {props.comentarios === "" ? <CircularProgress sx={{position: "absolute", top: "20%"}}/> :
            <div className="display_esquerdo_content">
            {props.sessaoSelecionada === 0 ?
                <div id="suporteDisplay">
                    <div>
                        <h2 style={{textAlign: "left", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "95%"}}>{props.videos[0].video_nome}</h2>
                        <p className="suporteDescVid">{props.videos[0].video_descricao}</p>
                    </div>
                    <div className="vidImg">
                        <img src={props.videos[0].video_imagem}/>
                    </div>
                </div> :
            props.sessaoSelecionada === 1 ?
                <div id="simulacaoDisplay">
                    <div className="molde"><h3>{props.simulacoes[0].simulacao_nome}</h3><p>{props.simulacoes[0].simulacao_status}</p></div>
                    <div className="molde"><h3>{props.simulacoes[1].simulacao_nome}</h3><p>{props.simulacoes[1].simulacao_status}</p></div>
                    <div className="molde"><h3>{props.simulacoes[2].simulacao_nome}</h3><p>{props.simulacoes[2].simulacao_status}</p></div>
                    <div className="molde"><h3>{props.simulacoes[3].simulacao_nome}</h3><p>{props.simulacoes[3].simulacao_status}</p></div>
                    <div className="molde"><h3>{props.simulacoes[4].simulacao_nome}</h3><p>{props.simulacoes[4].simulacao_status}</p></div>
                    <div className="molde"><h3>{props.simulacoes[5].simulacao_nome}</h3><p>{props.simulacoes[5].simulacao_status}</p></div>
                    <div className="molde"><h3>{props.simulacoes[6].simulacao_nome}</h3><p>{props.simulacoes[6].simulacao_status}</p></div>
                    <div className="molde"><h3>{props.simulacoes[7].simulacao_nome}</h3><p>{props.simulacoes[7].simulacao_status}</p></div>
                </div> :
            props.sessaoSelecionada === 2 ?
                <div id="promoDisplay" style={{display: "grid", gridTemplateColumns: "30% 63%", width: "100%", columnGap: "20px", placeItems: "center"}}>
                    <div>
                        <img src={props.promocoes[0].promocao_imagem}/>
                    </div>
                    <div className="promoDescCont" style={{height: "80%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignSelf: "start"}}>
                        <p>{props.promocoes[0].promocao_nome}</p>
                        <p style={{textDecoration: "line-through", color: "gray"}}>{props.promocoes[0].promocao_preco}</p>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h2 style={{color: "red", textAlign: "left"}}>{props.promocoes[0].promocao_oferta}</h2>
                            <h3 style={{alignSelf: "center", color: "blue"}}>{props.promocoes[0].promocao_porcentagem}</h3>
                        </div>
                    </div>
                </div> :
    
                <div id="forumDisplay" style={{display: "grid", gridTemplateColumns: "70% 30%"}}>
                    <div style={{backgroundColor: "#292929", margin: "10px", padding: "10px", borderRadius: "10px", height: "90%", overflowY: "scroll"}}>
                        <p style={{color: "white"}}>{props.comentarios[0].forum_descricao}</p>
                    </div>
                    <div style={{justifySelf: "space-evenly", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h4>Por:</h4>
                        <img src={props.comentarios[0].forum_imagem}/>
                        <h2>{props.comentarios[0].forum_nome}</h2>
                    </div>
                </div>
            }
            </div>
        }
    </>
    

}