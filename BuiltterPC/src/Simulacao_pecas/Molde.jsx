import { Typography, Box, Modal, Stepper, Step, StepButton, Button, Divider, IconButton } from "@mui/material";
import { useState, Fragment } from "react";
import { ProdutosMolde } from "./CriarMolde";
import { templateImagens, iconSection, simulacaoLista } from "../script";
import { MoldeResult } from "./MoldeResult";
import { Close } from "@mui/icons-material";
import axios from "axios";
import { baseURL } from "../App.jsx"

export function Molde(props){

    const prod = props.produtos

    const [moldeOpen, setMoldeOpen] = useState(false);
    const [resultOpen, setResultOpen] = useState(false);

    const handleOpenModal = () =>{
        setMoldeOpen(true);
    }
    const handleOpenResult = () =>{
        setResultOpen(true);
    }
    const handleCloseModal = () =>{
        setMoldeOpen(false)
    }
    const handleCloseResult = () =>{
        setResultOpen(false)
    }

    const [section, setSection] = useState(0);

    const passoSessao = [iconSection.mae, iconSection.processador, iconSection.memoria, iconSection.armazem, iconSection.pvideo, iconSection.fonte];
    const [passar, setPassar] = useState(-1);
    const [completed, setCompleted] = useState({})
    const totalPasso = () =>{
        return passoSessao.length;
    }
    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    const ultimoPasso = () =>{
        return activeStep === totalPasso() - 1;
    }
    const todosPassosCompletos = () =>{
        return completedSteps() === totalPasso();
    }
    const acaoProxPasso = (n) =>{
        const novoPasso =
            ultimoPasso && !todosPassosCompletos ?
            passoSessao.findIndex((step, i) => !(i in completed)) :
            passar + 1;
        setPassar(novoPasso);
        setSection(section+1);
        setPselected('');
    }
    const acaoAntePasso = () =>{
        const antePasso = passar - 1;
        setPassar(antePasso);
        setSection(section-1);
        setPselected('');
    }
    const handleStep = (step) => () => {
        setPassar(step);
        setSection(step+1);
        setPselected('');
    };    
    const handleComplete = () =>{
        const newCompleted = completed;
        newCompleted[passar] = true;
        setCompleted(newCompleted);
        setPselected('');
        passar === totalPasso()-1 && todosPassosCompletos() === false ?
        acaoAntePasso() :
        acaoProxPasso();
    }
    const handleSection = (n) =>{
        setSection(n)
        setPassar(n-1)
    }

    const [productS, setPselected] = useState('')

    const updateSelected = (s) =>{
        setPselected(s)
    }

    const [idNome, setIdNome] = useState("")
    const [idMae, setIdMae] = useState([]);
    const [idPro, setIdPro] = useState([]);
    const [idMem, setIdMem] = useState([]);
    const [idArm, setIdArm] = useState([]);
    const [idVid, setIdVid] = useState([]);
    const [idFon, setIdFon] = useState([]);
    
    const finalizarModal = async () =>{
        try {
            const res = axios.post(baseURL+"/simulacoes", {
                simulacao_nome: idNome,
                simulacao_status: "Completo",
                simulacao_mae: idMae[1],
                simulacao_pro: idPro[1],
                simulacao_mem: idMem[1],
                simulacao_arm: idArm[1],
                simulacao_vid: idVid[1],
                simulacao_fon: idFon[1],
            })
        } catch (error) {
            console.log(error)
        }


        setMoldeOpen(false);
        setStatus("Completo");
    }


    return <Box>

        <Box className="boxCont" sx={{cursor: 'pointer', border: 'solid 3px', display: 'flex', justifyContent: 'center', 
        alignItems: 'center', flexDirection: 'column', backgroundColor: 'var(--fundo)'}} 
        onClick={props.simulacao_status === 'vazio' ? handleOpenModal : handleOpenResult}> 
            <h1 className="sim_desc" fontWeight={600} style={{textalign:'center'}}>{props.simulacao_nome}</h1>
            <Typography sx={{textalign:'center'}}>{props.simulacao_status}</Typography>
        </Box>

        <Modal open={moldeOpen}>
            <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24}} className="moldeModal">
                <IconButton sx={{position: "absolute"}} className="closemodal" color="primary" onClick={handleCloseModal}>
                    <Close/>
                </IconButton>

                <Stepper nonLinear activeStep={passar} className="stepper">
                    {passoSessao.map((label, index) => (
                    <Step key={label} completed={completed[index]} className="step" sx={{padding: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <StepButton onClick={handleStep(index)} disabled={false} className="stepbutton" sx={{margin: '0 2px 0 2px'}}>
                            <img src={label} className="icons_section"/>
                        </StepButton>
                    </Step>
                    ))}
                </Stepper>

                {section === 0 ? 
    
                <Fragment>
                    <Box className='selectSection'>
                        <Box className='section_container' onClick={() => {handleSection(1)}}>
                            <section>
                                <img src={templateImagens[3]} />
                                <div></div>
                            </section>
                            <div className="icones">
                                <img src={passoSessao[0]} />
                                <p>Placa-mãe</p>
                            </div>
                            {completed[0] === true ? <div className="Completed"/> : <div/>}
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(2)}}>
                            <section>
                                <img src={templateImagens[0]} />
                                <div></div>
                            </section>
                            <div className="icones">
                                <img src={passoSessao[1]} />
                                <p >Processador</p>
                            </div>
                            {completed[1] === true ? <div className="Completed"/> : <div/>}
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(3)}}>
                            <section>
                                <img src={templateImagens[4]} />
                                <div></div>
                            </section>
                            <div className="icones">
                                <img src={passoSessao[2]} />
                                <p>Memória</p>
                            </div>
                            {completed[2] === true ? <div className="Completed"/> : <div/>}
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(4)}}>
                            <section>
                                <img src={templateImagens[1]} />
                                <div></div>
                            </section>
                            <div className="icones">
                                <img src={passoSessao[3]} />
                                <p>Armazenamento</p>
                            </div>
                            {completed[3] === true ? <div className="Completed"/> : <div/>}
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(5)}}>
                            <section>
                                <img src={templateImagens[5]} />
                                <div></div>
                            </section>
                            <div className="icones">
                                <img src={passoSessao[4]}/>
                                <p>Placa de Vídeo</p>
                            </div>
                            {completed[4] === true ? <div className="Completed"/> : <div/>}
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(6)}}>
                            <section>
                                <img src={templateImagens[2]} />
                                <div></div>
                            </section>
                            <div className="icones">
                                <img src={passoSessao[5]} />
                                <p>Fonte</p>
                            </div>
                            {completed[5] === true ? <div className="Completed"/> : <div/>}
                        </Box>
                    </Box>
                </Fragment> : section === 7 ? 
                <Fragment>
                    <MoldeResult sessao={section} mae={idMae} processador={idPro} memoria={idMem} armazem={idArm} fonte={idFon} pvideo={idVid} setIdNome={setIdNome} idNome={idNome}/>
                </Fragment> :
                <Fragment>
                    <Box className="contProd">
                        {prod.slice(section-1, section).map(produto => (
                            <ProdutosMolde sessao={section} productSelected={updateSelected} updatePselected={productS} key={produto[0].id}
                            image1={produto[0].imagem_produto} image2={produto[1].imagem_produto} image3={produto[2].imagem_produto} image4={produto[3].imagem_produto} image5={produto[4].imagem_produto} image6={produto[5].imagem_produto} image7={produto[6].imagem_produto} image8={produto[7].imagem_produto} 
                            nome1={produto[0].nome_produto} nome2={produto[1].nome_produto} nome3={produto[2].nome_produto} nome4={produto[3].nome_produto} nome5={produto[4].nome_produto} nome6={produto[5].nome_produto} nome7={produto[6].nome_produto} nome8={produto[7].nome_produto}
                            preco1={produto[0].preco_produto} preco2={produto[1].preco_produto} preco3={produto[2].preco_produto} preco4={produto[3].preco_produto} preco5={produto[4].preco_produto} preco6={produto[5].preco_produto} preco7={produto[6].preco_produto} preco8={produto[7].preco_produto} 
                            
                            mae={setIdMae} processador={setIdPro} memoria={setIdMem} armazem={setIdArm} fonte={setIdFon} pvideo={setIdVid} prod={prod}
                            />
                        ))}
                    </Box>
                </Fragment>
                }
                <Box className="containerBtn" >
                    <Button variant="text" disabled={passar === -1} onClick={acaoAntePasso}>Voltar</Button>

                    <Button variant="contained" disabled={(passar === -1) || (passar === totalPasso()) || (completed[passar] === true) || (productS === '')} onClick={handleComplete}>Completar</Button>

                    {passar <= totalPasso() - 1 ? 
                    <Button variant="outlined" onClick={acaoProxPasso} disabled={(passar === totalPasso() - 1 && todosPassosCompletos() === false)} id="proxPassoBtn">
                        Proximo
                    </Button> :
                    <Button variant="outlined" onClick={finalizarModal}>
                        Finalizar
                    </Button>
                    }  
                </Box>
            </Box>
            

        </Modal>
        <Modal open={resultOpen} onClose={handleCloseResult}>
            <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}}>
                <MoldeResult sessao={section} mae={idMae} processador={idPro} memoria={idMem} armazem={idArm} fonte={idFon} pvideo={idVid}/>
            </Box>
        </Modal>

    </Box>

}