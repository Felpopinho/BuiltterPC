import { Avatar } from "@mui/material";

export function PreviewPerfil(props){
    
    return <>
    
        <div className="previewPerfil">
            <Avatar sx={{width: "100%", height: "100%", bgcolor: props.perfil}}></Avatar>
        </div>
        <div className="previewDados">
            <h3>{props.usuario}</h3>
            <p>{props.email}</p>
        </div>
        <div className="previewStatus">
            <h4>Titulo: {props.titulo}</h4>
            <p>{props.descricao}</p>
        </div>
    
    </>

}