export function PreviewPerfil(props){
    
    return <>
    
    <div className="previewPerfil">
        <img src={props.perfil}/>
    </div>
    <div className="previewStatus">
        <h3>{props.usuario}</h3>
        <p>{props.email}</p>
    </div>
    
    </>

}