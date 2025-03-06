import { Modal,Box,Divider,Button } from "@mui/material"
import { useState } from "react"

export function Catalogo(props){

    const [modal, setModal] = useState(false)

    const openModal = () =>{
        setModal(true)
    }
    const closeModal = () =>{
        setModal(false)
    }

    

    return <>
        <div className="produto" onClick={openModal}>
            <img src={props.imagem}/> 
            <div style={{width: "100%", height: "120px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                <p className="productName">{props.nome}</p>
                <p className="preco">{props.preco}</p>
                <div className="productPrice">
                    <h2>{props.descricao}</h2>
                    <p>{props.porcentagem}</p>
                </div>
            </div>
        </div>

        <Modal open={modal} onClose={closeModal}>
            <Box sx={{borderRadius: "10px", backgroundColor: "white", width: "80%", height: "80vh", position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)'}}>
                <div className="previewProdutoCont">
                    <div className="previewProduto">
                        <img src={props.imagem} style={{paddingBottom: "10px"}}/>
                        <div className="previewEsquerda">
                            <p style={{fontSize: "2.2rem", marginBottom: "10px"}}>{props.nome}</p>
                            <p style={{fontSize: "1.8rem", textDecoration: "line-through", fontWeight: "300", color: "gray"}}>{props.preco}</p>
                            <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                <h1 style={{fontSize: "2.5rem", color: "red"}}>{props.descricao}</h1>
                                <p style={{fontSize: "2rem", color: "blue", alignSelf: "end"}}>{props.porcentagem}</p>
                            </div>
                            <p style={{fontSize: "1.5rem", color: "gray"}}>Em até 12x</p>
                            <Divider sx={{margin: "2vh 0 2vh 0"}}/>
                            <div style={{width: "100%", justifyContent: "space-between", display: "flex"}}>
                                <a href="https://www.pichau.com.br" target="_blank">
                                    <Button variant="contained" sx={{fontSize: "1.5rem"}}>
                                        Compre agora
                                    </Button>
                                </a>
                                <Button variant="outlined" sx={{fontSize: "1rem", alignSelf: "end"}}>
                                    Adicionar ao carrinho
                                </Button>
                            </div>
                            <Divider sx={{margin: "3vh 0 3vh 0"}}/>
                            <div>
                                <h1>Entrega:</h1>
                                <div>
                                    <p style={{fontSize: "1.5rem"}}>Em estoque</p>
                                    <p style={{fontSize: "1.5rem"}}>Frete gratis</p>
                                    <p style={{fontSize: "1.5rem"}}>Prazo de até 20 dias</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    </>

}