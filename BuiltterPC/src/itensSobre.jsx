function itensSobre(props){
    return<>
    
        <div className="sobre_container">
            <h2>{sessoesLista[0].nome}</h2>
            <p>{sessoesLista[0].descricao}</p>
            <img src={sessoesLista[0].imagem} />
        </div>
    
    </>
}