export function Catalogo(props){

    return <>
        <div className="produto">
            <img src={props.imagem}/> 
            <div style={{width: "100%", height: "120px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                <p className="productName">{props.nome}</p>
                <p className="preco">{props.preco}</p>
                <div className="productPrice">
                    <h2>{props.descricao}</h2>
                    <p>{props.porcentagem}</p>
                </div>
            </div>
        </div>
    </>

}