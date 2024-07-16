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
    const [curtidas, setCurtidas] = useState("")
    const [curtido, setCurtido] = useState(false)
    
    const selectUser = async() =>{
        props.users.forEach(user => {
            user.id === props.userId ? setUser(user) : console.log;
        });
        try {
            await axios.post(baseURL+"/likes",{
                userId: previewUser.idUser,
                postId: props.id
            }).then(res=>{
                setCurtidas(res.data)
                res.data.length !== 0 ? setCurtido(true) : setCurtido(false) 
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        selectUser();
    }, [curtido, props.logado]);

    const curtirComentario = async() =>{
        if (props.logado === false){
            props.setOpenAviso(true);
        }else{
            if(curtido===true){
                try {
                    await axios.post(baseURL+"/comentarios/updateLikes", {
                        forum_curtidas: props.curtidas-1,
                        postId: props.id,
                    }).then(async(res)=>{
                        await axios.post(baseURL+"/comentarios/dislike", {
                            userId: previewUser.idUser,
                            postId: props.id
                        }).then(res=>{
                            props.getData()
                            setCurtido(false)
                        })
                    })
                } catch (error) {
                    console.log(error)
                }
            } else{
                try {
                    await axios.post(baseURL+"/comentarios/updateLikes", {
                        forum_curtidas: props.curtidas+1,
                        postId: props.id,
                    }).then(async(res)=>{
                        await axios.post(baseURL+"/comentarios/like", {
                            userId: previewUser.idUser,
                            postId: props.id
                        }).then((res)=>{
                            props.getData()
                            setCurtido(true)
                        })
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    const deleteComentario = async () =>{
        try {
            await axios.post(baseURL+"/comentarios/del", {
                id: props.id
            }).then(res =>{
                props.getData()
                props.handleOpenAlert("Postagem deletada!", 1)
            })
        } catch (error) {
            console.log(error)
            props.handleOpenAlert("Erro ao deletar postagem!", 2)
        }
    }

    return <>
        <ListItem>
            <ListItemAvatar sx={{alignSelf: "start"}}>
                <Avatar sx={{bgcolor: user.perfil}}></Avatar>
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
                        <IconButton onClick={curtirComentario}>
                            {curtido === true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </IconButton>
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