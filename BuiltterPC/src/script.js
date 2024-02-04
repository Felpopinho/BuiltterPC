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
    video_nome: 'Montando um computado...',
    video_descricao: 'Neste video mostraremos o passo a passo de como montar um PC. Não se esqueça de deixar o like caso t...',
    video_imagem: thumbnail0,
    video_class1: 'display_suporte',
    video_class2: 'display_suporte_container',
}
const video1 = {
    video_nome: 'Como formatar um compu...',
    video_descricao: 'Neste video mostraremos o passo a passo de como formatar um PC no windows 10. Não se esqueça de...',
    video_imagem: thumbnail1,
}
const video2 = {
    video_nome: 'Configurando uma placa d...',
    video_descricao: 'Neste video mostraremos o passo a passo de como configurar uma placa de video, usando o software da...',
    video_imagem: thumbnail2,
}

const simulacao0 ={
    simulacao_nome: 'Moldes feitos',
    simulacao_imagem: molde0,
    simulacao_class1: 'display_simulacao',
    simulacao_class2: 'display_simulacao_container',
}
const simulacao1 ={
    simulacao_nome: 'Moldes feitos',
    simulacao_imagem: molde1,
    simulacao_class1: 'display_simulacao',
    simulacao_class2: 'display_simulacao_container',
}
const simulacao2 ={
    simulacao_nome: 'Moldes feitos',
    simulacao_imagem: molde1,
    simulacao_class1: 'display_simulacao',
    simulacao_class2: 'display_simulacao_container',
}
const simulacao3 ={
    simulacao_nome: 'Moldes feitos',
    simulacao_imagem: molde1,
    simulacao_class1: 'display_simulacao',
    simulacao_class2: 'display_simulacao_container',
}

const promo0 ={
    promocao_nome: 'a',
    promocao_descricao: 'a',
    promocao_imagem: 'a',
    promocao_class1: 'display_promo',
    promocao_class2: 'display_promo_container',
}
const promo1 ={
    promocao_nome: 'a',
    promocao_descricao: 'a',
    promocao_imagem:'a',
    promocao_class1: 'display_promo',
    promocao_class2: 'display_promo_container',
}
const promo2 ={
    promocao_nome: 'a',
    promocao_descricao: 'a',
    promocao_imagem: 'a',
    promocao_class1: 'display_promo',
    promocao_class2: 'display_promo_container',
}

const comentario0 ={
    forum_nome: 'Kuribuh',
    forum_descricao: 'Eu abro muitos jogos porém quando abro vários PW e a memória atinge 61% de uso e tenro abrir navegador ou ate mais PW"S o Pc trava, e as vezes desinstala sozinho o softwaree da placa devídeo. Alguem sabe como resolver ?',
    forum_imagem: imageKuribuh,
    forum_class1: 'display_forum',
    forum_class2: 'display_forum_container',
}
const comentario1 ={
    forum_nome: 'Usuario_Secreto',
    forum_descricao: 'é minha primeira vez com uma GTX, e a minha é GTX 1050, ela é usada, a minha dúvida é, posso  colocar thermal pads nos chips que ficam perto  do chip gráfico ? (não sei se é esse o nome kkkk) irei colocar só para poder ajudar na temperatura,  ela não está com alta temperatura nem nada, pretendo mais para manter a vida dela ainda.',
    forum_imagem: imageUnknown,
    forum_class1: 'display_forum',
    forum_class2: 'display_forum_container',
}
const comentario2 ={
    forum_nome: 'Caroline Macedo Costa Silva',
    forum_descricao: 'não sei se uma Fonte Atx Gamer Semi-modular 600w Real 80plus Pfc Ativo Nf seria bom para esse processador e placa de Vídeo ou procuro outra melhor',
    forum_imagem: imageUnknown,
    forum_class1: 'display_forum',
    forum_class2: 'display_forum_container',
}

export const suporteLista = [video0,video1,video2];
export const simulacaoLista = [simulacao0,simulacao1,simulacao2];
export const promocaoLista = [promo0,promo1,promo2];
export const comentarioLista = [comentario0,comentario1,comentario2];

export const sessoesLista = [suporteTecnico, simulacaoMontagem, promocaoPecas, forum];


