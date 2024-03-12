import { Fragment, useState } from "react";
import { Button, Modal, Box, Typography, Stepper, Step, StepButton} from "@mui/material";
import { PassoUm, PassoDois, PassoTres, arrPreview } from "./PassosCriarConta"; 
import { PreviewPerfil } from "./Preview-Perfil";

export function CriarLogarConta(){


  const [abrirCC, setAbrirCC] = useState(false)

  const abrirModalCC = () => setAbrirCC(true)
  const fecharModalCC = () => setAbrirCC(false)

  const [abrirLC, setAbrirLC] = useState(false)

  const abrirModalLC = () => setAbrirLC(true)
  const fecharModalLC = () => setAbrirLC(false)

  const passos = ['Criar perfil', 'Mais sobre você', 'Ultimos passos'];

  const [ativarPasso, setAtivarPasso] = useState(0)
  const [completed, setCompleted] = useState({})

  const totalPassos = () =>{
    return passos.length;
  }

  const ultimoPasso = () =>{
    return activeStep === totalPassos() - 1;
  }

  const todosPassosCompletos = () =>{
    return activeStep === totalPassos();
  }

  const acaoPasso = (step) => () =>{
    setAtivarPasso(step);
  }

  const acaoProxPasso = () =>{
    const novoPasso =
      ultimoPasso && !todosPassosCompletos ?
      passos.findIndex((step, i) => !(i in completed)) :
      ativarPasso + 1;
    setAtivarPasso(novoPasso);
  }

  const acaoAntePasso = () =>{
    const antePasso = ativarPasso - 1;
    setAtivarPasso(antePasso)
  }

  return <>
  
      <Button variant="contained" color="primary" className="btn_create" onClick={abrirModalCC} sx={{transition: 'all 0.2s ease'}}>Criar conta</Button>
      <Modal
        open={abrirCC}
        onClose={fecharModalCC}
        aria-labelledby="modal-criarconta"
      >
        <Box className="Modal" sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} >
            <Typography id="modal-modal-title" variant="h2" component="h1" fontWeight={600} width={'80%'}>
              Criar conta
            </Typography>
            <Stepper activeStep={ativarPasso}>
              {passos.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                <StepButton>
                  {label}
                </StepButton>
              </Step>
              ))}
            </Stepper>
            {ativarPasso === totalPassos() ? (
            <div className="passosFinalizados_container">
              <h1>Sua conta foi criada com sucesso</h1>
              <div className="previewPerfil_container">
                {arrPreview.map(inputs =>(<PreviewPerfil perfil={inputs.perfil} usuario={inputs.usuario} email={inputs.email} titulo={inputs.titulo} descricao={inputs.descricao}/>))}
              </div>
              <Button>
                <a href="">visitar perfil</a>
              </Button>
            </div> ) : ativarPasso === 0 ? (
            <Fragment>
              <PassoUm />
            </Fragment> ) : ativarPasso === 1 ? (
            <Fragment>
              <PassoDois />
            </Fragment>) : (
            <Fragment>
              <PassoTres />
            </Fragment> )}
            <div className="btn_passos_container">
              <Button variant="text" disabled={ativarPasso === 0 || ativarPasso === totalPassos()} onClick={acaoAntePasso}>Voltar</Button>

              <Button variant="outlined" onClick={acaoProxPasso} disabled={ativarPasso === totalPassos() } id="proxPassoBtn">
                    {ativarPasso === totalPassos() - 1 ? 'Finalizar' : ativarPasso <= totalPassos() - 2 ? 'Proximo' : 'Finalizado'}
              </Button>
            </div>
        </Box>
      </Modal>
      

      <Button variant="outlined" className="btn_enter" onClick={abrirModalLC} sx={{transition: 'all 0.2s ease'}}>Logar conta</Button>
      <Modal
        open={abrirLC}
        onClose={fecharModalLC}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} className="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

  </>

}