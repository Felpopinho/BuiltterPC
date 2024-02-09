import { useState } from 'react';

import './Menu/Style_menu.css';
import { Menu } from './Menu/Menu.jsx';
import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    primary: {
      light: '#6573c3',
      main: '#3f51b5',
      dark: '#2c387e',
    },
    secondary: {
      light: '#834bff',
      main: '#651fff',
      dark: '#4615b2',
    },
  },
})

function App() {

  return <>

      <Menu />
      
  </>

};

export default App;
