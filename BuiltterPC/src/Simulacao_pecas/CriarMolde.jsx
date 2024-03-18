import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { processadoresObject, memoriasObject, pvideosObject, armazensObject, fontesObject, maeObject } from "../script";

export function ProdutosMolde(props){

    let section = props.sessao

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

    
    const [nMae, setNmae] = useState(''); const [srcMae, setSrcMae] = useState(''); const [pMae , setPmae] = useState(''); const [pMediaMae , setPMediamae] = useState(0);
    const [nPro, setNpro] = useState(''); const [srcPro, setSrcPro] = useState(''); const [pPro , setPpro] = useState(''); const [pMediaPro , setPMediapro] = useState(0);
    const [nMem, setNmem] = useState(''); const [srcMem, setSrcMem] = useState(''); const [pMem , setPmem] = useState(''); const [pMediaMem , setPMediamem] = useState(0);
    const [nArm, setNarm] = useState(''); const [srcArm, setSrcArm] = useState(''); const [pArm , setParm] = useState(''); const [pMediaArm , setPMediaarm] = useState(0);
    const [nVid, setNvid] = useState(''); const [srcVid, setSrcVid] = useState(''); const [pVid , setPvid] = useState(''); const [pMediaVid , setPMediavid] = useState(0);
    const [nFon, setNfon] = useState(''); const [srcFon, setSrcFon] = useState(''); const [pFon , setPfon] = useState(''); const [pMediaFon , setPMediafon] = useState(0);

    const iMae = [maeObject.image1, maeObject.image2, maeObject.image3, maeObject.image4, maeObject.image5, maeObject.image6, maeObject.image7, maeObject.image8];
    const iPro = [processadoresObject.image1, processadoresObject.image2, processadoresObject.image3, processadoresObject.image4, processadoresObject.image5, processadoresObject.image6, processadoresObject.image7, processadoresObject.image8];
    const iMem = [memoriasObject.image1, memoriasObject.image2, memoriasObject.image3, memoriasObject.image4, memoriasObject.image5, memoriasObject.image6, memoriasObject.image7, memoriasObject.image8];
    const iArm = [armazensObject.image1, armazensObject.image2, armazensObject.image3, armazensObject.image4, armazensObject.image5, armazensObject.image6, armazensObject.image7, armazensObject.image8];
    const iVid = [pvideosObject.image1, pvideosObject.image2, pvideosObject.image3, pvideosObject.image4, pvideosObject.image5, pvideosObject.image6, pvideosObject.image7, pvideosObject.image8];
    const iFon = [fontesObject.image1, fontesObject.image2, fontesObject.image3, fontesObject.image4, fontesObject.image5, fontesObject.image6, fontesObject.image7, fontesObject.image8];

    const [pTotal, setPtotal] = useState(0)

    const selectProduct = (nome) =>{
        section === 1 ? (setNmae(nome), setPmae(precoLista[selected]), setSrcMae(iMae[selected]), setPMediamae(Number(pMedia))):
        section === 2 ? (setNpro(nome), setPpro(precoLista[selected]), setSrcPro(iPro[selected]), setPMediapro(Number(pMedia))):
        section === 3 ? (setNmem(nome), setPmem(precoLista[selected]), setSrcMem(iMem[selected]), setPMediamem(Number(pMedia))):
        section === 4 ? (setNarm(nome), setParm(precoLista[selected]), setSrcArm(iArm[selected]), setPMediaarm(Number(pMedia))):
        section === 5 ? (setNvid(nome), setPvid(precoLista[selected]), setSrcVid(iVid[selected]), setPMediavid(Number(pMedia))):
        (setNfon(nome), setPfon(precoLista[selected]), setSrcFon(iFon[selected]), setPMediafon(Number(pMedia)));
        setPtotal(pMediaMae + pMediaPro + pMediaMem + pMediaArm + pMediaVid + pMediaFon);
    }


    return <>
        <Box sx={section === 7 ? {display: "block"} : {display: "none"}}>
            <Typography variant="h4" fontWeight={600}>
                Produtos selecionados:
            </Typography>
            <Box sx={{height: "20vh", overflowY: "scroll"}}>
                <Box className="sel_prod_container">
                    <img src={srcMae}/>
                    <div>
                        <p>{nMae}</p>
                        <p>{pMae}</p>
                    </div>
                </Box>
                <Divider sx={{margin: "10px 0 10px 0"}}/>
                <Box className="sel_prod_container">
                    <img src={srcPro}/>
                    <div>
                        <p>{nPro}</p>
                        <p>{pPro}</p>
                    </div>
                </Box>
                <Divider sx={{margin: "10px 0 10px 0"}}/>
                <Box className="sel_prod_container">
                    <img src={srcMem}/>
                    <div>
                        <p>{nMem}</p>
                        <p>{pMem}</p>
                    </div>
                </Box>
                <Divider sx={{margin: "10px 0 10px 0"}}/>
                <Box className="sel_prod_container">
                    <img src={srcArm}/>
                    <div>
                        <p>{nArm}</p>
                        <p>{pArm}</p>
                    </div>
                </Box>
                <Divider sx={{margin: "10px 0 10px 0"}}/>
                <Box className="sel_prod_container">
                    <img src={srcVid}/>
                    <div>
                        <p>{nVid}</p>
                        <p>{pVid}</p>
                    </div>
                </Box>
                <Divider sx={{margin: "10px 0 10px 0"}}/>
                <Box className="sel_prod_container">
                    <img src={srcFon}/>
                    <div>
                        <p>{nFon}</p>
                        <p>{pFon}</p>
                    </div>
                </Box>
            </Box>
            <Box>
                <p>{pTotal}</p>
            </Box>
        </Box>
        <Box id='produtosContainer' sx={section === 7 ? {display: "none"} : {display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, width: '40%', alignContent: 'center', justifyItems: 'center'}} onChange={() => {handleProduct(nomeLista[selected], precoLista[selected])}}>
            <div className="produto_input" onClick={() => {selectProduct(nomeLista[selected])}}>         
                <input type="radio" name="produto" id="Produto1" className="product" onClick={() => {selected = 0}}/>
                <label htmlFor="Produto1"><img src={props.image1}/></label>
            </div>
            <div className="produto_input" onClick={() => {selectProduct(nomeLista[selected])}}>
                <input type="radio" name="produto" id="Produto2" className="product" onClick={() => {selected = 1}}/>
                <label htmlFor="Produto2"><img src={props.image2}/></label>
            </div>
            <div className="produto_input" onClick={() => {selectProduct(nomeLista[selected])}}>
                <input type="radio" name="produto" id="Produto3" className="product" onClick={() => {selected = 2}}/>
                <label htmlFor="Produto3"><img src={props.image3}/></label>
            </div>
            <div className="produto_input" onClick={() => {selectProduct(nomeLista[selected])}}> 
                <input type="radio" name="produto" id="Produto4" className="product" onClick={() => {selected = 3}}/>
                <label htmlFor="Produto4"><img src={props.image4}/></label>
            </div>
            <div className="produto_input" onClick={() => {selectProduct(nomeLista[selected])}}>
                <input type="radio" name="produto" id="Produto5" className="product" onClick={() => {selected = 4}}/>
                <label htmlFor="Produto5"><img src={props.image5}/></label>
            </div>
            <div className="produto_input" onClick={() => {selectProduct(nomeLista[selected])}}>
                <input type="radio" name="produto" id="Produto6" className="product" onClick={() => {selected = 5}}/>
                <label htmlFor="Produto6"><img src={props.image6}/></label>
            </div>
            <div className="produto_input" onClick={() => {selectProduct(nomeLista[selected])}}>
                <input type="radio" name="produto" id="Produto7" className="product" onClick={() => {selected = 6}}/>
                <label htmlFor="Produto7"><img src={props.image7}/></label>
            </div>
            <div className="produto_input" onClick={() => {selectProduct(nomeLista[selected])}}> 
                <input type="radio" name="produto" id="Produto8" className="product" onClick={() => {selected = 7}}/>
                <label htmlFor="Produto8"><img src={props.image8}/></label>
            </div>
        </Box>

        <Box sx={section === 7 ? {display: "none"} : {width: '40%', height: 'auto', backgroundColor: '#292929', borderRadius: '20px', padding: '20px'}}>
            <section style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{color: 'white'}} variant="h5" id='produtoNome'>
                    <p style={{color:'gray', textAlign: 'center'}}>Nome do produto</p>
                    {pText === '' ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : pText}
                </Typography>
            </section>
            <Divider color="gray" sx={{margin: '15px 0'}}/>
            <section style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{color: 'white'}} variant="h5" id='produtoNome'>
                    <p style={{color:'gray', textAlign: 'center'}}>Preços entre</p>
                    {pPreco === '' ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : <p style={{textAlign: 'center'}}>{pPreco}</p>}
                </Typography>
            </section>
            <Divider color="gray" sx={{margin: '15px 0'}}/>
            <section style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{color: 'white'}} variant="h5" id='produtoNome'>
                    <p style={{color:'gray'}}>Preço em media</p>
                    {pMedia === '' ? <p style={{textAlign: 'center', color: 'gray'}}>...</p> : <p style={{textAlign: 'center'}}>R${pMedia},00</p>}
                </Typography>
            </section>
        </Box>
    </>
}