export function Catalogo(props){

    return <>
        <div className="produto">
            <img src={props.imagem}/> 
            <div style={{width: "95%", height: "120px"}}>
                <p className="productName">{props.nome}</p>
                <h2 className="productPrice">
                    <p>A partir de</p>
                    <p>{props.descricao}</p>
                </h2>
            </div>
        </div>
    </>

}