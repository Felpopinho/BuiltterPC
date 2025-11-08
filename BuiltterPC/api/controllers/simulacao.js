import { db } from "../db.js";

// --- Função para obter todas as simulações (getSimulacoes) ---
export const getSimulacoes = async (_, res) => {
    try {
        const snapshot = await db.collection('simulacoes').get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const simulacoes = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(simulacoes);

    } catch (error) {
        console.error("Erro ao buscar simulações do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar simulações.", error: error.message });
    }
};

// --- Função para obter produtos específicos para simulações (getProdSimulacoes) ---
export const getProdSimulacoes = async (req, res) => {
    try {
        // Coleta os nomes dos produtos que vêm no corpo da requisição
        const productNames = [
            req.body.mae,
            req.body.pro,
            req.body.mem,
            req.body.arm,
            req.body.vid,
            req.body.fon
        ].filter(name => name); // Filtra quaisquer nomes vazios/nulos/indefinidos

        if (productNames.length === 0) {
            return res.status(400).json({ message: "Nenhum nome de produto fornecido para busca." });
        }

        // Cria um array de promessas, cada uma buscando um produto pelo nome
        const queryPromises = productNames.map(async (pName) => {
            const snapshot = await db.collection('produtos')
                                     .where('nome_produto', '==', pName) // Assumindo busca por nome exato
                                     .limit(1) // Assume que nome_produto é único para este contexto
                                     .get();
            if (snapshot.empty) {
                return null; // Retorna null se o produto não for encontrado
            }
            // Retorna o primeiro (e esperado único) documento encontrado
            return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
        });

        // Executa todas as promessas em paralelo
        const results = await Promise.all(queryPromises);

        // Formata o resultado para corresponder à estrutura de array de arrays original
        // Cada item do array final será um array contendo o produto encontrado (ou vazio se não encontrado)
        const finalResultsArray = results.map(item => item ? [item] : []);

        return res.status(200).json(finalResultsArray);

    } catch (error) {
        console.error("Erro ao buscar produtos para simulações do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar produtos para simulações.", error: error.message });
    }
};

// --- Função para adicionar/atualizar uma simulação (addSimulacao) ---
// Nota: A função original MySQL primeiro faz um UPDATE e depois um INSERT.
// Esta conversão replica esse comportamento. Se a intenção for apenas adicionar
// uma nova simulação ou apenas atualizar, a lógica pode ser simplificada.
export const addSimulacao = async (req, res) => {
    try {
        const { simulacao_nome, simulacao_mae, simulacao_pro, simulacao_mem, simulacao_arm, simulacao_vid, simulacao_fon, id, userId } = req.body;

        // PARTE 1: Atualiza uma simulação existente se um ID for fornecido
        // Assumindo que 'id' é o ID do documento Firestore de uma simulação existente
        if (id) {
            const simulationToUpdate = {
                nome: simulacao_nome || "",
                mae: simulacao_mae || "",
                pro: simulacao_pro || "",
                mem: simulacao_mem || "",
                arm: simulacao_arm || "",
                vid: simulacao_vid || "",
                fon: simulacao_fon || "",
                updatedAt: FieldValue.serverTimestamp() // Adiciona/atualiza timestamp
            };
            // Usa .set({ merge: true }) para não apagar outros campos, ou .update()
            await db.collection('simulacoes').doc(id).update(simulationToUpdate);
        }

        // PARTE 2: Insere uma nova simulação com valores padrão
        const newSimulation = {
            userId: userId,
            nome: "", // Como no INSERT original
            mae: "criacao", // Como no INSERT original (provavelmente um placeholder ou tipo inicial)
            pro: "",
            mem: "",
            arm: "",
            vid: "",
            fon: "",
            createdAt: FieldValue.serverTimestamp() // Adiciona timestamp de criação
        };

        const docRef = await db.collection('simulacoes').add(newSimulation);

        return res.status(200).json({ message: "Operação de simulação concluída. Nova simulação criada!", newSimulationId: docRef.id });

    } catch (error) {
        console.error("Erro ao adicionar/atualizar simulação no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao adicionar/atualizar simulação.", error: error.message });
    }
};

// --- Função para atualizar um componente de uma simulação (updateSimulacao) ---
export const updateSimulacao = async (req, res) => {
    try {
        const { pNome, id } = req.body; // pNome = nome do produto, id = ID da simulação

        if (!pNome || !id) {
            return res.status(400).json({ message: "Nome do produto (pNome) e ID da simulação são obrigatórios." });
        }

        // 1. Busca o tipo_produto do produto a ser adicionado/atualizado na simulação
        const productSnapshot = await db.collection('produtos')
                                        .where('nome_produto', '==', pNome)
                                        .limit(1) // Assume nome_produto é único
                                        .get();

        if (productSnapshot.empty) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }

        const productData = productSnapshot.docs[0].data();
        const tipo_produto = productData.tipo_produto;

        const simulationRef = db.collection('simulacoes').doc(id);
        const updateData = { updatedAt: FieldValue.serverTimestamp() }; // Sempre atualiza o timestamp

        // 2. Prepara o objeto de atualização com base no tipo_produto
        switch (tipo_produto) {
            case "mae":
                updateData.mae = pNome;
                break;
            case "processador":
                updateData.pro = pNome;
                break;
            case "memoria":
                updateData.mem = pNome;
                break;
            case "armazem":
                updateData.arm = pNome;
                break;
            case "pvideo":
                updateData.vid = pNome;
                break;
            case "fonte":
                updateData.fon = pNome;
                break;
            default:
                return res.status(404).json({ message: "Tipo de produto não reconhecido para atualização da simulação." });
        }

        // 3. Executa a atualização do documento de simulação
        await simulationRef.update(updateData);

        return res.status(200).json({ message: "Simulação atualizada com sucesso!" });

    } catch (error) {
        console.error("Erro ao atualizar simulação no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao atualizar simulação.", error: error.message });
    }
};

// --- Função para atualizar o nome de uma simulação (updateNomeSimulacao) ---
export const updateNomeSimulacao = async (req, res) => {
    try {
        const { nome, id } = req.body;

        if (!nome || !id) {
            return res.status(400).json({ message: "Nome e ID da simulação são obrigatórios para atualização." });
        }

        const simulationRef = db.collection('simulacoes').doc(id);
        await simulationRef.update({
            nome: nome,
            updatedAt: FieldValue.serverTimestamp()
        });

        return res.status(200).json({ message: "Nome da simulação atualizado com sucesso!" });

    } catch (error) {
        console.error("Erro ao atualizar nome da simulação no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao atualizar nome da simulação.", error: error.message });
    }
};

// --- Função para deletar uma simulação (deleteSimulacao) ---
export const deleteSimulacao = async (req, res) => {
    try {
        const simulationId = req.body.id;

        if (!simulationId) {
            return res.status(400).json({ message: "ID da simulação é obrigatório para exclusão." });
        }

        await db.collection('simulacoes').doc(simulationId).delete();

        return res.status(200).json({ message: "Simulação deletada com sucesso!" });

    } catch (error) {
        console.error("Erro ao deletar simulação do Firestore:", error);
        // Verifica se o erro foi por documento não encontrado
        if (error.code === 5 || error.code === 'not-found') {
            return res.status(404).json({ message: "Simulação não encontrada para exclusão." });
        }
        return res.status(500).json({ message: "Erro interno do servidor ao deletar simulação.", error: error.message });
    }
};
