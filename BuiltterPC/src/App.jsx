import { Divider, ThemeProvider, createTheme, Modal, Box, Typography, Button, Snackbar, IconButton } from '@mui/material'; 
import { Close } from '@mui/icons-material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

import './style_global.css';

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

import { Conta } from './Menu/Conta.jsx';
import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
import { previewUser } from './script.js';

//export const baseURL = "http://localhost:3000"
export const baseURL = "https://builtterpc.vercel.app"

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [users, setUsers] = useState("");
  const [amigos, setAmigos] = useState("")
  const [videos, setVideos] = useState("");
  const [simulacoes, setSimulacoes] = useState("");
  const [produtos, setProdutos] = useState("");
  const [promocoes, setPromocoes] = useState("");
  const [comentarios, setComentarios] = useState("");

  const [valueFiltro, setValueFiltro]= useState("id")

  const [logado, setLogado] = useState(false)

  const getData = useCallback(async () =>{
    await axios.get(baseURL+"/user").then(res =>{
      setUsers(res.data)
    });
    await axios.get(baseURL+"/amigos").then(res =>{
      setAmigos(res.data)
    });
    await axios.get(baseURL+"/videos").then(res =>{
      setVideos(res.data)
    });
    await axios.get(baseURL+"/simulacoes").then(res =>{
      const sim = res.data
      sim.push({
        userId: previewUser.idUser,
        mae: "criacao"
      })
      setSimulacoes(sim)
    });
    await axios.get(baseURL+"/produtos").then(res =>{
      setProdutos(res.data)
    });
    await axios.get(baseURL+"/promocoes").then(res =>{
      setPromocoes(res.data)
    });
    await axios.post(baseURL+"/comentarios",{
      filtro: valueFiltro
    }).then(res =>{
      setComentarios(res.data)
    });
  }, [logado, valueFiltro])

  useEffect(()=>{
    getData();
  },[logado, valueFiltro])

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
      <Menu  setModalConta={setModalConta} users={users.length} logado={logado} setLogado={setLogado} handleOpenAlert={handleOpenAlert} setOpenAviso={setOpenAviso} 
      videos={videos} simulacoes={simulacoes} promocoes={promocoes} comentarios={comentarios} getData={getData}/>
      <Divider sx={{margin: 3}}/>

      <Suporte logado={logado} setOpenAviso={setOpenAviso} videos={videos} getData={getData} handleOpenAlert={handleOpenAlert}/>
      <Divider sx={{margin: 3, marginBottom: 10}}/>

      <Simulacao logado={logado} produtos={produtos} simulacoes={simulacoes} getData={getData} handleOpenAlert={handleOpenAlert} setOpenAviso={setOpenAviso}/>
      <Divider sx={{margin: 3, marginTop: 10}}/>

      <Promocoes logado={logado} promocoes={promocoes}/>
      <Divider sx={{margin: 3}}/>

      <Forum getData={getData} logado={logado} setOpenAviso={setOpenAviso} handleOpenAlert={handleOpenAlert} users={users} comentarios={comentarios} amigos={amigos} setValueFiltro={setValueFiltro} valueFiltro={valueFiltro}/>

      <Modal  open={modalConta} onClose={() => {setModalConta(false)}}>
        <Conta videos={videos} setModalConta={setModalConta} users={users} logado={logado} setLogado={setLogado} setOpenAviso={setOpenAviso} handleOpenAlert={handleOpenAlert}/>
      </Modal>

      <Modal open={openAviso} onClose={handleCloseAviso}>
        <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4,borderRadius: '20px'}} className="modal">
            <Typography variant='h3' sx={{fontWeight: '600', width:'90%'}}>Aviso!</Typography>
            <Divider sx={{margin: 3, width:'90%'}}/>
            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly", alignItems: "center"}} className='aviso'>
                <p style={{fontSize: "1.5rem"}}>Crie uma conta para acessar esta sessão</p>
                <a href="#Menu" onClick={handleCloseAviso} className='btnCriar'>
                    <Button variant='outlined' sx={{fontSize: "1.2rem", width: "100%"}}>Criar conta</Button>
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
            <IconButton size='small' onClick={handleCloseAlert}>
              <Close fontSize='small'/>
            </IconButton>
          </Box>
        </Snackbar>
      </ThemeProvider>

  </>

};

export default App;
