import { Typography, Box, Modal, Stepper, Step, StepButton, Button } from "@mui/material";
import { useState, Fragment } from "react";
import { ProdutosMolde } from "./CriarMolde";
import { modal } from "../object-styles";
import { processadoresObject, memoriasObject, pvideosObject, armazensObject, fontesObject, maeObject, templateImagens, iconSection } from "../script";

export function Molde(props){

    const [moldeOpen, setMoldeOpen] = useState(false);

    const handleOpenModal = () =>{
        setMoldeOpen(true);
    }
    const handleCloseModal = () =>{
        setMoldeOpen(false)
    }

    let [section, setSection] = useState(0);

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
        setSection(section+1)
    }
    const acaoAntePasso = () =>{
        const antePasso = passar - 1;
        setPassar(antePasso)
        setSection(section-1)
    }
    const handleStep = (step) => () => {
        setPassar(step);
        setSection(step+1);
    };    
    const handleComplete = () =>{
        const newCompleted = completed;
        newCompleted[passar] = true;
        setCompleted(newCompleted);
        acaoProxPasso();
    }
    const handleSection = (n) =>{
        setSection(n)
        setPassar(n-1)
    }

    const produtosObject = ['', maeObject, processadoresObject, memoriasObject, armazensObject, pvideosObject, fontesObject];

    return <Box sx={{cursor: 'pointer'}} >

        <Box sx={{width: '230px', height: '230px', border: 'solid 2px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} onClick={handleOpenModal}> 
            <Typography id="sim_desc" variant="h4" fontWeight={600} textAlign={'center'}>{props.simulacao_nome}</Typography>
            <Typography textAlign={'center'}>{props.simulacao_status}</Typography>
        </Box>

        <Modal open={moldeOpen} onClose={handleCloseModal}>
            <Box sx={modal} className="moldeModal">

                <Stepper nonLinear activeStep={passar} sx={{display: 'flex', alignItems: 'center', margin: '0 0 50px 0'}}>
                    {passoSessao.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
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
                            <Typography>Placa-mãe</Typography>
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(2)}}>
                            <section>
                                <img src={templateImagens[0]} />
                                <div></div>
                            </section>
                            <Typography>Processador</Typography>
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(3)}}>
                            <section>
                                <img src={templateImagens[4]} />
                                <div></div>
                            </section>
                            <Typography>Memória ram</Typography>
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(4)}}>
                            <section>
                                <img src={templateImagens[1]} />
                                <div></div>
                            </section>
                            <Typography>Armazenamento</Typography>
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(5)}}>
                            <section>
                                <img src={templateImagens[5]} />
                                <div></div>
                            </section>
                            <Typography>Placa de vídeo</Typography>
                        </Box>
                        <Box className='section_container' onClick={() => {handleSection(6)}}>
                            <section>
                                <img src={templateImagens[2]} />
                                <div></div>
                            </section>
                            <Typography>Fonte</Typography>
                        </Box>
                    </Box>
                </Fragment> :
    
                <Fragment>
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        {Array.from(produtosObject).slice(section, section+1).map(produto =>(<ProdutosMolde image1={produto.image1} image2={produto.image2} image3={produto.image3} image4={produto.image4} image5={produto.image5} image6={produto.image6} image7={produto.image7} image8={produto.image8}/>))}
                    </Box>
                </Fragment>
                }
                <Box sx={{width: '50%', margin: '50px 0 10px 0', display: 'flex', justifyContent: 'space-between'}}>
                    <Button variant="text" disabled={passar === -1} onClick={acaoAntePasso}>Voltar</Button>

                    <Button variant="contained" disabled={passar === -1} onClick={handleComplete}>Completar</Button>

                    <Button variant="outlined" onClick={acaoProxPasso} disabled={passar === totalPasso() } id="proxPassoBtn">
                        {passar === totalPasso() - 1 ? 'Finalizar' : passar <= totalPasso() - 2 ? 'Proximo' : 'Finalizado'}
                    </Button>
                </Box>
            </Box>
            

        </Modal>

    </Box>

}