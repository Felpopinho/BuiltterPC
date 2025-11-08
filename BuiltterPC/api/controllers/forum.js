import { db } from "../db.js";

export const getComments = async (req, res) => {
    try {
        const filtro = req.body.filtro; // O campo pelo qual queremos ordenar

        // Verifica se o filtro foi fornecido
        if (!filtro) {
            return res.status(400).json({ message: "O campo 'filtro' é obrigatório no corpo da requisição." });
        }
        const commentsRef = db.collection('comentarios');
        const snapshot = await commentsRef.orderBy(filtro, 'desc').get();

        // Se não houver documentos, retorna um array vazio
        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        // Mapeia os documentos para um array de objetos JavaScript,
        // incluindo o ID do documento
        const comments = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(comments);

    } catch (error) {
        console.error("Erro ao buscar comentários do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar comentários.", error: error.message });
    }
}

// --- Função para adicionar um comentário (addComment) ---
export const addComment = async (req, res) => {
    try {
        const newComment = {
            forum_id: req.body.forum_id, // Este pode ser um ID existente, ou Firestore gerará um
            forum_descricao: req.body.forum_descricao,
            forum_tipo: req.body.forum_tipo,
            forum_titulo: req.body.forum_titulo,
            forum_curtidas: req.body.forum_curtidas || 0, // Garante que curtidas inicie em 0
            createdAt: FieldValue.serverTimestamp() // Adiciona um timestamp do servidor
        };

        // Adiciona um novo documento à coleção 'comentarios'.
        // O Firestore gerará automaticamente um ID para este documento.
        const docRef = await db.collection('comentarios').add(newComment);

        return res.status(200).json({ message: "Postagem feita com sucesso!", id: docRef.id });

    } catch (error) {
        console.error("Erro ao adicionar comentário ao Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao postar comentário.", error: error.message });
    }
};

// --- Função para deletar um comentário (deleteComment) ---
export const deleteComment = async (req, res) => {
    try {
        const commentId = req.body.id;

        if (!commentId) {
            return res.status(400).json({ message: "ID do comentário é obrigatório para exclusão." });
        }

        // Deleta o documento específico da coleção 'comentarios'
        await db.collection('comentarios').doc(commentId).delete();

        return res.status(200).json("Comentario deletado com sucesso!");

    } catch (error) {
        console.error("Erro ao deletar comentário do Firestore:", error);
        // Verifica se o erro é por documento não encontrado
        if (error.code === 5 || error.code === 'not-found') { // 'not-found' é para o Admin SDK
             return res.status(404).json({ message: "Comentário não encontrado para exclusão." });
        }
        return res.status(500).json({ message: "Erro interno do servidor ao deletar comentário.", error: error.message });
    }
};

// --- Função para curtir um comentário (likeComment) ---
// Abordagem: adicionar um documento na coleção 'likes' e incrementar um contador no comentário
export const likeComment = async (req, res) => {
    try {
        const { userId, postId } = req.body;

        if (!userId || !postId) {
            return res.status(400).json({ message: "userId e postId são obrigatórios para curtir." });
        }

        const likeRef = db.collection('likes').doc(`${userId}_${postId}`);
        const likeDoc = await likeRef.get();

        if (likeDoc.exists) {
            return res.status(409).json({ message: "Usuário já curtiu esta postagem." }); // 409 Conflict
        }

        // 1. Adiciona um registro de "curtida"
        await likeRef.set({
            userId: userId,
            postId: postId,
            createdAt: FieldValue.serverTimestamp()
        });

        // 2. Incrementa o contador de curtidas no documento do comentário
        const commentRef = db.collection('comentarios').doc(postId);
        await commentRef.update({
            forum_curtidas: FieldValue.increment(1) // Incrementa atomicamente
        });

        return res.status(200).json({ message: "Postagem curtida com sucesso!" });

    } catch (error) {
        console.error("Erro ao curtir comentário no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao curtir postagem.", error: error.message });
    }
};

// --- Função para descurtir um comentário (dislikeComment) ---
// Abordagem: deletar o documento na coleção 'likes' e decrementar o contador no comentário
export const dislikeComment = async (req, res) => {
    try {
        const { userId, postId } = req.body;

        if (!userId || !postId) {
            return res.status(400).json({ message: "userId e postId são obrigatórios para descurtir." });
        }

        const likeRef = db.collection('likes').doc(`${userId}_${postId}`);
        const likeDoc = await likeRef.get();

        if (!likeDoc.exists) {
            return res.status(404).json({ message: "Curtida não encontrada para este usuário e postagem." });
        }

        // 1. Deleta o registro de "curtida"
        await likeRef.delete();

        // 2. Decrementa o contador de curtidas no documento do comentário
        const commentRef = db.collection('comentarios').doc(postId);
        await commentRef.update({
            forum_curtidas: FieldValue.increment(-1) // Decrementa atomicamente
        });

        return res.status(200).json({ message: "Postagem descurtida com sucesso!" });

    } catch (error) {
        console.error("Erro ao descurtir comentário no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao descurtir postagem.", error: error.message });
    }
};

