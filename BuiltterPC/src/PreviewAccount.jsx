export function PreviewAcc(props){
    return <>

        <div className="perfilACC_container">
            <img src={props.perfil}/>
        </div>
        <div>
            <h3 className="userName">{props.usuario}</h3>
            <p className="userEmail">{props.email}</p>
        </div>

    </>
}