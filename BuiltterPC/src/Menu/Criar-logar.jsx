import { Fragment, useState, useRef } from "react";
import { Button, Modal, Box, Typography, Stepper, Step, StepButton, Input, TextField} from "@mui/material";
import { PassoUm, PassoDois, PassoTres, arrPreview } from "./PassosCriarConta"; 
import { PreviewPerfil } from "./Preview-Perfil";
import { previewUser } from "../script";
import axios from "axios";

export function CriarLogarConta(props){

  const ref = useRef()

  const [abrirCC, setAbrirCC] = useState(false)

  const abrirModalCC = () => {
    setAtivarPasso(0)
    setAbrirCC(true)
  }
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
    setIprenchido(false);
  }

  const acaoAntePasso = () =>{
    const antePasso = ativarPasso - 1;
    setAtivarPasso(antePasso)
    setIprenchido(false);
  }

  const [inputPrenchido, setIprenchido] = useState(false);
  const updateInput = (set) =>{
    setIprenchido(set);
  }

  const submitUser = async () => {
    try{
      const res = await axios.post("http://localhost:3000/src", {
        nome: previewUser.usuario,
        email: previewUser.email,
        senha: previewUser.senha,
        perfil: previewUser.perfil,
        titulo: previewUser.titulo,
        descricao: previewUser.descricao
      })
      console.log(res.data)
      previewUser.idUser = res.data.insertId
    } catch(error){
      console.log(error)
    }
    props.getUsers();
    fecharModalCC()
  };

  const logarConta = async (e) => {
    e.preventDefault()

    const user = ref.current;

    try{

      const res = await axios.post("http://localhost:3000/log",{
        email: user.email.value,
        senha: user.senha.value
      })
      previewUser.idUser = res.data[0].id;
      previewUser.usuario = res.data[0].nome;
      previewUser.email = res.data[0].email;
      previewUser.senha = res.data[0].senha;
      previewUser.perfil = res.data[0].perfil;
      previewUser.titulo = res.data[0].titulo;
      previewUser.descricao = res.data[0].descricao;
    } catch(error){
      console.log(error)
    }
    fecharModalLC()
  };

  return <>

      <Button variant="contained" color="primary" className="btn_create" onClick={abrirModalCC} sx={{transition: 'all 0.2s ease'}} disabled={previewUser.descricao != "" && previewUser.senha != ""}>Criar conta</Button>
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
              <Button onClick={() => {props.abrirConta(true)}}>
                Visitar perfil
              </Button>
            </div> ) : ativarPasso === 0 ? (
            <Fragment>
              <PassoUm inputPrenchido={updateInput}/>
            </Fragment> ) : ativarPasso === 1 ? (
            <Fragment>
              <PassoDois formPrenchido={updateInput}/>
            </Fragment>) : (
            <Fragment>
              <PassoTres termosPrenchido={updateInput}/>
            </Fragment> )}
            <div className="btn_passos_container">
              <Button variant="text" disabled={ativarPasso === 0 || ativarPasso === totalPassos()} onClick={acaoAntePasso}>Voltar</Button>
              {ativarPasso === totalPassos()?
                <Button variant="outlined" onClick={submitUser} id="proxPassoBtn">
                  Finalizar
                </Button> :
                <Button variant="outlined" onClick={acaoProxPasso} disabled={ativarPasso === totalPassos() || inputPrenchido === false } id="proxPassoBtn">
                  Proximo
                </Button> 
              }
            </div>
          </Box>
        </Modal>


        <Button variant="outlined" className="btn_enter" onClick={abrirModalLC} sx={{transition: 'all 0.2s ease'}} disabled={previewUser.descricao != "" && previewUser.senha != ""}>Logar conta</Button>
        <Modal
          open={abrirLC}
          onClose={fecharModalLC}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Modal" sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} >
              <Typography variant="h2" component="h1" fontWeight={600} width={'80%'}>
                Logar conta
              </Typography>
              <form className="criarConta_container" onSubmit={logarConta} ref={ref}>
                <div className="inputCriarConta">  
                  <TextField id="UserEmail" label={"digite seu email"} required variant="standard" type="email" sx={{width: '100%'}} name="email"></TextField>
                </div>
                <div className="inputCriarConta">
                  <TextField id="UserPassword" variant="standard" label={"digite sua senha"} required type="password" sx={{width: '100%'}} name="senha"></TextField>
                </div>
                <Button type="submit">
                  Logar
                </Button>
              </form>
          </Box>
        </Modal>
  </>

}