import { Box, Divider, Typography } from "@mui/material";
import { Fragment, useState } from "react";

export function ProdutosMolde(props){

    let section = props.sessao

    const nomeLista = [props.nome1, props.nome2, props.nome3, props.nome4, props.nome5, props.nome6, props.nome7, props.nome8];
    const precoLista = [props.preco1, props.preco2, props.preco3, props.preco4, props.preco5, props.preco6, props.preco7, props.preco8];
    const imageLista = [props.image1, props.image2, props.image3, props.image4, props.image5, props.image6, props.image7, props.image8]

    let selected;
    
    const [pText, setPText] = useState('');
    const [pPreco, setPPreco] = useState('');
    const [pMedia, setPMedia] = useState(0);

    const selectProduct = () =>{
        props.productSelected(selected);
        setPText(nomeLista[selected]);
        setPPreco(precoLista[selected]);
        const preco = String(precoLista[selected]);
        let PrecoMin = preco.slice(2,6);
        let PrecoMax = preco.slice(11,16);
        let PrecoMedia = (parseFloat(PrecoMin) + parseFloat(PrecoMax)) / 2;
        setPMedia(PrecoMedia);
        section === 1 ? props.mae([imageLista[selected], nomeLista[selected], precoLista[selected], PrecoMedia]):
        section === 2 ? props.processador([imageLista[selected], nomeLista[selected], precoLista[selected], PrecoMedia]):
        section === 3 ? props.memoria([imageLista[selected], nomeLista[selected], precoLista[selected], PrecoMedia]):
        section === 4 ? props.armazem([imageLista[selected], nomeLista[selected], precoLista[selected], PrecoMedia]):
        section === 5 ? props.pvideo([imageLista[selected], nomeLista[selected], precoLista[selected], PrecoMedia]):
                        props.fonte([imageLista[selected], nomeLista[selected], precoLista[selected], PrecoMedia]);
    }


    return <>
        <Box id='produtosContainer' sx={{display: "grid"}}>
            <div className="produto_input" onClick={selectProduct}>         
                <input type="radio" name="produto" id="Produto1" className="product" onClick={()=>{selected = 0}} />
                <label htmlFor="Produto1"><img src={props.image1}/></label>
            </div>
            <div className="produto_input" onClick={selectProduct}>
                <input type="radio" name="produto" id="Produto2" className="product" onClick={()=>{selected = 1}}/>
                <label htmlFor="Produto2"><img src={props.image2}/></label>
            </div>
            <div className="produto_input" onClick={selectProduct}>
                <input type="radio" name="produto" id="Produto3" className="product" onClick={()=>{selected = 2}}/>
                <label htmlFor="Produto3"><img src={props.image3}/></label>
            </div>
            <div className="produto_input" onClick={selectProduct}> 
                <input type="radio" name="produto" id="Produto4" className="product" onClick={()=>{selected = 3}}/>
                <label htmlFor="Produto4"><img src={props.image4}/></label>
            </div>
            <div className="produto_input" onClick={selectProduct}>
                <input type="radio" name="produto" id="Produto5" className="product" onClick={()=>{selected = 4}}/>
                <label htmlFor="Produto5"><img src={props.image5}/></label>
            </div>
            <div className="produto_input" onClick={selectProduct}>
                <input type="radio" name="produto" id="Produto6" className="product" onClick={()=>{selected = 5}}/>
                <label htmlFor="Produto6"><img src={props.image6}/></label>
            </div>
            <div className="produto_input" onClick={selectProduct}>
                <input type="radio" name="produto" id="Produto7" className="product" onClick={()=>{selected = 6}}/>
                <label htmlFor="Produto7"><img src={props.image7}/></label>
            </div>
            <div className="produto_input" onClick={selectProduct}> 
                <input type="radio" name="produto" id="Produto8" className="product" onClick={()=>{selected = 7}}/>
                <label htmlFor="Produto8"><img src={props.image8}/></label>
            </div>
        </Box>

        <Box className="outputProd" sx={{padding: "20px"}}>
            <section style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Box className='produtoNome' sx={{color: 'white'}}>
                    <p style={{color:'gray', textAlign: 'center', padding: "5px"}}>Nome do produto</p>
                    {pText === '' ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : <p style={{fontSize: "1.2rem"}}>{pText}</p>}
                </Box>
            </section>
            <Divider color="gray" sx={{margin: '10px 0'}}/>
            <section style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Box sx={{color: 'white'}} className='produtoNome'>
                    <p style={{color:'gray', textAlign: 'center', padding: "5px"}}>Preços entre</p>
                    {pPreco === '' ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : <p style={{textAlign: 'center'}}>{pPreco}</p>}
                </Box>
            </section>
            <Divider color="gray" sx={{margin: '10px 0'}}/>
            <section style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Box sx={{color: 'white'}} className='produtoNome'>
                    <p style={{color:'gray', textAlign: 'center', padding: "5px"}}>Preço em media</p>
                    {pMedia === 0 ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : <p style={{textAlign: 'center'}}>R${pMedia},00</p>}
                </Box>
            </section>
        </Box>
    </>
}