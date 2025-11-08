import { db } from "../db.js";

export const getVideos = async (_, res) => {
    try {
        // Ordena por 'video_estatisticas' em ordem decrescente
        const snapshot = await db.collection('videos')
                                 .orderBy('video_estatisticas', 'desc')
                                 .get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const videos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(videos);

    } catch (error) {
        console.error("Erro ao buscar vídeos do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar vídeos.", error: error.message });
    }
};

// Função para adicionar vídeos (addVideos)
export const addVideos = async (req, res) => {
    try {
        const newVideo = {
            video_nome: req.body.video_nome,
            video_descricao: req.body.video_descricao,
            video_imagem: req.body.video_imagem,
            video_estatisticas: req.body.video_estatisticas || 0, // Garante que comece com 0 se não fornecido
            createdAt: FieldValue.serverTimestamp()
        };

        const docRef = await db.collection('videos').add(newVideo);

        return res.status(200).json({ message: "Vídeo adicionado com sucesso!", id: docRef.id });

    } catch (error) {
        console.error("Erro ao adicionar vídeo ao Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao adicionar vídeo.", error: error.message });
    }
};

// --- FAVORITOS ---

// Função para favoritar um vídeo (favoriteVideo)
export const favoriteVideo = async (req, res) => {
    try {
        const { user_id, video_id } = req.body;

        if (!user_id || !video_id) {
            return res.status(400).json({ message: "user_id e video_id são obrigatórios." });
        }

        // Usa um ID composto para o documento para garantir unicidade e fácil lookup
        const favoriteId = `${user_id}_${video_id}`;
        const favoriteRef = db.collection('videos_favoritos').doc(favoriteId);

        // Verifica se já existe para evitar duplicatas
        const existingFavorite = await favoriteRef.get();
        if (existingFavorite.exists) {
            return res.status(409).json({ message: "Este vídeo já está nos favoritos do usuário." });
        }

        await favoriteRef.set({
            user_id: user_id,
            video_id: video_id,
            createdAt: FieldValue.serverTimestamp()
        });

        // Opcional: Incrementar um contador de favoritos no documento do vídeo
        await db.collection('videos').doc(video_id).update({
             favoritesCount: FieldValue.increment(1)
        });

        return res.status(200).json({ message: "Vídeo adicionado aos favoritos!" });

    } catch (error) {
        console.error("Erro ao favoritar vídeo no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao favoritar vídeo.", error: error.message });
    }
};

// Função para remover um vídeo dos favoritos (deleteFavorite)
export const deleteFavorite = async (req, res) => {
    try {
        const { user_id, video_id } = req.body;

        if (!user_id || !video_id) {
            return res.status(400).json({ message: "user_id e video_id são obrigatórios para exclusão." });
        }

        const favoriteId = `${user_id}_${video_id}`;
        const favoriteRef = db.collection('videos_favoritos').doc(favoriteId);

        const existingFavorite = await favoriteRef.get();
        if (!existingFavorite.exists) {
            return res.status(404).json({ message: "Este vídeo não está nos favoritos do usuário." });
        }

        await favoriteRef.delete();

        // Opcional: Decrementar um contador de favoritos no documento do vídeo
        await db.collection('videos').doc(video_id).update({
             favoritesCount: FieldValue.increment(-1)
        });


        return res.status(200).json({ message: "Vídeo removido dos favoritos!" });

    } catch (error) {
        console.error("Erro ao deletar favorito do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao deletar favorito.", error: error.message });
    }
};

// Função para verificar se um vídeo é favorito (getFavoritos)
export const getFavoritos = async (req, res) => {
    try {
        const { user_id, video_id } = req.body;

        if (!user_id || !video_id) {
            return res.status(400).json({ message: "user_id e video_id são obrigatórios para busca." });
        }

        const favoriteId = `${user_id}_${video_id}`;
        const favoriteDoc = await db.collection('videos_favoritos').doc(favoriteId).get();

        if (favoriteDoc.exists) {
            return res.status(200).json({ isFavorite: true, data: { id: favoriteDoc.id, ...favoriteDoc.data() } });
        } else {
            return res.status(200).json({ isFavorite: false });
        }

    } catch (error) {
        console.error("Erro ao verificar favoritos no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar favoritos.", error: error.message });
    }
};

// Função para obter todos os vídeos favoritos de um usuário (getAllFavoritos)
export const getAllFavoritos = async (req, res) => {
    try {
        const user_id = req.body.user_id;

        if (!user_id) {
            return res.status(400).json({ message: "user_id é obrigatório para buscar todos os favoritos." });
        }

        const snapshot = await db.collection('videos_favoritos')
                                 .where('user_id', '==', user_id)
                                 .orderBy('createdAt', 'desc') // Opcional: ordenar pelos mais recentes
                                 .get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const favoritos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(favoritos);

    } catch (error) {
        console.error("Erro ao buscar todos os favoritos do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar todos os favoritos.", error: error.message });
    }
};

