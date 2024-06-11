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
import { useState } from 'react';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [modalConta, setModalConta] = useState(false)

  return <>
      <Menu abrirConta={setModalConta}/>
      <Divider sx={{margin: 3}}/>
      <Suporte />
      <Divider sx={{margin: 3, marginBottom: 10}}/>
      <Simulacao />
      <Divider sx={{margin: 3, marginTop: 10}}/>
      <Promocoes />
      <Divider sx={{margin: 3}}/>
      <Forum />
      {modalConta === true ? <Conta fecharModal={setModalConta}/> : console.log}
  </>

};

export default App;
