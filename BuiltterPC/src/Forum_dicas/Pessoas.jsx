import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

export function Pessoas(props){

    return <>
        <ListItem>
            <ListItemAvatar>
                <Avatar sx={{bgcolor: props.perfil}}></Avatar>
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

    return <>
        {props.id === props.amigoId ? (<Fragment>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{bgcolor: props.perfil}}></Avatar>
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