import { Divider, ThemeProvider, createTheme, Modal, Box, Typography, Button, Snackbar, IconButton } from '@mui/material'; 
import { Close } from '@mui/icons-material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

import './Menu/Style_menu.css';
import { Menu } from './Menu/Menu.jsx';

import './Suporte_tecnico/Style_suporte.css'
import { Suporte } from './Suporte_tecnico/Suporte.jsx'

import './Forum_dicas/Style_forum.css'
import { Forum } from './Forum_dicas/Forum.jsx';

import './Promocoes_pecas/Style_promocoes.css'
import { Promocoes } from './Promocoes_pecas/Promocoes.jsx';

import './Simulacao_pecas/Style_simulacao.css'
import { Simulacao } from './Simulacao_pecas/Simulacao.jsx';

import { Conta } from './Conta.jsx';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { port } from '../server.js';

export const baseURL = "https://builtterpc.vercel.app"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [users, setUsers] = useState([]);
  const [videos, setVideos] = useState([]);
  const [simulacoes, setSimulacoes] = useState([]);
  const [produto, setProdutos] = useState([]);
  const [promocoes, setPromocoes] = useState([]);
  const [comentarios, setComentarios] = useState([])


  const [logado, setLogado] = useState(false)
  const [onEdit, setOnEdit] = useState(null);

  const getData = async () =>{
    await axios.get(baseURL+"/user").then(res =>{
      setUsers(res.data)
    });
    await axios.get(baseURL+"/videos").then(res =>{
      setVideos(res.data)
    });
    await axios.get(baseURL+"/simulacoes").then(res =>{
      setSimulacoes(res.data)
    });
    await axios.get(baseURL+"/produtos").then(res =>{
      setProdutos(res.data)
    });
    await axios.get(baseURL+"/promocoes").then(res =>{
      setPromocoes(res.data)
    });
    await axios.get(baseURL+"/comentarios").then(res =>{
      setComentarios(res.data)
    });
  }

  useEffect(()=>{
    getData();
  }, [setUsers, setVideos, setSimulacoes, setProdutos, setPromocoes, setComentarios])

  const [openAviso, setOpenAviso] = useState(false)
  const handleCloseAviso = () =>{
      setOpenAviso(false)
  }

  const [openAlert, setOpenAlert] = useState(false)
  const [severityAlert, setSeverityAlert] = useState("")
  const [messageAlert, setMessageAlert] = useState("")

  const handleOpenAlert = (mensagem, severidade) =>{
    setMessageAlert(mensagem)
    if (severidade === 1){
      setSeverityAlert("#689f38")
    } else{
      setSeverityAlert("#ff5252")
    }
    setOpenAlert(true)
  }
  const handleCloseAlert = () =>{
    setOpenAlert(false)
  }

  const [modalConta, setModalConta] = useState(false)

  return <>
      <Menu abrirConta={setModalConta} users={users.length} logado={logado} setLogado={setLogado} handleOpenAlert={handleOpenAlert}/>
      <Divider sx={{margin: 3}}/>
      <Suporte logado={logado} setOpenAviso={setOpenAviso} videos={videos} getData={getData} handleOpenAlert={handleOpenAlert}/>
      <Divider sx={{margin: 3, marginBottom: 10}}/>
      <Simulacao logado={logado}/>
      <Divider sx={{margin: 3, marginTop: 10}}/>
      <Promocoes logado={logado}/>
      <Divider sx={{margin: 3}}/>
      <Forum logado={logado}/>
      {modalConta === true ? <Conta fecharModal={setModalConta} users={users} logado={logado} setLogado={setLogado} setOpenAviso={setOpenAviso} handleOpenAlert={handleOpenAlert}/> : console.log}

      <Modal open={openAviso} onClose={handleCloseAviso}>
        <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} className="modal">
            <Typography variant='h3' sx={{fontWeight: '600', width:'90%'}}>Aviso!</Typography>
            <Divider sx={{margin: 3, width:'90%'}}/>
            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly", alignItems: "center"}}>
                <p style={{fontSize: "1.5rem"}}>Crie uma conta para acessar esta sessão</p>
                <a href="#Menu" onClick={handleCloseAviso}>
                    <Button variant='outlined' sx={{fontSize: "1.2rem"}}>Criar conta</Button>
                </a>
            </div>
        </Box>
      </Modal>

      <ThemeProvider theme={darkTheme}>
        <Snackbar sx={{bgcolor: severityAlert, borderRadius: "10px"}} autoHideDuration={4000} open={openAlert} onClose={handleCloseAlert}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "7px 16px 7px 16px"}} className="alertContainer">
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              {severityAlert === "#689f38" ? <CheckCircleOutlineRoundedIcon fontSize='small' color='action'/> : <ErrorOutlineRoundedIcon fontSize='small' color='action'/>}
              <Typography sx={{paddingLeft: "10px"}} color={'white'}>{messageAlert}</Typography>
            </Box>
            <IconButton size='small'>
              <Close fontSize='small' onClick={handleCloseAlert}/>
            </IconButton>
          </Box>
        </Snackbar>
      </ThemeProvider>

  </>

};

export default App;
