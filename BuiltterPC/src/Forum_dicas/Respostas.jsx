import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Box, Button, IconButton, List } from "@mui/material";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function Respostas(props){
       
    const [user, setUser] = useState(props.users[1])
    
    const selectUser = () =>{
        props.users.forEach(user => {
            user.id === props.userId ? setUser(user) : console.log
        });
    }
    const [avatar, setAvatar] = useState("")
    const [color, setColor] = useState("")

    const handleAvatar = () =>{
        if (user.perfil === ""){
            setAvatar(user.nome.substr(0,1))
            let str = '#';
            while (str.length < 7) {
                str += Math.floor(Math.random() * 0x10).toString(16);
            }
            setColor(str)
        }
    }

    useEffect(()=>{
        selectUser();
        handleAvatar();
    }, [avatar,user])

    const handleVoltar = () =>{
        props.setVendoResposta(false)
    }

    return <>
        <ListItem sx={{postion: "relative"}}>
            <ListItemAvatar sx={{alignSelf: "start", width: "100px"}}>
                <Avatar sx={{bgcolor: color, width: "80px", height: "80px",fontSize: "1.8rem"}} src={avatar}>{avatar}</Avatar>
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
            <Button variant="outlined">Responder comentario</Button>
        </Box>
        <List sx={{padding: "0 10%"}}>
            {Array.from(props.respostas).map(resposta => resposta.postId === props.post.id ? <RespostaList key={resposta.id} users={props.users} userId={resposta.userId} titulo={resposta.resposta_titulo} desc={resposta.resposta_desc}/> : console.log)}
        </List>
    </>
}

export function RespostaList(props){

    const [user, setUser] = useState(props.users[1])
    
    const selectUser = () =>{
        props.users.forEach(user => {
            user.id === props.userId ? setUser(user) : console.log
        });
    }
    const [avatar, setAvatar] = useState("")
    const [color, setColor] = useState("")

    const handleAvatar = () =>{
        if (user.perfil === ""){
            setAvatar(user.nome.substr(0,1))
            let str = '#';
            while (str.length < 7) {
                str += Math.floor(Math.random() * 0x10).toString(16);
            }
            setColor(str)
        }
    }

    useEffect(()=>{
        handleAvatar()
    }, [avatar])

    return <>
        <ListItem>
            <ListItemAvatar sx={{alignSelf: "start"}}>
                <Avatar sx={{bgcolor: color}} src={avatar}>{avatar}</Avatar>
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