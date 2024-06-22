import { Divider, ThemeProvider, createTheme, Modal, Box, Typography, Button, Snackbar, IconButton, Alert } from '@mui/material'; 

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
import { useEffect, useState, Fragment } from 'react';

import axios from 'axios';
import { Close } from '@mui/icons-material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const baseURL = "http://localhost:3000"

function App() {

  const [users, setUsers] = useState([]);
  const [logado, setLogado] = useState(false)
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () =>{
    try {
      const res = await axios.get(baseURL+"/src");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    };
  }

  useEffect(() =>{
    getUsers();
  }, [setUsers]);

  const [openAviso, setOpenAviso] = useState(false)
  const handleCloseAviso = () =>{
      setOpenAviso(false)
  }

  const [messageLogOff, setMessageLogOff] = useState('')
  const [openLogOff, setOpenLogOff] = useState(false);
  const handleOpenLogOff = (m) =>{
    setMessageLogOff(m)
    setOpenLogOff(true)
  }
  const handleCloseLogOff = () =>{
    setOpenLogOff(false)
  }

  const [messageLogin, setMessageLogin] = useState('')
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = (m) =>{
    setMessageLogin(m)
    setOpenLogin(true)
  }
  const handleCloseLogin = () =>{
    setOpenLogin(false)
  }

  const action = (
    <Fragment>
      <IconButton color="secondary" size="small" onClick={handleCloseLogOff}>
        <Close/>
      </IconButton>
    </Fragment>
  );
  const actionLogin = (
    <Fragment>
      <IconButton color="secondary" size="small" onClick={handleCloseLogin}>
        <Close/>
      </IconButton>
    </Fragment>
  );


  const [modalConta, setModalConta] = useState(false)

  return <>
      <Menu abrirConta={setModalConta} users={users.length} logado={logado} setLogado={setLogado} openLogin={handleOpenLogin}/>
      <Divider sx={{margin: 3}}/>
      <Suporte logado={logado} setOpenAviso={setOpenAviso}/>
      <Divider sx={{margin: 3, marginBottom: 10}}/>
      <Simulacao logado={logado}/>
      <Divider sx={{margin: 3, marginTop: 10}}/>
      <Promocoes logado={logado}/>
      <Divider sx={{margin: 3}}/>
      <Forum logado={logado}/>
      {modalConta === true ? <Conta fecharModal={setModalConta} users={users} logado={logado} setLogado={setLogado} setOpenAviso={setOpenAviso} openLogOff={handleOpenLogOff}/> : console.log}

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

      <Snackbar open={openLogOff} autoHideDuration={2500} onClose={handleCloseLogOff} action={action}>
        <Alert onClose={handleCloseLogOff} severity="success" variant="filled" sx={{ width: '100%' }}> 
          {messageLogOff}
        </Alert>
      </Snackbar>
      <Snackbar open={openLogin} autoHideDuration={4000} onClose={handleCloseLogin} action={actionLogin}>
        <Alert onClose={handleCloseLogin} severity="error" variant="filled" sx={{ width: '100%' }}> 
          {messageLogin}
        </Alert>
      </Snackbar>
  </>

};

export default App;
