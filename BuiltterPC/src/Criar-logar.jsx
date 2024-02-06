import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";


export function CriarLogarConta(){

    const [abrir, setAbrir] = useState(false)

    const abrirModal = () => setAbrir(true)
    const fecharModal = () => setAbrir(false)
    
    return <>
    
        <Button className="btn_create" onClick={abrirModal}>Criar conta</Button>
        <Modal
          open={abrir}
          onClose={fecharModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        

        <button className="btn_enter">Fazer login</button>

    </>

}