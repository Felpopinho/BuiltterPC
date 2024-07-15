import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

export function Pessoas(props){

    const [avatar, setAvatar] = useState(props.perfil)
    const [color, setColor] = useState()

    const handleAvatar = () =>{
        if (props.perfil === ""){
            setAvatar(props.nome.substr(0,1))
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
            <ListItemAvatar>
                <Avatar sx={{bgcolor: color}} src={avatar}>{avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.nome}
                secondary={props.titulo}
            />
        </ListItem>
        <Divider sx={{margin: "1vh 0 1vh 0"}}/>
    </>
}

export function Amigos(props){
    const [avatar, setAvatar] = useState(props.perfil)
    const [color, setColor] = useState()

    const handleAvatar = () =>{
        if (props.perfil === ""){
            setAvatar(props.nome.substr(0,1))
            let str = '#';
            while (str.length < 7) {
                str += Math.floor(Math.random() * 0x10).toString(16);
            }
            setColor(str)
        }
    }

    useEffect(()=>{
        handleAvatar(props)
    }, [avatar])

    return <>
        {props.id === props.amigoId ? (<Fragment>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{bgcolor: color}} src={avatar}>{avatar}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={props.nome}
                    secondary={props.titulo}
                />
            </ListItem>
            <Divider sx={{margin: "1vh 0 1vh 0"}}/></Fragment>) : console.log
        }
    </>
}