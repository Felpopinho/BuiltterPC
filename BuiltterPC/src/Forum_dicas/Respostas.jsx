import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Box, Button, IconButton, List, Modal, FormControl, TextField, FormHelperText, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Close from '@mui/icons-material/Close'
import axios from "axios";
import { previewUser } from "../script";
import { baseURL } from "../App";

export function Respostas(props){

    const ref = useRef()
       
    const [user, setUser] = useState(props.users[1])
    
    const selectUser = () =>{
        props.users.forEach(user => {
            user.id === props.post.forum_id ? setUser(user) : console.log
        });
    }

    useEffect(()=>{
        selectUser();
    }, [])

    const handleVoltar = () =>{
        props.setVendoResposta(false)
    }

    const [modalResposta, setModalResposta] = useState(false)

    const handleCriarResposta = (n) =>{
        n === 1 ? setModalResposta(true) : setModalResposta(false)
        
    }

    const [valueTitulo, setValueTitulo] = useState("");
    const [helpTitulo, setHelpTitulo] = useState(0);
    const [valueDesc, setValueDesc] = useState("");
    const [helpDesc, setHelpDesc] = useState(0);

    const handleTitulo = (e) =>{
        setValueTitulo(e.target.value)
        const tempValueTitulo = e.target.value
        setHelpTitulo(tempValueTitulo.length)
    }
    const handleDesc = (e) =>{
        setValueDesc(e.target.value)
        const tempValueDesc = e.target.value
        setHelpDesc(tempValueDesc.length)
    }

    const publicarResposta = async (e) =>{
        e.preventDefault()

        const comment = ref.current

        try {
            await axios.post(baseURL+"/respostas/add", {
                forum_id: previewUser.idUser,
                forum_postId: props.post.id,
                forum_titulo: comment.titulo.value,
                forum_descricao: comment.descricao.value,
                forum_curtidas: 0
            }).then(res =>{
                props.getData()
                props.handleResposta(props.post.id)
                handleCriarResposta(2)
                props.handleOpenAlert("Resposta publicada!", 1)
            })
        } catch (error) {
            console.log(error)
            props.handleOpenAlert("Error ao publicar!", 2)
        }
    }

    return <>
        <ListItem sx={{postion: "relative"}}>
            <ListItemAvatar sx={{alignSelf: "start", width: "100px"}}>
                <Avatar sx={{bgcolor: user.perfil, width: "80px", height: "80px",fontSize: "1.8rem"}}/>
            </ListItemAvatar>
            <Box sx={{display: "flex", flexDirection: "column",width: "100%"}}>
                <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <h2 style={{fontSize: "2rem"}}>{user.nome}</h2>
                    <h2 >{user.titulo}</h2>
                </Box>
                <h3 style={{textAlign: "start", margin: "5px 0 5px 0"}}>{props.post.forum_tipo}</h3>
                <Box>
                    <p style={{fontSize: "1.8rem", margin: "5px 0 5px 0"}}>{props.post.forum_titulo}</p>
                    <p style={{fontSize: "1.2rem"}}>{props.post.forum_descricao}</p>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Button sx={{margin: "10px 0 0 0"}}variant="contained" onClick={handleVoltar}>Voltar</Button>
                    <IconButton><FavoriteBorderIcon/></IconButton>
                </Box>
            </Box>
        </ListItem>
        <Divider sx={{margin: "1vh 0 2vh 0"}}/>
        <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
            <h2 >Respostas</h2>
            <Button variant="outlined" onClick={()=>{handleCriarResposta(1)}}>Responder comentario</Button>
        </Box>
        <List sx={{padding: "0 10%"}}>
            {Array.from(props.respostas).map(resposta => resposta.postId === props.post.id ? <RespostaList key={resposta.id} users={props.users} userId={resposta.userId} titulo={resposta.resposta_titulo} desc={resposta.resposta_desc}/> : console.log)}
        </List>

        <Modal open={modalResposta}>
            <Box className="criarPostagem" sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: '#f7fbff',boxShadow: 24,p: 4}}>
                <IconButton onClick={()=>{handleCriarResposta(2)}} sx={{position: "absolute", right: "30px"}}><Close color="primary"/></IconButton>
                
                <h1 style={{textAlign: "center", margin: "0 0 3vh 0"}}>Responder postagem</h1>

                <form style={{width: "100%",height: "35vh"}} ref={ref} onSubmit={(e)=>{publicarResposta(e)}}>
                    <FormControl sx={{width: "100%", height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
                        <Box sx={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{width: "100%"}}>
                                <TextField required name="titulo" sx={{width: "100%"}} label="Titulo" value={valueTitulo} onChange={(e)=>{handleTitulo(e)}}/>
                                <FormHelperText>{helpTitulo}/125</FormHelperText>
                            </Box>
                        </Box>
                        <Box sx={{width: "100%"}}>
                            <TextField required name="descricao" sx={{width: "100%"}} multiline rows={5} label="Descrição" value={valueDesc} onChange={(e)=>{handleDesc(e)}}/>
                            <FormHelperText>{helpDesc}/255</FormHelperText>
                        </Box>
                        <Button sx={{width: "100%"}} type="submit" variant="contained" disabled={helpDesc >= 256 || helpTitulo >= 126 || helpDesc <= 0|| helpTitulo <= 0}>Postar</Button>
                    </FormControl>
                </form>
            </Box>
        </Modal>
    </>
}

export function RespostaList(props){

    const [user, setUser] = useState(props.users[1])
    
    const selectUser = () =>{
        props.users.forEach(user => {
            user.id === props.userId ? setUser(user) : console.log
        });
    }

    useEffect(()=>{
        selectUser();
    }, [])

    return <>
        <ListItem>
            <ListItemAvatar sx={{alignSelf: "start"}}>
                <Avatar sx={{bgcolor: user.perfil}}/>
            </ListItemAvatar>
            <Box sx={{display: "flex", flexDirection: "column",width: "100%"}}>
                <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <ListItemText primary={user.nome}/>
                    <ListItemText primary={user.titulo} sx={{textAlign: "end"}}/>
                </Box>
                <ListItemText primary={props.titulo} secondary={props.desc}/>
                <Box sx={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                    <IconButton><FavoriteBorderIcon/></IconButton>
                </Box>
            </Box>
        </ListItem>
    </>
}