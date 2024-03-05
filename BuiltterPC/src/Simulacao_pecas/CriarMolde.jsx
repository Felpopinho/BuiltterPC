import { Box, Typography } from "@mui/material";
import { maeObject, processadoresObject, memoriasObject, armazensObject, pvideosObject, fontesObject } from "../script";
import { useState } from "react";

export function ProdutosMolde(props){
    
    const p = document.querySelectorAll('.product');
    const [pText, setPText] = useState('');

    const handleSection = () =>{
        p.forEach((i) => {
            i.checked ?
            i.classList.add('checked') :
            i.classList.remove('checked')
            i.classList.contains('checked') ?
            document.getElementById('produtoNome').innerHTML = i.id :
            document.getElementById('produtoNome').innerHTML = 'nao'
        })
    }

    return <Box id='produtosContainer' sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, width: '40%', alignContent: 'center', justifyItems: 'center'}}>
        <div className="produto_input">         
            <input type="radio" name="produto" id="Produto1" className="product" onChange={handleSection}/>
            <label htmlFor="Produto1"><img src={props.image1}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto2" className="product" onChange={handleSection}/>
            <label htmlFor="Produto2"><img src={props.image2}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto3" className="product" onChange={handleSection}/>
            <label htmlFor="Produto3"><img src={props.image3}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto4" className="product" onChange={handleSection}/>
            <label htmlFor="Produto4"><img src={props.image4}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto5" className="product" onChange={handleSection}/>
            <label htmlFor="Produto5"><img src={props.image5}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto6" className="product" onChange={handleSection}/>
            <label htmlFor="Produto6"><img src={props.image6}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto7" className="product" onChange={handleSection}/>
            <label htmlFor="Produto7"><img src={props.image7}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto8" className="product" onChange={handleSection}/>
            <label htmlFor="Produto8"><img src={props.image8}/></label>
        </div>

        <Box>
            <Typography sx={{color: 'black'}} variant="h5" id='produtoNome'>
                
            </Typography>
        </Box>

    </Box>
}