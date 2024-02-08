import { useState } from "react";
import { Button, Typography, Input, styled } from "@mui/material";
import { areaTextoCriarConta, buttonCriarConta } from './object-styles'
import { PreviewAcc } from "./PreviewAccount"; 
import { previewUser } from "./script";

export function PassoUm() {

    const arrPreview = [previewUser];

    const [valorName, setValorName] = useState('');
    const acaoMudarName = (event) => {
      setValorName(event.target.value);
    }
    const [valorEmail, setValorEmail] = useState('');
    const acaoMudarEmail = (event) => {
      setValorEmail(event.target.value);
    }
    const [valorPerfil, setValorPerfil] = useState('');
    const acaoMudarPerfil = (event) => {
      setValorPerfil(URL.createObjectURL(event.target.files[0]));
    }
  
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

    return <>
        <Typography id="modal-modal-title" variant="h2" component="h1" fontWeight={600} width={'80%'}>
        Criar conta
        </Typography>
        <div className="form_criarconta">
          <div className="criarConta_container">
            <div className="inputCriarConta">
              <Input id="UserName" placeholder="Nome" required variant="standard" type="text" sx={areaTextoCriarConta} value={valorName} onChange={acaoMudarName} onMouseLeave={previewUser.usuario = valorName}></Input>
            </div>
            <div className="inputCriarConta">  
              <Input id="UserEmail" placeholder="Email" required variant="standard" type="email" sx={areaTextoCriarConta} value={valorEmail} onChange={acaoMudarEmail} onMouseLeave={previewUser.email = valorEmail}></Input>
            </div>
            <div className="inputCriarConta">
              <Input placeholder="Senha" variant="standard" required type="password" sx={areaTextoCriarConta}></Input>
            </div>
            <div className="perfil-preview">
              <div className="btn_fotoperfil">
                <Button component="label" variant="outlined" sx={buttonCriarConta}>
                  Foto de perfil
                  <VisuallyHiddenInput type="file" id="UserPerfil" onChange={acaoMudarPerfil} onMouseLeave={previewUser.perfil = valorPerfil} accept="image/*"/>
                </Button>
              </div>
              <div className="preview_container">
                {arrPreview.map(inputs => <PreviewAcc usuario={inputs.usuario} email={inputs.email} perfil={inputs.perfil}/>)}
              </div>
            </div>
          </div>
        </div>
    </>
}