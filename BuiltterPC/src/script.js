export const tituloSobre = document.getElementById('Titulo_sobre');
export const descSobre = document.getElementById('Desc_sobre');
export const imageSobre = document.getElementById('Image_sobre');

import imageSuporte from './assets/imagens/ImageSuporte.png';
import imageSimulacao from './assets/imagens/ImageSimulacao.png';
import imagePromocao from './assets/imagens/ImagePromocao.png';
import imageForum from './assets/imagens/ImageForum.png';

import imageKuribuh from './assets/imagens/perfil-kuribuh.png';
import imageUnknown from './assets/imagens/perfil-desconhecido.png';

import thumbnail0 from './assets/imagens/thumbnail-0.png';
import thumbnail1 from './assets/imagens/thumbnail-1.png';
import thumbnail2 from './assets/imagens/thumbnail-2.png';

import molde0 from './assets/imagens/molde-0.png';
import molde1 from './assets/imagens/molde-1.png';

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
    descricao: 'Catalogo de promoções das lojas mais conhecidas do Brasil e do exterior, opção de notificações das promoções e filtragem e busca para peças específicas ',
    imagem: imageForum,
};

const video0 = {
    nome: 'Montando um computado...',
    descricao: 'Neste video mostraremos o passo a passo de como montar um PC. Não se esqueça de deixar o like caso t...',
    imagem: thumbnail0,
}
const video1 = {
    nome: 'Como formatar um compu...',
    descricao: 'Neste video mostraremos o passo a passo de como formatar um PC no windows 10. Não se esqueça de...',
    imagem: thumbnail1,
}
const video2 = {
    nome: 'Configurando uma placa d...',
    descricao: 'Neste video mostraremos o passo a passo de como configurar uma placa de video, usando o software da...',
    imagem: thumbnail2,
}

const simulacao0 ={
    nome: 'Molde 1',
    imagem: molde0,
}
const simulacao1 ={
    nome: 'Molde 2',
    imagem: molde1,
}
const simulacao2 ={
    nome: 'Molde 3',
    imagem: molde1,
}
const simulacao3 ={
    nome: 'Molde 4',
    imagem: molde1,
}

const promo0 ={
    nome: 'a',
    descricao: 'a',
    imagem: 'a',
}
const promo1 ={
    nome: 'a',
    descricao: 'a',
    imagem:'a',
}
const promo2 ={
    nome: 'a',
    descricao: 'a',
    imagem: 'a',
}

const comentario0 ={
    nome: 'Kuribuh',
    descricao: 'Eu abro muitos jogos porém quando abro vários PW e a memória atinge 61% de uso e tenro abrir navegador ou ate mais PW"S o Pc trava, e as vezes desinstala sozinho o softwaree da placa devídeo. Alguem sabe como resolver ?',
    imagem: imageKuribuh,
}
const comentario1 ={
    nome: 'Usuario_Secreto',
    descricao: 'é minha primeira vez com uma GTX, e a minha é GTX 1050, ela é usada, a minha dúvida é, posso  colocar thermal pads nos chips que ficam perto  do chip gráfico ? (não sei se é esse o nome kkkk) irei colocar só para poder ajudar na temperatura,  ela não está com alta temperatura nem nada, pretendo mais para manter a vida dela ainda.',
    imagem: imageUnknown,
}
const comentario2 ={
    nome: 'Caroline Macedo Costa Silva',
    descricao: 'não sei se uma Fonte Atx Gamer Semi-modular 600w Real 80plus Pfc Ativo Nf seria bom para esse processador e placa de Vídeo ou procuro outra melhor',
    imagem: imageUnknown,
}

export const suporteLista = [video0,video1,video2];
export const simulacaoLista = [simulacao0,simulacao1,simulacao2];
export const promocaoLista = [promo0,promo1,promo2];
export const comentarioLista = [comentario0,comentario1,comentario2];

export const sessoesLista = [suporteTecnico, simulacaoMontagem, promocaoPecas, forum];


