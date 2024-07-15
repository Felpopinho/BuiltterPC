import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Box, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { previewUser } from "../script";
import axios from "axios";
import { baseURL } from "../App"

export function Postagens(props){

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
    }, [avatar])

    const deleteComentario = async () =>{
        try {
            await axios.post(baseURL+"/comentarios/del", {
                id: props.id
            }).then(res =>{
                props.getData()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <ListItem>
            <ListItemAvatar sx={{alignSelf: "start"}}>
                <Avatar sx={{bgcolor: color}} src={avatar}>{avatar}</Avatar>
            </ListItemAvatar>
            <Box sx={{display: "flex", flexDirection: "column",width: "100%"}}>
                <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <ListItemText primary={user.nome}/>
                    <ListItemText primary={props.tipo} sx={{textAlign: "end"}}/>
                </Box>
                <ListItemText primary={props.titulo} secondary={props.descricao}/>
                <Box sx={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Button onClick={()=>{props.handleResposta(props.id)}}>Ver respostas</Button>
                    <Box>
                        {props.curtidas}
                        <IconButton><FavoriteBorderIcon/></IconButton>
                        {user.id === previewUser.idUser ? 
                            <IconButton onClick={deleteComentario}><DeleteForeverRoundedIcon/></IconButton> : 
                        console.log}
                    </Box>
                </Box>
            </Box>
        </ListItem>
        <Divider sx={{margin: "1vh 0 2vh 0"}}/>
    </>
}