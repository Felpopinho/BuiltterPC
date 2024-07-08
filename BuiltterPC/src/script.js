//Variaveis de elementos
import axios from 'axios';

export const perfilUsuario = document.getElementById('UserPerfil');
export const emailUsuario = document.getElementById('UserEmail');
export const nomeUsuario = document.getElementById('UserName');
export const senhaUsuario = document.getElementById('UserPassword');

export const tituloSobre = document.getElementById('Titulo_sobre');
export const descSobre = document.getElementById('Desc_sobre');
export const imageSobre = document.getElementById('Image_sobre');

export const inputSup = document.getElementById('nav_sup');
export const inputSim = document.getElementById('nav_sim');
export const inputPro = document.getElementById('nav_pro');
export const inputFor = document.getElementById('nav_for');

//IMPORTAÇÕES DE IMAGENS

//Imagens sessoes
import imageSuporte from './assets/imagens/ImageSuporte.png';
import imageSimulacao from './assets/imagens/ImageSimulacao.png';
import imagePromocao from './assets/imagens/ImagePromocao.png';
import imageForum from './assets/imagens/ImageForum.png';

//Imagens thumbnails dos videos
import thumbnail0 from './assets/imagens/thumbnail-0.png';
import thumbnail1 from './assets/imagens/thumbnail-1.png';
import thumbnail2 from './assets/imagens/thumbnail-2.png';
import thumbnail3 from './assets/imagens/thumbnail-3.jpg';
import thumbnail4 from './assets/imagens/thumbnail-deleted.jpg'

//Imagens dos processadores
import processador0 from './assets/imagens/produtos/1-processador.png'
import processador1 from './assets/imagens/produtos/2-processador.png'
import processador2 from './assets/imagens/produtos/3-processador.png'
import processador3 from './assets/imagens/produtos/4-processador.png'
import processador4 from './assets/imagens/produtos/5-processador.png'
import processador5 from './assets/imagens/produtos/6-processador.png'
import processador6 from './assets/imagens/produtos/7-processador.png'
import processador7 from './assets/imagens/produtos/8-processador.png'

//Imagens das memorias ram
import memoria0 from './assets/imagens/produtos/1-memoria.png'
import memoria1 from './assets/imagens/produtos/2-memoria.png'
import memoria2 from './assets/imagens/produtos/3-memoria.png'
import memoria3 from './assets/imagens/produtos/4-memoria.png'
import memoria4 from './assets/imagens/produtos/5-memoria.png'
import memoria5 from './assets/imagens/produtos/6-memoria.png'
import memoria6 from './assets/imagens/produtos/7-memoria.png'
import memoria7 from './assets/imagens/produtos/8-memoria.png'

//Imagens das placas de video
import pvideo0 from './assets/imagens/produtos/1-video.png'
import pvideo1 from './assets/imagens/produtos/2-video.png'
import pvideo2 from './assets/imagens/produtos/3-video.png'
import pvideo3 from './assets/imagens/produtos/4-video.png'
import pvideo4 from './assets/imagens/produtos/5-video.png'
import pvideo5 from './assets/imagens/produtos/6-video.png'
import pvideo6 from './assets/imagens/produtos/7-video.png'
import pvideo7 from './assets/imagens/produtos/8-video.png'

//Imagens das placas-mães
import mae0 from './assets/imagens/produtos/1-mae.png'
import mae1 from './assets/imagens/produtos/2-mae.png'
import mae2 from './assets/imagens/produtos/3-mae.png'
import mae3 from './assets/imagens/produtos/4-mae.png'
import mae4 from './assets/imagens/produtos/5-mae.png'
import mae5 from './assets/imagens/produtos/6-mae.png'
import mae6 from './assets/imagens/produtos/7-mae.png'
import mae7 from './assets/imagens/produtos/8-mae.png'

//Imagens dos armazenamentos
import armazem0 from './assets/imagens/produtos/1-armazem.png'
import armazem1 from './assets/imagens/produtos/2-armazem.png'
import armazem2 from './assets/imagens/produtos/3-armazem.png'
import armazem3 from './assets/imagens/produtos/4-armazem.png'
import armazem4 from './assets/imagens/produtos/5-armazem.png'
import armazem5 from './assets/imagens/produtos/6-armazem.png'
import armazem6 from './assets/imagens/produtos/7-armazem.png'
import armazem7 from './assets/imagens/produtos/8-armazem.png'

//Imagens das fontes
import fonte0 from './assets/imagens/produtos/1-fonte.png'
import fonte1 from './assets/imagens/produtos/2-fonte.png'
import fonte2 from './assets/imagens/produtos/3-fonte.png'
import fonte3 from './assets/imagens/produtos/4-fonte.png'
import fonte4 from './assets/imagens/produtos/5-fonte.png'
import fonte5 from './assets/imagens/produtos/6-fonte.png'
import fonte6 from './assets/imagens/produtos/7-fonte.png'
import fonte7 from './assets/imagens/produtos/8-fonte.png'

