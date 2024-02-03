export const tituloSobre = document.getElementById('Titulo_sobre');
export const descSobre = document.getElementById('Desc_sobre');
export const imageSobre = document.getElementById('Image_sobre');

import logo from './assets/imagens/Logo.png';
import imageSuporte from './assets/imagens/ImageSuporte.png';
import imageSimulacao from './assets/imagens/ImageSimulacao.png';
import imagePromocao from './assets/imagens/ImagePromocao.png';
import imageForum from './assets/imagens/ImageForum.png';

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

export const sessoesLista = [suporteTecnico, simulacaoMontagem, promocaoPecas, forum];

//const comentario0 ={
//    conta:,
//    comentario:,
//    perfil:,
//}
//const comentario1 ={
//    conta:,
//    comentario:,
//    perfil:,
//}
//const comentario2 ={
//    conta:,
//    comentario:,
//    perfil:,
//}
//const comentario3 ={
//    conta:,
//    comentario:,
//    perfil:,
//}

//export const comentarioLista = [comentario0,comentario1,comentario2,comentario3];
