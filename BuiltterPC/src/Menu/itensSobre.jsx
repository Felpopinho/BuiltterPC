export function ItensSobre(itens){
    return <div className="section_content">

        <div className="image_sobre_container">
            <img src={itens.imagem} id="Image_sobre"/>
            <div></div>
        </div>
        
        <h2 id="Titulo_sobre">{itens.nome}</h2>
        <p id="Desc_sobre">{itens.descricao}</p>
    </div>
}