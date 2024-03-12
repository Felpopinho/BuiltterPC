import { useState } from "react";
import { Button, Input, styled, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { previewUser, proxPasso } from "../script";
export const arrPreview = [previewUser];

export function PassoUm() {
  
    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    });

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

    const [valorPerfil, setValorPerfil] = useState('')
    const mudarPerfil = (event) =>{
      setValorPerfil(URL.createObjectURL(event.target.files[0]));
    };

    previewUser.usuario = valorName;
    previewUser.email = valorEmail;
    previewUser.senha = valorSenha;
    previewUser.perfil = valorPerfil;

    return <>
      <div className="criarConta_container">
        <div className="inputCriarConta">
          <Input id="UserName" placeholder="Nome" required variant="standard" type="text" sx={{width: '100%'}} onChange={mudarName}></Input>
        </div>
        <div className="inputCriarConta">  
          <Input id="UserEmail" placeholder="Email" required variant="standard" type="email" sx={{width: '100%'}} onChange={mudarEmail}></Input>
        </div>
        <div className="inputCriarConta">
          <Input id="UserPassword" placeholder="Senha" variant="standard" required type="password" sx={{width: '100%'}} onChange={mudarSenha}></Input>
        </div>
        <div className="fotoperfil_container">
          <Button component="label" variant="contained" sx={{width: '100%'}}>
            Foto de perfil
            <VisuallyHiddenInput id="UserPerfil" type="file" accept="image/*" onChange={mudarPerfil}/>
          </Button>
        </div>
      </div>
    </>
}

export function PassoDois(){

  const [titulo, setTitulo] = useState('');
  const mudarSelecao = (event) =>{
    setTitulo(event.target.value);
  }

  const [desc, setDesc] = useState('');
  const mudarDesc = (event) =>{
    setDesc(event.target.value);
  }

  previewUser.titulo = titulo;
  previewUser.descricao = desc;

  return <div className="passoDois_container">

    <div className="descricaoContainer">
      <h2>Deixe seu perfil completo!</h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Titulo</InputLabel>
        <Select label="Titulo" value={titulo} onChange={mudarSelecao} labelId="demo-simple-select-label" id="SelectTitulo">
          <MenuItem value={'Programador'}>Programador</MenuItem>
          <MenuItem value={'Técnico de informática'}>Técnico de informática</MenuItem>
          <MenuItem value={'Leigo'}>Leigo</MenuItem>
          <MenuItem value={'Analista'}>Analista</MenuItem>
          <MenuItem value={'Fanático'}>Fanático</MenuItem>
          <MenuItem value={'Gamer'}>Gamer</MenuItem>
        </Select>
      </FormControl>

      <TextField label="Descrição" rows={4} multiline fullWidth onChange={mudarDesc}></TextField>
    </div>
  </div>
}

export function PassoTres(){

  const acaoMudar = (event) => {
    if (event.target.checked) {
      proxPasso.setAttribute('disabled','disabled');
    } else{
      proxPasso.removeAttribute('disabled')
    }
  }

  return <div className="passotres_container">
    <h2>Tudo pronto para começar?</h2>
    <div className="termos_container">
      <div className="termos_servico">
        <h3>Termos de serviço</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quis dicta quos praesentium atque sequi vel voluptas ut aperiam tempore rem aspernatur, delectus excepturi dolorem corrupti corporis numquam voluptate fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veniam. Nostrum debitis expedita aut recusandae aperiam velit ut illum tempora illo. Odio porro reprehenderit id dignissimos, suscipit at nemo praesentium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem similique sint quae modi tempore obcaecati temporibus necessitatibus corrupti, provident ipsum ab officiis laboriosam saepe optio tempora maiores nam illum vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam expedita nihil aspernatur accusantium esse praesentium cum maiores ex illo earum obcaecati sunt illum, quas quam accusamus hic inventore totam.</p>
      </div>
      <div className="escolha_termos">
        <div>
          <input type="radio" name="opcao-termos" id="negar-termos" onChange={acaoMudar}></input>
          <label htmlFor="negar-termos">Discordo dos termos</label>
        </div>

        <div>
          <input type="radio" name="opcao-termos" id="aceitar-termos"></input>
          <label htmlFor="aceitar-termos">Eu li, e concordo com os termos</label>
        </div>
      </div>
    </div>
  </div>

}