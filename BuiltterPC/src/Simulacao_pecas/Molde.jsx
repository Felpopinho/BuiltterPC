import { Typography, Box, Modal, Stepper, Step, StepButton, Button } from "@mui/material";
import { useState, Fragment } from "react";
import { DescMolde, ProdutosMolde } from "./CriarMolde";
import { modal } from "../object-styles";
import { processadoresObject, memoriasObject, pvideosObject, armazensObject, fontesObject, maeObject, templateImagens } from "../script";

export function Molde(props){

    const [moldeOpen, setMoldeOpen] = useState(false);

    const handleOpenModal = () =>{
        setMoldeOpen(true);
    }
    const handleCloseModal = () =>{
        setMoldeOpen(false)
    }

    const passoSessao = ['Placa-mãe', 'Processador', 'Memória', 'Armazenamento', 'Placa de vídeo', 'Fonte']
    const [passar, setPassar] = useState(0);
    const [completed, setCompleted] = useState({})
    const totalPasso = () =>{
        return passoSessao.length;
    }
    const ultimoPasso = () =>{
        return activeStep === totalPasso() - 1;
    }
    const todosPassosCompletos = () =>{
        return activeStep === totalPasso();
    }
    const acaoProxPasso = () =>{
        const novoPasso =
          ultimoPasso && !todosPassosCompletos ?
          passoSessao.findIndex((step, i) => !(i in completed)) :
          passar + 1;
        setAtivarPasso(novoPasso);
    }

    const [section, setSection] = useState(0);

    const produtosObject = [maeObject, processadoresObject, memoriasObject, armazensObject, pvideosObject, fontesObject];

    return <Box sx={{cursor: 'pointer'}} >

        <Box sx={{width: '230px', height: '230px', border: 'solid 2px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} onClick={handleOpenModal}> 
            <Typography id="sim_desc" variant="h4" fontWeight={600} textAlign={'center'}>{props.simulacao_nome}</Typography>
            <Typography textAlign={'center'}>{props.simulacao_status}</Typography>
        </Box>

        <Modal open={moldeOpen} onClose={handleCloseModal}>
            <Box sx={modal} className="moldeModal">

                <Stepper activeStep={passar}>
                  {passoSessao.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                    <StepButton>
                      {label}
                    </StepButton>
                  </Step>
                  ))}
                </Stepper>

                {section === 0 ? 
    
                <Fragment>
                    <Box className='selectSection'>
                        <Box className='section_container'>
                            <div>
                                <img src={templateImagens[3]} />
                            </div>
                            <Typography>Placa-mãe</Typography>
                        </Box>
                        <Box className='section_container'>
                            <div>
                                <img src={templateImagens[0]} />
                            </div>
                            <Typography>Processador</Typography>
                        </Box>
                        <Box className='section_container'>
                            <div>
                                <img src={templateImagens[4]} />
                            </div>
                            <Typography>Memória ram</Typography>
                        </Box>
                        <Box className='section_container'>
                            <div>
                                <img src={templateImagens[1]} />
                            </div>
                            <Typography>Armazenamento</Typography>
                        </Box>
                        <Box className='section_container'>
                            <div>
                                <img src={templateImagens[5]} />
                            </div>
                            <Typography>Placa de vídeo</Typography>
                        </Box>
                        <Box className='section_container'>
                            <div>
                                <img src={templateImagens[2]} />
                            </div>
                            <Typography>Fonte</Typography>
                        </Box>
                    </Box>
                </Fragment> :
    
                <Fragment>
                    {Array.from(produtosObject).slice(section, section+1).map(produto =>(<ProdutosMolde image1={produto.image1} image2={produto.image2} image3={produto.image3} image4={produto.image4} image5={produto.image5} image6={produto.image6} image7={produto.image7} image8={produto.image8}/>))}
                    <Box sx={{width:'45%', height:'100%', backgroundColor: '#292929', borderRadius: '20px'}}>
                        {Array.from(produtosObject).slice(section, section+1).map(desc => (<DescMolde nome1={desc.nome1}/>))}
                    </Box>
                </Fragment>
                }
                <Button variant="text" onClick={acaoProxPasso}>Voltar</Button>

                <Button variant="outlined" onClick={acaoProxPasso} disabled={passar === totalPasso() } id="proxPassoBtn">
                    {passar === totalPasso() - 1 ? 'Finalizar' : passar <= totalPasso() - 2 ? 'Proximo' : 'Finalizado'}
                </Button>   
            </Box>
            

        </Modal>

    </Box>

}