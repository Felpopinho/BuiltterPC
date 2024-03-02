import { Box, Typography } from "@mui/material";
import { maeObject, processadoresObject, memoriasObject, armazensObject, pvideosObject, fontesObject } from "../script";

export function ProdutosMolde(props){

    return <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, width: '50%'}}>
        <div className="produto_input">         
            <input type="radio" name="produto" id="Produto1" onChange={() => {maeObject.produtoChecked1 = 'checked'}}/>
            <label htmlFor="Produto1"><img src={props.image1}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto2" />
            <label htmlFor="Produto2"><img src={props.image2}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto3" />
            <label htmlFor="Produto3"><img src={props.image3}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto4" />
            <label htmlFor="Produto4"><img src={props.image4}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto5" />
            <label htmlFor="Produto5"><img src={props.image5}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto6" />
            <label htmlFor="Produto6"><img src={props.image6}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto7" />
            <label htmlFor="Produto7"><img src={props.image7}/></label>
        </div>
        <div className="produto_input">
            <input type="radio" name="produto" id="Produto8" />
            <label htmlFor="Produto8"><img src={props.image8}/></label>
        </div>

    </Box>
}

export function DescMolde(props){
    return <Box>
        <Typography sx={{color:'white'}}>{maeObject.produtoChecked1 === 'checked' ? props.nome1 : 'a'}</Typography>
    </Box>
}