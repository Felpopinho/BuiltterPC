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

//Objetos dos comentarios
const comentario0 ={
    forum_id: 4,
    forum_descricao: 'Eu abro muitos jogos porém quando abro vários PW e a memória atinge 61% de uso e tenro abrir navegador ou ate mais PW"S o Pc trava, e as vezes desinstala sozinho o softwaree da placa devídeo. Alguem sabe como resolver ?',
    forum_tipo: "Software",
}
const comentario1 ={
    forum_id: 5,
    forum_descricao: 'é minha primeira vez com uma GTX, e a minha é GTX 1050, ela é usada, a minha dúvida é, posso  colocar thermal pads nos chips que ficam perto  do chip gráfico ? (não sei se é esse o nome kkkk) irei colocar só para poder ajudar na temperatura,  ela não está com alta temperatura nem nada, pretendo mais para manter a vida dela ainda.',
    forum_tipo: "Hardware",
}
const comentario2 ={
    forum_id: 6,
    forum_descricao: 'não sei se uma Fonte Atx Gamer Semi-modular 600w Real 80plus Pfc Ativo Nf seria bom para esse processador e placa de Vídeo ou procuro outra melhor',
    forum_tipo: "Hardware",
}

//Array dos objetos de dados das sessões
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