// --- HISTÓRICO DE VISUALIZAÇÃO ---

// Função para registrar a visualização de um vídeo (viewVideo)
// NOTA: Para um histórico de visualização, geralmente você quer um registro a cada vez que o usuário vê.
// Se você quiser apenas o último vídeo visto, a lógica seria diferente (fazer um `set` ou `update`).
export const viewVideo = async (req, res) => {
    try {
        const { user_id, video_id } = req.body;

        if (!user_id || !video_id) {
            return res.status(400).json({ message: "user_id e video_id são obrigatórios." });
        }

        // Para histórico, podemos querer um ID único por visualização, então `add()` é bom.
        // Ou, se quisermos apenas o registro mais recente para um user-video pair, podemos usar `set` com um ID composto e atualizar a data.
        // A lógica do MySQL sugere que cada visualização é um novo registro, então usaremos `add()`.
        const docRef = await db.collection('videos_historico').add({
            user_id: user_id,
            video_id: video_id,
            viewedAt: FieldValue.serverTimestamp() // Registro de quando foi visto
        });

        // Opcional: Incrementar contador de visualizações no documento do vídeo
        await db.collection('videos').doc(video_id).update({
            video_estatisticas: FieldValue.increment(1) // Atualiza as estatísticas do vídeo
        });

        return res.status(200).json({ message: "Visualização registrada com sucesso!", id: docRef.id });

    } catch (error) {
        console.error("Erro ao registrar visualização de vídeo no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao registrar visualização.", error: error.message });
    }
};

// Função para deletar um registro de visualização do histórico (deleteView)
// NOTA: Deletar uma visualização específica do histórico é um cenário menos comum.
// Se o histórico for um log, um `delete` apaga um evento específico.
export const deleteView = async (req, res) => {
    try {
        const { user_id, video_id } = req.body; // Supondo que você queira deletar a última visualização de um par user_id/video_id

        if (!user_id || !video_id) {
            return res.status(400).json({ message: "user_id e video_id são obrigatórios." });
        }

        // Encontra o registro de visualização específico a ser deletado.
        // Se você usou `add()`, precisa do ID do documento.
        // Se você tem um ID composto para a última visualização (e.g., `userId_videoId`), use-o.
        // No seu MySQL, você busca por user_id E video_id, o que significa que pode haver múltiplas entradas.
        // Para o Firestore, se você quiser deletar *uma* entrada específica:
        const snapshot = await db.collection('videos_historico')
                                 .where('user_id', '==', user_id)
                                 .where('video_id', '==', video_id)
                                 .limit(1) // Deleta apenas uma correspondência, talvez a mais antiga ou mais recente
                                 .get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "Nenhum registro de visualização encontrado para este par." });
        }

        const docToDeleteId = snapshot.docs[0].id;
        await db.collection('videos_historico').doc(docToDeleteId).delete();

        // Opcional: Decrementar contador de visualizações no documento do vídeo
        await db.collection('videos').doc(video_id).update({
            video_estatisticas: FieldValue.increment(-1)
        });

        return res.status(200).json({ message: "Visualização deletada com sucesso!" });

    } catch (error) {
        console.error("Erro ao deletar visualização do histórico do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao deletar visualização.", error: error.message });
    }
};

// Função para obter todo o histórico de visualização de um usuário (getAllView)
export const getAllView = async (req, res) => {
    try {
        const user_id = req.body.user_id;

        if (!user_id) {
            return res.status(400).json({ message: "user_id é obrigatório para buscar histórico." });
        }

        const snapshot = await db.collection('videos_historico')
                                 .where('user_id', '==', user_id)
                                 .orderBy('viewedAt', 'desc') // Ordena pelas visualizações mais recentes
                                 .get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const historico = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(historico);

    } catch (error) {
        console.error("Erro ao buscar histórico de visualização do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar histórico.", error: error.message });
    }
};

// Função para atualizar as estatísticas de um vídeo (updateViews)
// NOTA: Em muitos casos, você usaria FieldValue.increment() diretamente em `viewVideo`
// ao invés de ter uma função separada que define um valor absoluto.
// Mas se você precisa definir um valor específico, esta é a conversão.
export const updateViews = async (req, res) => {
    try {
        const { video_estatisticas, video_id } = req.body;

        if (typeof video_estatisticas === 'undefined' || !video_id) {
            return res.status(400).json({ message: "video_estatisticas e video_id são obrigatórios para atualização." });
        }

        const videoRef = db.collection('videos').doc(video_id);
        await videoRef.update({
            video_estatisticas: video_estatisticas,
            updatedAt: FieldValue.serverTimestamp()
        });

        return res.status(200).json({ message: "Estatísticas do vídeo atualizadas com sucesso!" });

    } catch (error) {
        console.error("Erro ao atualizar estatísticas do vídeo no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao atualizar estatísticas do vídeo.", error: error.message });
    }
};
