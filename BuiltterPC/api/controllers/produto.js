import { db } from "../db.js";

// --- Função para obter produtos por tipo (getProdutos) ---
export const getProdutos = async (_, res) => {
    try {
        const arrData = [];

        // Tipos de produtos que você está buscando
        const productTypes = ['mae', 'processador', 'memoria', 'armazem', 'pvideo', 'fonte'];

        // Crie um array de promessas para cada consulta
        const queryPromises = productTypes.map(async (type) => {
            const snapshot = await db.collection('produtos')
                                     .where('tipo_produto', '==', type)
                                     .get();
            // Mapeie os documentos para um formato de dados e retorne
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        });

        // Execute todas as promessas em paralelo e aguarde que todas sejam resolvidas
        const allProductsByType = await Promise.all(queryPromises);

        // allProductsByType agora é um array de arrays, onde cada sub-array
        // contém os produtos de um tipo específico. Você pode retornar assim
        // ou achatar o array, dependendo da sua necessidade.
        // Se quiser tudo em um único array, faça: const flattenedProducts = [].concat(...allProductsByType);

        return res.status(200).json(allProductsByType); // Retorna um array de arrays

    } catch (error) {
        console.error("Erro ao buscar produtos do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar produtos.", error: error.message });
    }
};

// --- Função para adicionar produtos (addProdutos) ---
export const addProdutos = async (req, res) => {
    try {
        const newProduct = {
            nome_produto: req.body.nome_produto,
            preco_produto: req.body.preco_produto,
            imagem_produto: req.body.imagem_produto,
            tipo_produto: req.body.tipo_produto,
            createdAt: FieldValue.serverTimestamp() // Adiciona um timestamp
        };

        const docRef = await db.collection('produtos').add(newProduct);

        return res.status(200).json({ message: "Produto adicionado com sucesso!", id: docRef.id });

    } catch (error) {
        console.error("Erro ao adicionar produto ao Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao adicionar produto.", error: error.message });
    }
};

// --- Função para obter promoções (getPromocoes) ---
export const getPromocoes = async (_, res) => {
    try {
        const snapshot = await db.collection('promocoes').get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const promocoes = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(promocoes);

    } catch (error) {
        console.error("Erro ao buscar promoções do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar promoções.", error: error.message });
    }
};

// --- Função para adicionar promoções (addPromocoes) ---
export const addPromocoes = async (req, res) => {
    try {
        const newPromotion = {
            promocao_nome: req.body.promocao_nome,
            promocao_preco: req.body.promocao_preco,
            promocao_porcentagem: req.body.promocao_porcentagem,
            promocao_oferta: req.body.promocao_oferta,
            promocao_imagem: req.body.promocao_imagem,
            promocao_tipo: req.body.promocao_tipo,
            createdAt: FieldValue.serverTimestamp() // Adiciona um timestamp
        };

        const docRef = await db.collection('promocoes').add(newPromotion);

        return res.status(200).json({ message: "Promoção adicionada com sucesso!", id: docRef.id });

    } catch (error) {
        console.error("Erro ao adicionar promoção ao Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao adicionar promoção.", error: error.message });
    }
};