import produto1 from './assets/imagens/produto1.png';
import produto2 from './assets/imagens/produto2.png';

//Imagens fotos de perfil
import imageKuribuh from './assets/imagens/perfil-kuribuh.png';
import imageUnknown from './assets/imagens/perfil-desconhecido.png';

//Video
import video from './assets/video.mp4'

//Imagens dos templates dos produtos
import t_processador from './assets/imagens/processador_template.png'
import t_memoria from './assets/imagens/memoria_template.webp'
import t_armazem from './assets/imagens/armazem_template.jpeg'
import t_pvideo from './assets/imagens/pvideo_template.webp'
import t_fonte from './assets/imagens/fonte_template.webp'
import t_mae from './assets/imagens/mae_template.png'

//Imagens dos icones dos produtos
import i_processador from './assets/imagens/processador.png'
import i_mae from './assets/imagens/placa-mae.png'
import i_memoria from './assets/imagens/memoria-ram.png'
import i_pvideo from './assets/imagens/placa-grafica.png'
import i_armazem from './assets/imagens/ssd.png'
import i_fonte from './assets/imagens/fonte-de-energia.png'

//imagem perfil desconhecido em uma const
export  const perfilDesconhecido = imageUnknown

//Array das imagens de templates dos produtos
export const templateImagens= [t_processador, t_armazem, t_fonte, t_mae, t_memoria, t_pvideo]

//Variavel do video
export const videos = video;

//Objeto da conta do usuario
export const previewUser ={
    idUser: '',
    usuario: '',
    email: '',
    perfil: '',
    senha: '',
    titulo: '',
    descricao: '',
}

//Objeto da descrição das sessoes:
const suporteTecnico ={
    nome: 'Suporte Técnico',
    descricao: 'Disponibilizamos diversos videos de suporte técnico para resolução de problemas envolvendo computação',
    imagem: imageSuporte,
};
const simulacaoMontagem ={
    nome: 'Simulação de Montagem',
    descricao: 'Sessão inteira com catalogo de peças imenso, atualizado em tempo real para simulações de preço (com perspectivas de diveras lojas) das peças do seu futuro computador',
    imagem: imageSimulacao,
};
const promocaoPecas ={
    nome: 'Promoções de peças',
    descricao: 'Catálogo de promoções das lojas mais conhecidas do Brasil e do exterior, opção de notificações das promoções e filtragem e busca para peças específicas',
    imagem: imagePromocao,
};
const forum ={
    nome: 'Forum de Reviews e Dicas',
    descricao: 'Converse com diversas pessoas interessadas nos diversos assuntos de hardware, tire duvidas, responda duvidas e se divirta com o forum de review e dicas',
    imagem: imageForum,
};

//OBJETOS DE DADOS DAS SESSÕES:

