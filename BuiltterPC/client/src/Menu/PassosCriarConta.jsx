import { useEffect, useState } from "react";
import { Button, Input, styled, TextField, Select, MenuItem, InputLabel, FormControl, IconButton, ToggleButton, ToggleButtonGroup, Avatar, ThemeProvider } from "@mui/material";
import { previewUser } from "../script";
import axios from "axios";
import { baseURL, darkTheme } from "../App";
export const arrPreview = [previewUser];

export function PassoUm(props) {

    const [valorName, setValorName] = useState('')
    const mudarName = (event) =>{
      setValorName(event.target.value);
    };

    const [valorEmail, setValorEmail] = useState('')
    const mudarEmail = (event) =>{
      setValorEmail(event.target.value); 
      
    };

    const [valorSenha, setValorSenha] = useState('')
    const mudarSenha = (event) =>{
      setValorSenha(event.target.value);
    };

    const [color, setColor] = useState("")
    const handleColor = (e,v) =>{
      setColor(v);
    };

    previewUser.usuario = valorName;
    previewUser.email = valorEmail;
    previewUser.senha = valorSenha;
    previewUser.perfil = color;

    const verificarInput = () =>{
      if ((valorName !== '') && 
        (valorEmail !== '') && 
        (valorSenha !== '') && 
        (color !== '') &&
        ((valorSenha.includes(' ') === false) && (valorSenha.length > 5)) && 
        ((valorEmail.includes('@') === true) && (valorEmail.includes('.') === true)))
      {
        props.inputPrenchido(true)
      } else {
        props.inputPrenchido(false)
      };
    }

    useEffect(()=>{
      verificarInput();
    }, [valorName, valorEmail, valorSenha, color])

    return <>
      <div className="criarConta_container">
        <div className="inputCriarConta">
          <TextField id="UserName" label="Nome" variant="outlined" required sx={{width: '100%'}} onChange={mudarName} name="nome"></TextField>
        </div>
        <form  className="criarConta_container" style={{width: "100%", height: "27vh"}}>
          <div className="inputCriarConta">  
            <TextField autoComplete="username" id="UserEmail" label="Email" required variant="standard" size="normal" type="email" sx={{width: '100%'}} onChange={mudarEmail} name="email"></TextField>
          </div>
          <div className="inputCriarConta">
            <TextField autoComplete="current-password" id="UserPassword" label="Senha" variant="standard" size="normal" required type="password" sx={{width: '100%'}} onChange={mudarSenha} name="senha"></TextField>
            <p style={{fontSize: '0.9rem', padding: '3px 0px 3px 0px'}}>A senha deve conter 5 caracteres, exceto espaço</p>
          </div>
        </form>
        <div className="perfil_container">
          <ToggleButtonGroup className="cores_container" exclusive value={color} onChange={handleColor}>
            <ToggleButton sx={{padding: "6px"}} value="#1C1C1C"><Avatar sx={{bgcolor: "#1C1C1C", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#C0C0C0"><Avatar sx={{bgcolor: "#C0C0C0", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#6A5ACD"><Avatar sx={{bgcolor: "#6A5ACD", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#191970"><Avatar sx={{bgcolor: "#191970", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#1E90FF"><Avatar sx={{bgcolor: "#1E90FF", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#008080"><Avatar sx={{bgcolor: "#008080", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#2E8B57"><Avatar sx={{bgcolor: "#2E8B57", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#8FBC8F"><Avatar sx={{bgcolor: "#8FBC8F", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#BDB76B"><Avatar sx={{bgcolor: "#BDB76B", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#DAA520"><Avatar sx={{bgcolor: "#DAA520", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#D2B48C"><Avatar sx={{bgcolor: "#D2B48C", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#7B68EE"><Avatar sx={{bgcolor: "#7B68EE", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#9370DB"><Avatar sx={{bgcolor: "#9370DB", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#DB7093"><Avatar sx={{bgcolor: "#DB7093", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#CD5C5C"><Avatar sx={{bgcolor: "#CD5C5C", width: "30px", height: "30px"}}/></ToggleButton>
            <ToggleButton sx={{padding: "6px"}} value="#FFA500"><Avatar sx={{bgcolor: "#FFA500", width: "30px", height: "30px"}}/></ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </>
}

export function PassoDois(props){

  const [titulo, setTitulo] = useState('');
  const mudarSelecao = (event) =>{
    setTitulo(event.target.value);
  }

  const [desc, setDesc] = useState('');
  const mudarDesc = (event) =>{
    setDesc(event.target.value);
  }

  const verificarForm = () =>{
    if (titulo != "" && desc != ""){
      props.formPrenchido(true);
    } else{
      props.formPrenchido(false)
    }
  }

  previewUser.titulo = titulo;
  previewUser.descricao = desc;

  useEffect(()=>{
    verificarForm();
  }, [titulo, desc])


  return <div className="passoDois_container">

    <div className="descricaoContainer">
      <h2>Deixe seu perfil completo!</h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Titulo</InputLabel>
        <Select label="Titulo" value={titulo} onChange={mudarSelecao} labelId="demo-simple-select-label" id="SelectTitulo" name="titulo">
          <MenuItem value={'Programador'}>Programador</MenuItem>
          <MenuItem value={'Técnico de informática'}>Técnico de informática</MenuItem>
          <MenuItem value={'Leigo'}>Leigo</MenuItem>
          <MenuItem value={'Analista'}>Analista</MenuItem>
          <MenuItem value={'Fanático'}>Fanático</MenuItem>
          <MenuItem value={'Gamer'}>Gamer</MenuItem>
        </Select>
      </FormControl>

      <TextField label="Descrição" rows={4} multiline fullWidth onChange={mudarDesc} name="descricao"></TextField>
    </div>
  </div>
}

export function PassoTres(props){

  const setTermosTrue = () =>{
    props.termosPrenchido(true);
  } 
  const setTermosFalse = () =>{
    props.termosPrenchido(false);
  }

  return <div className="passotres_container">
    <h2>Tudo pronto para começar?</h2>
    <div className="termos_container">
      <div className="termos_servico">
        <h3>Termos de serviço</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quis dicta quos praesentium atque sequi vel voluptas ut aperiam tempore rem aspernatur, delectus excepturi dolorem corrupti corporis numquam voluptate fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veniam. Nostrum debitis expedita aut recusandae aperiam velit ut illum tempora illo. Odio porro reprehenderit id dignissimos, suscipit at nemo praesentium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem similique sint quae modi tempore obcaecati temporibus necessitatibus corrupti, provident ipsum ab officiis laboriosam saepe optio tempora maiores nam illum vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam expedita nihil aspernatur accusantium esse praesentium cum maiores ex illo earum obcaecati sunt illum, quas quam accusamus hic inventore totam.</p>
      </div>
      <div className="escolha_termos">
        <div onClick={setTermosFalse}>
          <input type="radio" name="opcao-termos" id="negar-termos"></input>
          <label htmlFor="negar-termos">Discordo dos termos</label>
        </div>

        <div onClick={setTermosTrue}>
          <input type="radio" name="opcao-termos" id="aceitar-termos"></input>
          <label htmlFor="aceitar-termos">Eu li, e concordo com os termos</label>
        </div>
      </div>
    </div>
  </div>

}