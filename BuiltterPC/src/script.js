import fotoPerfilImage from "./src/assets/imagens/foto-de-perfil.png";

const suporteTecnico ={
    nome: 'Suporte Técnico',
    descricao: 'Disponibilizamos diversos videos de suporte técnico para resolução de problemas envolvendo computação',
    imagem: '0-imagem',
};
const simulacaoMontagem ={
    nome: 'Simulação de Montagem',
    descricao: 'Sessão inteira com catalogo de peças imenso, atualizado em tempo real para simulações de preço (com perspectivas de diveras lojas) das peças do seu futuro computador',
    imagem: '1-imagem',
};
const promocaoPecas ={
    nome: 'Promoções de peças',
    descricao: 'Catálogo de promoções das lojas mais conhecidas do Brasil e do exterior, opção de notificações das promoções e filtragem e busca para peças específicas',
    imagem: '2-imagem',
};
const forum ={
    nome: 'Forum de Reviews e Dicas',
    descricao: 'Catalogo de promoções das lojas mais conhecidas do Brasil e do exterior, opção de notificações das promoções e filtragem e busca para peças específicas ',
    imagem: '3-imagem',
};

export const sessoesLista = [suporteTecnico, simulacaoMontagem, promocaoPecas, forum];

export const fotoPerfilSelecionada = document.getElementById('FotoPerfil');

if (fotoPerfilSelecionada === ""){
    const fotoPerfil = fotoPerfilImage;
} else{
    const fotoPerfil = fotoPerfilSelecionada;
}