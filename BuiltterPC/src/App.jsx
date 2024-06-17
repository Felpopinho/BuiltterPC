import { Divider, ThemeProvider, createTheme } from '@mui/material'; 

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

const baseURL = "http://localhost:3000/src"

function App() {

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () =>{
    try {
      const res = await axios.get(baseURL);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    };
  }

  useEffect(() =>{
    getUsers();
  }, [setUsers]);


  const [modalConta, setModalConta] = useState(false)

  return <>
      <Menu abrirConta={setModalConta} getUsers={getUsers} users={users.length}/>
      <Divider sx={{margin: 3}}/>
      <Suporte />
      <Divider sx={{margin: 3, marginBottom: 10}}/>
      <Simulacao />
      <Divider sx={{margin: 3, marginTop: 10}}/>
      <Promocoes />
      <Divider sx={{margin: 3}}/>
      <Forum />
      {modalConta === true ? <Conta fecharModal={setModalConta} users={users}/> : console.log}
  </>

};

export default App;
