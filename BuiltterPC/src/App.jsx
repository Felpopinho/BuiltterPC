import { useState } from 'react';

import { Divider } from '@mui/material'; 

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

function App() {

  return <>

      <Menu />
      <Divider sx={{margin: 3}}/>
      <Suporte />
      <Divider sx={{margin: 3}}/>
      <Simulacao />
      <Divider sx={{margin: 3}}/>
      <Promocoes />
      <Divider sx={{margin: 3}}/>
      <Forum />
      
  </>

};

export default App;
