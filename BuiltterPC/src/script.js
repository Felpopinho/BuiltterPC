export const perfilUsuario = document.getElementById('UserPerfil');
export const emailUsuario = document.getElementById('UserEmail');
export const nomeUsuario = document.getElementById('UserName');
export const senhaUsuario = document.getElementById('UserPassword');

export const proxPasso = document.getElementById('proxPassoBtn');

export const tituloSobre = document.getElementById('Titulo_sobre');
export const descSobre = document.getElementById('Desc_sobre');
export const imageSobre = document.getElementById('Image_sobre');

export const inputSup = document.getElementById('nav_sup');
export const inputSim = document.getElementById('nav_sim');
export const inputPro = document.getElementById('nav_pro');
export const inputFor = document.getElementById('nav_for');

import imageSuporte from './assets/imagens/ImageSuporte.png';
import imageSimulacao from './assets/imagens/ImageSimulacao.png';
import imagePromocao from './assets/imagens/ImagePromocao.png';
import imageForum from './assets/imagens/ImageForum.png';

import thumbnail0 from './assets/imagens/thumbnail-0.png';
import thumbnail1 from './assets/imagens/thumbnail-1.png';
import thumbnail2 from './assets/imagens/thumbnail-2.png';
import thumbnail3 from './assets/imagens/thumbnail-3.jpg';
import thumbnail4 from './assets/imagens/thumbnail-deleted.jpg'

import molde0 from './assets/imagens/molde-0.png';
import molde1 from './assets/imagens/molde-1.png';

import produto1 from './assets/imagens/produto1.png';

import imageKuribuh from './assets/imagens/perfil-kuribuh.png';
import imageUnknown from './assets/imagens/perfil-desconhecido.png';

export const previewUser ={
    usuario: '',
    email: '',
    perfil: '',
    senha: '',
    titulo: '',
    descricao: '',
}

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
    video_nome: 'Montando um computador do zero',
    video_descricao: 'Neste video mostraremos o passo a passo de como montar um PC. Não se esqueça de deixar o like caso tenha gostado e se inscrever no canal galera. Aproveitem e sigam a gente nas redes socias, e fiquem também por dentro do site da Builtter pc',
    video_imagem: thumbnail0,
    video_class1: 'display_suporte',
    video_class2: 'display_suporte_container',
    video_id: 'hardware',
    video_favorite: '',
    video_estatisticas: '544.503'
}
const video1 = {
    video_nome: 'Como formatar um computador PASSO a PASSO',
    video_descricao: 'Neste video mostraremos o passo a passo de como formatar um PC no windows 10. Não se esqueça de deixar o like caso tenha gostado e se inscrever no canal galera. Aproveitem e sigam a gente nas redes socias, e fiquem também por dentro do site da Builtter pc',
    video_imagem: thumbnail1,
    video_id: 'software',
    video_favorite: '',
    video_estatisticas: '487.387'
}
const video2 = {
    video_nome: 'Configurando uma placa da NVIDIA + dicas',
    video_descricao: 'Neste video mostraremos o passo a passo de como configurar uma placa de video, usando o software da NVIDIA.  Não se esqueça de deixar o like caso tenha gostado e se inscrever no canal galera. Aproveitem e sigam a gente nas redes socias, e fiquem também por dentro do site da Builtter pc',
    video_imagem: thumbnail2,
    video_id: 'software',
    video_favorite: '',
    video_estatisticas: '467.204'
}
const video3 = {
    video_nome: 'Testando até onde um Ryzen 3 consegue aguentar',
    video_descricao: 'Neste video vamos testar todo o pontêncial que o ryzen 3 pode ter. Não se esqueça de deixar o like caso tenha gostado e se inscrever no canal galera. Aproveitem e sigam a gente nas redes socias, e fiquem também por dentro do site da Builtter pc',
    video_imagem: thumbnail3,
    video_id: 'testes',
    video_favorite: '',
    video_estatisticas: '395.817'
}
const video4 = {
    video_nome: 'Instalando placa memoria ram dual channel',
    video_descricao: 'Neste video instalamos a memoria ram dual channel. Não se esqueça de deixar o like caso tenha gostado e se inscrever no canal galera. Aproveitem e sigam a gente nas redes socias, e fiquem também por dentro do site da Builtter pc',
    video_imagem: thumbnail4,
    video_id: 'hardware',
    video_favorite: '',
    video_estatisticas: '211.098'
}
const video5 = {
    video_nome: 'Otimazando o windows para um melhor desempenho',
    video_descricao: 'Neste video nós mexemos nas config do windows. Não se esqueça de deixar o like caso tenha gostado e se inscrever no canal galera. Aproveitem e sigam a gente nas redes socias, e fiquem também por dentro do site da Builtter pc',
    video_imagem: thumbnail4,
    video_id: 'software',
    video_favorite: '',
    video_estatisticas: '210.323'
}
const video6 = {
    video_nome: 'Testando o novo modem ULTRA potente',
    video_descricao: 'Neste video mostraremos o novo modem Gamer super potente.  Não se esqueça de deixar o like caso tenha gostado e se inscrever no canal galera. Aproveitem e sigam a gente nas redes socias, e fiquem também por dentro do site da Builtter pc',
    video_imagem: thumbnail4,
    video_id: 'testes',
    video_favorite: '',
    video_estatisticas: '134.503'
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
    promocao_nome: 'ASUS TUF Gaming GeForce® GTX 1660 Ti EVO OC Edition 6GB GDDR6',
    promocao_descricao: 'A PARTIR DE R$2460,00 40%Off',
    promocao_imagem: produto1,
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

export const suporteLista = [video0,video1,video2,video3,video4,video5,video6];
export const simulacaoLista = [simulacao0,simulacao1,simulacao2];
export const promocaoLista = [promo0,promo1,promo2];
export const comentarioLista = [comentario0,comentario1,comentario2];

export const sessoesLista = [suporteTecnico, simulacaoMontagem, promocaoPecas, forum];


