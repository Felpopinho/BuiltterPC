import { useState } from "react";
import { Button, Modal, Box, Typography} from "@mui/material";
import { btnCriarConta, btnLogarConta, modalCriarConta, modalEntrarConta } from './object-styles'
import {  previewUser } from "./script";
import { PassoUm } from "./Passo-um"; 

export function CriarLogarConta(){

  const [abrirCC, setAbrirCC] = useState(false)

  const abrirModalCC = () => setAbrirCC(true)
  const fecharModalCC = () => setAbrirCC(false)

  const [abrirLC, setAbrirLC] = useState(false)

  const abrirModalLC = () => setAbrirLC(true)
  const fecharModalLC = () => setAbrirLC(false)
  
  return <>
  
      <Button variant="contained" className="btn_create" onClick={abrirModalCC} sx={btnCriarConta}>Criar conta</Button>
      <Modal
        open={abrirCC}
        onClose={fecharModalCC}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalCriarConta} className="modal_criar_conta">
          <PassoUm />
        </Box>
      </Modal>
      

      <Button variant="outlined" className="btn_enter" onClick={abrirModalLC} sx={btnLogarConta}>Logar conta</Button>
      <Modal
        open={abrirLC}
        onClose={fecharModalLC}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalEntrarConta} className="modal_criar_conta">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

  </>

}