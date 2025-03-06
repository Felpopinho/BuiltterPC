export function ItensSobre(itens){
    return <div className="section_content">

        <div className="image_sobre_container">
            <img src={itens.imagem} className="Image_sobre"/>
            <div></div>
        </div>
        
        <h2 className="Titulo_sobre">{itens.nome}</h2>
        <p className="Desc_sobre">{itens.descricao}</p>
    </div>
}