//Objetos das promoções
const promo0 ={
    promocao_nome: 'ASUS TUF Gaming GeForce® GTX 1660 Ti EVO OC Edition 6GB GDDR6',
    promocao_preco:'R$4100,00',
    promocao_porcentagem: '40%Off',
    promocao_oferta: 'R$2460,00',
    promocao_imagem: produto1,
    promocao_id: "pvideo"
}
const promo1 ={
    promocao_preco: 'R$725,00',
    promocao_nome: 'Memória PNY 32GB 3200Mhz DDR4 2X16GB XLR8 GAMING',
    promocao_porcentagem: '45%Off',
    promocao_oferta: 'R$456,25',
    promocao_imagem: memoria5,
    promocao_id: "memoria"
}
const promo2 ={
    promocao_preco: 'R$1050,00',
    promocao_nome: 'Placa Mãe Gigabyte B450M Gaming, Chipset B450, AMD AM4, mATX, DDR4',
    promocao_porcentagem: '35%Off',
    promocao_oferta: 'R$683,50',
    promocao_imagem: mae2,
    promocao_id: "mae"
}
const promo3 ={
    promocao_preco: 'R$900,00',
    promocao_nome: 'Processador Ryzen 3 2200G 3.5GHz 6MB AM4, AMD, Ryzen 3 2200G',
    promocao_porcentagem: '20%Off',
    promocao_oferta: 'R$720,00',
    promocao_imagem: processador0,
    promocao_id: "processador"
}
const promo4 ={
    promocao_preco: 'R$375,00',
    promocao_nome: 'SSD 480 GB Kingston A400, SATA, Leitura: 500MB/s ',
    promocao_porcentagem: '10%Off',
    promocao_oferta: 'R$179,99',
    promocao_imagem: armazem4,
    promocao_id: "armazem"
}
const promo5 ={
    promocao_preco: 'R$2600,00',
    promocao_nome: 'Placa de Video Gigabyte Radeon RX 6500 XT Gaming OC, 4GB, GDDR6, 64-Bit',
    promocao_porcentagem: '15%Off',
    promocao_oferta: 'R$2210,00',
    promocao_imagem: pvideo4,
    promocao_id: "pvideo"
}
const promo6 ={
    promocao_preco: 'R$645,00',
    promocao_nome: 'FONTE CORSAIR CV SERIES CV650 80 PLUS BRONZE 650W',
    promocao_porcentagem: '15%Off',
    promocao_oferta: 'R$549,00',
    promocao_imagem: produto2,
    promocao_id: "fonte"
}
const promo7 ={
    promocao_preco: 'R$575,00',
    promocao_nome: "HD Seagate 2TB BarraCuda, 3.5', SATA - ST2000DM008",
    promocao_porcentagem: '35%Off',
    promocao_oferta: 'R$683,50',
    promocao_imagem: armazem7,
    promocao_id: "armazem"
}
const promo8 = {
    promocao_preco: 'R$1900,00',
    promocao_nome: "Placa Mãe Gigabyte Z390 M GAMING, Chipset Z390, Intel LGA 1151, mATX, DDR4",
    promocao_porcentagem: '35%Off',
    promocao_oferta: 'R$1.235,00',
    promocao_imagem: mae5,
    promocao_id: "mae"
}
const promo9 = {
    promocao_preco: 'R$1125,00',
    promocao_nome: "Placa Mãe Gigabyte B550M AORUS Elite, Chipset B550, AMD AM4, mATX, DDR4",
    promocao_porcentagem: '10%Off',
    promocao_oferta: 'R$1.012,00',
    promocao_imagem: mae4,
    promocao_id: "mae"
}
const promo10 = {
    promocao_preco: 'R$425,00',
    promocao_nome: "Placa Mãe Gigabyte GA-H170-Gaming 3, DDR4 chipset H170, LGA 1151",
    promocao_porcentagem: '15%Off',
    promocao_oferta: 'R$361,00',
    promocao_imagem: mae1,
    promocao_id: "mae"
}
const promo11 = {
    promocao_preco: 'R$675,00',
    promocao_nome: "Fonte Gamer Corsair VS500 500W 80 Plus White c/ Cabo",
    promocao_porcentagem: '35%Off',
    promocao_oferta: 'R$438,75',
    promocao_imagem: fonte1,
    promocao_id: "fonte"
}
const promo12 = {
    promocao_preco: 'R$1500,00',
    promocao_nome: "Fonte 1050w Cooler Master 80 Plus Gold Full Modular - MPE-A501-AFCAG-WO",
    promocao_porcentagem: '10%Off',
    promocao_oferta: 'R$1.350,00',
    promocao_imagem: fonte7,
    promocao_id: "fonte"
}
const promo13 = {
    promocao_preco: 'R$475,00',
    promocao_nome: "Fonte AeroCool KCAS Full Range, 700W, 80 Plus Bronze , KCAS-700W",
    promocao_porcentagem: '40%Off',
    promocao_oferta: 'R$285,00',
    promocao_imagem: fonte4,
    promocao_id: "fonte"
}
const promo14 = {
    promocao_preco: 'R$1450,00',
    promocao_nome: "Placa de video RX 570 4GB Powercolor Red Dragon",
    promocao_porcentagem: '30%Off',
    promocao_oferta: 'R$1.015,00',
    promocao_imagem: pvideo0,
    promocao_id: "pvideo"
}
const promo15 = {
    promocao_preco: 'R$5775,00',
    promocao_nome: "Placa de Vídeo Palit NVIDIA GeForce RTX 3080 Ti GameRock, LHR, 12GB",
    promocao_porcentagem: '10%Off',
    promocao_oferta: 'R$5.197,50',
    promocao_imagem: pvideo6,
    promocao_id: "pvideo"
}
const promo16 = {
    promocao_preco: 'R$1000,00',
    promocao_nome: "Ssd Intel 320 Series 600gb",
    promocao_porcentagem: '25%Off',
    promocao_oferta: 'R$750,00',
    promocao_imagem: armazem3,
    promocao_id: "armazem"
}
const promo17 = {
    promocao_preco: 'R$675,00',
    promocao_nome: "HD Interno WD Purple 3TB Surveillance SATA III 6GB/s 5400 RPM WD30PURZ",
    promocao_porcentagem: '30%Off',
    promocao_oferta: 'R$472,5',
    promocao_imagem: armazem5,
    promocao_id: "armazem"
}
const promo18 = {
    promocao_preco: 'R$200,00',
    promocao_nome: "Memória Gamer Husky Gaming, 4GB, 2666Mhz",
    promocao_porcentagem: '50%Off',
    promocao_oferta: 'R$100,00',
    promocao_imagem: memoria0,
    promocao_id: "memoria"
}
const promo19 = {
    promocao_preco: 'R$1175,00',
    promocao_nome: "Memória Kingston Fury Beast, RGB, 32GB (4x8GB), 3600MHz, DDR4, CL17, Preto",
    promocao_porcentagem: '25%Off',
    promocao_oferta: 'R$881,25',
    promocao_imagem: memoria7,
    promocao_id: "memoria"
}
const promo20 = {
    promocao_preco: 'R$400,00',
    promocao_nome: "Memoria Ram Gamer Ddr4 Gloway 2x8gb 16gb 3200mhz Branca Rgb",
    promocao_porcentagem: '20%Off',
    promocao_oferta: 'R$320,00',
    promocao_imagem: memoria3,
    promocao_id: "memoria"
}
const promo21 = {
    promocao_preco: 'R$3200,00',
    promocao_nome: "Processador AMD Ryzen 9 7900X3D (AM5/12 Cores/24 Threads/5.6GHz/140MB Cache)",
    promocao_porcentagem: '15%Off',
    promocao_oferta: 'R$2.720,00',
    promocao_imagem: processador7,
    promocao_id: "processador"
}
const promo22 = {
    promocao_preco: 'R$825,00',
    promocao_nome: "Processador Intel Core i5 10400F 2.90GHz (4.30GHz Turbo), 10ª Geração, 6-Cores 12-Threads",
    promocao_porcentagem: '5%Off',
    promocao_oferta: 'R$783,75',
    promocao_imagem: processador2,
    promocao_id: "processador"
}
const promo23 = {
    promocao_preco: 'R$2050,00',
    promocao_nome: "Processador Intel Core i7 10700 2.90GHz (4.70GHz Turbo), 10ª Geração, 8-Cores 16-Thread",
    promocao_porcentagem: '20%Off',
    promocao_oferta: 'R$1.640,00',
    promocao_imagem: processador5,
    promocao_id: "processador"
}



