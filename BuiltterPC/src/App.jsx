import { Divider, ThemeProvider, createTheme, Modal, Box, Typography, Button } from '@mui/material'; 

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


  const [modalConta, setModalConta] = useState(false)

  return <>
      <Menu abrirConta={setModalConta} users={users.length} logado={logado} setLogado={setLogado}/>
      <Divider sx={{margin: 3}}/>
      <Suporte logado={logado} setOpenAviso={setOpenAviso}/>
      <Divider sx={{margin: 3, marginBottom: 10}}/>
      <Simulacao logado={logado}/>
      <Divider sx={{margin: 3, marginTop: 10}}/>
      <Promocoes logado={logado}/>
      <Divider sx={{margin: 3}}/>
      <Forum logado={logado}/>
      {modalConta === true ? <Conta fecharModal={setModalConta} users={users} logado={logado} setLogado={setLogado} setOpenAviso={setOpenAviso}/> : console.log}

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
  </>

};

export default App;