// --- Função para atualizar curtidas (updateLikes) ---
// Esta função pode ser substituída pelas `likeComment` e `dislikeComment` acima,
// mas se for para definir um valor específico, aqui está a conversão:
export const updateLikes = async (req, res) => {
    try {
        const { forum_curtidas, postId } = req.body;

        if (typeof forum_curtidas === 'undefined' || !postId) {
            return res.status(400).json({ message: "forum_curtidas e postId são obrigatórios para atualização." });
        }

        const commentRef = db.collection('comentarios').doc(postId);
        await commentRef.update({
            forum_curtidas: forum_curtidas
        });

        return res.status(200).json({ message: "Contador de curtidas atualizado com sucesso!" });

    } catch (error) {
        console.error("Erro ao atualizar curtidas no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao atualizar curtidas.", error: error.message });
    }
};

// --- Função para obter curtidas (getLikes) ---
// Verifica se um usuário específico curtiu uma postagem específica
export const getLikes = async (req, res) => {
    try {
        const { userId, postId } = req.body;

        if (!userId || !postId) {
            return res.status(400).json({ message: "userId e postId são obrigatórios para buscar curtidas." });
        }

        // Uma consulta mais eficiente seria verificar o documento específico se o ID for userId_postId
        const likeDocRef = db.collection('likes').doc(`${userId}_${postId}`);
        const likeDoc = await likeDocRef.get();

        if (likeDoc.exists) {
            return res.status(200).json({ liked: true, data: { id: likeDoc.id, ...likeDoc.data() } });
        } else {
            return res.status(200).json({ liked: false });
        }

    } catch (error) {
        console.error("Erro ao obter curtidas do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar curtidas.", error: error.message });
    }
};


// --- Função para obter todas as respostas (getRespostas) ---
export const getRespostas = async (req, res) => {
    try {
        const snapshot = await db.collection('respostas').get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const respostas = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(respostas);

    } catch (error) {
        console.error("Erro ao buscar todas as respostas do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar respostas.", error: error.message });
    }
};

// --- Função para obter respostas de um post específico (getActualRespostas) ---
export const getActualRespostas = async (req, res) => {
    try {
        const postId = req.body.id; // Ou req.params.postId se vier da URL

        if (!postId) {
            return res.status(400).json({ message: "ID da postagem é obrigatório para buscar respostas." });
        }

        const snapshot = await db.collection('respostas')
                                 .where('postId', '==', postId)
                                 .orderBy('createdAt', 'asc') // Opcional: ordenar por data de criação
                                 .get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const respostas = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(respostas);

    } catch (error) {
        console.error("Erro ao buscar respostas por postId no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar respostas por post.", error: error.message });
    }
};

// --- Função para adicionar uma resposta (addRespostas) ---
export const addRespostas = async (req, res) => {
    try {
        const newResposta = {
            userId: req.body.userId, // Corrigi o nome do campo para userId
            postId: req.body.postId, // Corrigi o nome do campo para postId
            resposta_titulo: req.body.resposta_titulo,
            resposta_desc: req.body.resposta_desc,
            resposta_curtida: req.body.resposta_curtida || 0, // Garante que inicie em 0
            createdAt: FieldValue.serverTimestamp() // Adiciona um timestamp do servidor
        };

        const docRef = await db.collection('respostas').add(newResposta);

        return res.status(200).json({ message: "Respostas postada!", id: docRef.id });

    } catch (error) {
        console.error("Erro ao adicionar resposta ao Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao postar resposta.", error: error.message });
    }
};

// --- Função para deletar uma resposta (deleteRespostas) ---
export const deleteRespostas = async (req, res) => {
    try {
        const respostaId = req.body.id;

        if (!respostaId) {
            return res.status(400).json({ message: "ID da resposta é obrigatório para exclusão." });
        }

        await db.collection('respostas').doc(respostaId).delete();

        return res.status(200).json("Resposta deletada com sucesso!");

    } catch (error) {
        console.error("Erro ao deletar resposta do Firestore:", error);
        if (error.code === 5 || error.code === 'not-found') {
            return res.status(404).json({ message: "Resposta não encontrada para exclusão." });
        }
        return res.status(500).json({ message: "Erro interno do servidor ao deletar resposta.", error: error.message });
    }
};