//Objetos dos comentarios
const comentario0 ={
    forum_nome: 'Kuribuh',
    forum_descricao: 'Eu abro muitos jogos porém quando abro vários PW e a memória atinge 61% de uso e tenro abrir navegador ou ate mais PW"S o Pc trava, e as vezes desinstala sozinho o softwaree da placa devídeo. Alguem sabe como resolver ?',
    forum_imagem: imageKuribuh,
}
const comentario1 ={
    forum_nome: 'Usuario_Secreto',
    forum_descricao: 'é minha primeira vez com uma GTX, e a minha é GTX 1050, ela é usada, a minha dúvida é, posso  colocar thermal pads nos chips que ficam perto  do chip gráfico ? (não sei se é esse o nome kkkk) irei colocar só para poder ajudar na temperatura,  ela não está com alta temperatura nem nada, pretendo mais para manter a vida dela ainda.',
    forum_imagem: imageUnknown,
}
const comentario2 ={
    forum_nome: 'Caroline Macedo Costa Silva',
    forum_descricao: 'não sei se uma Fonte Atx Gamer Semi-modular 600w Real 80plus Pfc Ativo Nf seria bom para esse processador e placa de Vídeo ou procuro outra melhor',
    forum_imagem: imageUnknown,
}

//Array dos objetos de dados das sessões
export const promocaoLista = [promo0,promo1,promo2,promo3,promo4,promo5,promo6,promo7,promo8,promo9,promo10,promo11,promo12,promo13,promo14,promo15,promo16,promo17,promo18,promo19,promo20,promo21,promo22,promo23];
export const comentarioLista = [comentario0,comentario1,comentario2];

export const sessoesLista = [suporteTecnico, simulacaoMontagem, promocaoPecas, forum];

//OBJETOS DE DADOS DOS PRODUTOS:

//Objeto dos icones de produtos
export const iconSection = {
    mae: i_mae,
    processador: i_processador,
    memoria: i_memoria,
    armazem: i_armazem,
    pvideo: i_pvideo,
    fonte: i_fonte,
}

//async function adicionarPromocoes(obj){
//    const res = await axios.post("http://localhost:3000/promocoes",{
//        promocao_nome: obj.promocao_nome,
//        promocao_preco: obj.promocao_preco,
//        promocao_porcentagem: obj.promocao_porcentagem,
//        promocao_oferta: obj.promocao_oferta,
//        promocao_imagem: obj.promocao_imagem,
//        promocao_tipo: obj.promocao_id
//    })
//    console.log(res.data)
//}
//
//for (let i = 0; i <= promocaoLista.length; i++){
//    adicionarPromocoes(promocaoLista[i])
//}
