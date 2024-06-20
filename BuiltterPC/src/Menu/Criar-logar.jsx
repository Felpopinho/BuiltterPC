import { Fragment, useState, useRef } from "react";
import { Button, Modal, Box, Typography, Stepper, Step, StepButton, Input, TextField} from "@mui/material";
import { PassoUm, PassoDois, PassoTres, arrPreview } from "./PassosCriarConta"; 
import { PreviewPerfil } from "./Preview-Perfil";
import { previewUser } from "../script";
import axios from "axios";
import { baseURL } from "../App";
import { Close } from "@mui/icons-material";

export function CriarLogarConta(props){

  const ref = useRef()

  const [abrirCC, setAbrirCC] = useState(false)

  const abrirModalCC = () => {
    setAtivarPasso(0)
    setAbrirCC(true)
  }
  const fecharModalCC = (condicao) => {
    if (condicao === 2){
      previewUser.idUser = "";
      previewUser.usuario = "";
      previewUser.email = "";
      previewUser.senha = "";
      previewUser.perfil = "";
      previewUser.titulo = "";
      previewUser.descricao = "";
    }
    setAbrirCC(false)
  }

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
      const res = await axios.post(baseURL+"/src", {
        nome: previewUser.usuario,
        email: previewUser.email,
        senha: previewUser.senha,
        perfil: previewUser.perfil,
        titulo: previewUser.titulo,
        descricao: previewUser.descricao
      })
      previewUser.idUser = res.data.insertId
      props.setLogado(true)
    } catch(error){
      console.log(error)
    }
    fecharModalCC(1)
  };

  const logarConta = async (e) => {
    e.preventDefault()

    const user = ref.current;
    
    try{

      const res = await axios.post(baseURL+"/log",{
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
      props.setLogado(true)
    } catch(error){
      console.log(error)
    }
    fecharModalLC(1)
  };

  return <>

      <Button variant="contained" color="primary" className="btn_create" onClick={abrirModalCC} sx={{transition: 'all 0.2s ease'}} disabled={props.logado === true}>Criar conta</Button>
      <Modal
        open={abrirCC}
        aria-labelledby="modal-criarconta"
      >
          <Box className="Modal" sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} >
            <Button sx={{position: "absolute", top: "4%", left: "90%"}} onClick={() => {fecharModalCC(2)}}>
              <Close/>
            </Button>
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


        <Button variant="outlined" className="btn_enter" onClick={abrirModalLC} sx={{transition: 'all 0.2s ease'}} disabled={props.logado === true}>Logar conta</Button>
        <Modal
          open={abrirLC}
          onClose={fecharModalLC}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Modal" sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} >
            <Button sx={{position: "absolute", top: "4%", left: "90%"}} onClick={() => {fecharModalLC()}}>
              <Close />
            </Button>
              <Typography variant="h2" component="h1" fontWeight={600} width={'80%'}>
                Logar conta
              </Typography>
              <form className="criarConta_container" onSubmit={logarConta} ref={ref}>
                <div className="inputCriarConta">  
                  <TextField id="UserEmail" label={"digite seu email"} required variant="filled" type="email" sx={{width: '100%', fontSize: "1.5rem"}} name="email"></TextField>
                </div>
                <div className="inputCriarConta">
                  <TextField id="UserPassword" variant="filled" label={"digite sua senha"} required type="password" sx={{width: '100%', fontSize: "1.5rem"}} name="senha"></TextField>
                </div>
                <Button type="submit" variant="contained">
                  Logar
                </Button>
              </form>
          </Box>
        </Modal>
  </>

}