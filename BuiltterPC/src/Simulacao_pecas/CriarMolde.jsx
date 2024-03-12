import { Box, Divider, Typography, Button } from "@mui/material";
import { useState } from "react";

export function ProdutosMolde(props){

    const nomeLista = [props.nome1, props.nome2, props.nome3, props.nome4, props.nome5, props.nome6, props.nome7, props.nome8];
    const precoLista = [props.preco1, props.preco2, props.preco3, props.preco4, props.preco5, props.preco6, props.preco7, props.preco8];
    let selected;
    
    const [pText, setPText] = useState('');
    const [pPreco, setPPreco] = useState('');
    const [pMedia, setPMedia] = useState('');

    const handleProduct = (nome, preco) =>{
        setPText(nome);
        setPPreco(preco);
        let PrecoMin = parseInt(preco.slice(2,6));
        let PrecoMax = parseInt(preco.slice(11,16));
        let PrecoMedia = (PrecoMin + PrecoMax) / 2;
        setPMedia(PrecoMedia);
    }

    const selectProduct = (produto, nome, preco) => {
        if (produto === undefined || nome === '' || preco === undefined) {
            return
        } else {
            alert(produto);
        }
        
    }

    return <>
        <Box id='produtosContainer' sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, width: '40%', alignContent: 'center', justifyItems: 'center'}} onChange={() => {handleProduct(nomeLista[selected], precoLista[selected])}}>
            <div className="produto_input">         
                <input type="radio" name="produto" id="Produto1" className="product" onClick={() => {selected = 0}}/>
                <label htmlFor="Produto1"><img src={props.image1}/></label>
            </div>
            <div className="produto_input">
                <input type="radio" name="produto" id="Produto2" className="product" onClick={() => {selected = 1}}/>
                <label htmlFor="Produto2"><img src={props.image2}/></label>
            </div>
            <div className="produto_input">
                <input type="radio" name="produto" id="Produto3" className="product" onClick={() => {selected = 2}}/>
                <label htmlFor="Produto3"><img src={props.image3}/></label>
            </div>
            <div className="produto_input">
                <input type="radio" name="produto" id="Produto4" className="product" onClick={() => {selected = 3}}/>
                <label htmlFor="Produto4"><img src={props.image4}/></label>
            </div>
            <div className="produto_input">
                <input type="radio" name="produto" id="Produto5" className="product" onClick={() => {selected = 4}}/>
                <label htmlFor="Produto5"><img src={props.image5}/></label>
            </div>
            <div className="produto_input">
                <input type="radio" name="produto" id="Produto6" className="product" onClick={() => {selected = 5}}/>
                <label htmlFor="Produto6"><img src={props.image6}/></label>
            </div>
            <div className="produto_input">
                <input type="radio" name="produto" id="Produto7" className="product" onClick={() => {selected = 6}}/>
                <label htmlFor="Produto7"><img src={props.image7}/></label>
            </div>
            <div className="produto_input">
                <input type="radio" name="produto" id="Produto8" className="product" onClick={() => {selected = 7}}/>
                <label htmlFor="Produto8"><img src={props.image8}/></label>
            </div>
        </Box>

        <Box sx={{width: '40%', height: 'auto', backgroundColor: '#292929', borderRadius: '20px', padding: '20px'}}>
            <section style={{overflowY: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{color: 'white'}} variant="h5" id='produtoNome'>
                    <p style={{color:'gray', textAlign: 'center'}}>Nome do produto</p>
                    {pText === '' ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : pText}
                </Typography>
            </section>
            <Divider color="gray" sx={{margin: '15px 0'}}/>
            <section style={{overflowY: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{color: 'white'}} variant="h5" id='produtoNome'>
                    <p style={{color:'gray', textAlign: 'center'}}>Preços entre</p>
                    {pPreco === '' ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : <p style={{textAlign: 'center'}}>{pPreco}</p>}
                </Typography>
            </section>
            <Divider color="gray" sx={{margin: '15px 0'}}/>
            <section style={{overflowY: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{color: 'white'}} variant="h5" id='produtoNome'>
                    <p style={{color:'gray'}}>Preço em media</p>
                    {pMedia === '' ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : <p style={{textAlign: 'center'}}>R${pMedia},00</p>}
                </Typography>
            </section>
            <section style={{overflowY: 'hidden', display: 'flex', alignItems: '', justifyContent: 'center', marginTop: '20px'}}>
                <Typography sx={{color: 'white'}} variant="h5" id='produtoNome'>
                    <Button disabled={pText === ''} variant={pText === '' ? "Text" : "contained"} onClick={selectProduct(selected, pText, pMedia)}>
                        Selecionar peça
                    </Button>
                </Typography>
            </section>
        </Box>

    </>
}