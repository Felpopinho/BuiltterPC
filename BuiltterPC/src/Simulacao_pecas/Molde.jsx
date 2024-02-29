import { Typography, Box, Modal } from "@mui/material";
import { useState } from "react";
import { DescMolde, ProdutosMolde } from "./CriarMolde";
import { modal } from "../object-styles";
import { processadoresObject, memoriasObject, pvideosObject, armazensObject, fontesObject, maeObject } from "../script";

export function Molde(props){

    const [moldeOpen, setMoldeOpen] = useState(false);

    const handleOpenModal = () =>{
        setMoldeOpen(true);
    }
    const handleCloseModal = () =>{
        setMoldeOpen(false)
    }

    const [section, setSection] = useState(0);

    const produtosObject = [maeObject, processadoresObject, memoriasObject, armazensObject, pvideosObject, fontesObject];

    return <Box sx={{cursor: 'pointer'}} >
        <Box sx={{width: '230px', height: '230px', border: 'solid 2px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} onClick={handleOpenModal}> 
            <Typography id="sim_desc" variant="h4" fontWeight={600} textAlign={'center'}>{props.simulacao_nome}</Typography>
            <Typography textAlign={'center'}>{props.simulacao_status}</Typography>
        </Box>

        <Modal open={moldeOpen} onClose={handleCloseModal}>
            
            <Box sx={modal} className="moldeModal">
                {Array.from(produtosObject).slice(section, section+1).map(produto =>(<ProdutosMolde image1={produto.image1} image2={produto.image2} image3={produto.image3} image4={produto.image4} image5={produto.image5} image6={produto.image6} image7={produto.image7} image8={produto.image8}/>))}
                <Box sx={{width:'45%', height:'100%', backgroundColor: '#292929', borderRadius: '20px'}}>
                    {Array.from(produtosObject).slice(section, section+1).map(desc => (<DescMolde nome1={desc.nome1}/>))}
                </Box>
            </Box>

        </Modal>

    </Box>

}