import { db } from "../db.js";

export const getUsers = async (_, res) => {
    try {
        const snapshot = await db.collection('usuarios').get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const usuarios = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(usuarios);

    } catch (error) {
        console.error("Erro ao buscar usuários do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar usuários.", error: error.message });
    }
};

// Função para login de usuário (loginUser) - **ATENÇÃO À SEGURANÇA**
// RECOMENDAÇÃO: USE FIREBASE AUTHENTICATION PARA ESTA FUNCIONALIDADE!
export const loginUser = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: "Email e senha são obrigatórios." });
        }

        // Esta busca **NÃO É SEGURA** para senhas. Use Firebase Authentication.
        const snapshot = await db.collection('usuarios')
                                 .where('email', '==', email)
                                 .where('senha', '==', senha) // Repetindo: Não armazene senhas em texto puro!
                                 .limit(1)
                                 .get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "Usuário ou senha inválidos!" });
        }

        const user = { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
        // Remova a senha do objeto antes de enviar para o cliente por segurança
        delete user.senha;
        return res.status(200).json(user);

    } catch (error) {
        console.error("Erro ao tentar login do usuário no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor durante o login.", error: error.message });
    }
};

// Função para adicionar um usuário (addUser) - **ATENÇÃO À SEGURANÇA**
// RECOMENDAÇÃO: USE FIREBASE AUTHENTICATION PARA ESTA FUNCIONALIDADE!
export const addUser = async (req, res) => {
    try {
        const { nome, email, senha, perfil, titulo, descricao } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: "Email e senha são obrigatórios para cadastro." });
        }

        // 1. Verifica se o email já está em uso
        const existingUserSnapshot = await db.collection('usuarios')
                                             .where('email', '==', email)
                                             .limit(1)
                                             .get();

        if (!existingUserSnapshot.empty) {
            return res.status(409).json({ message: "Este email já está sendo utilizado!" });
        }

        // 2. Adiciona o novo usuário
        const newUser = {
            nome: nome,
            email: email,
            senha: senha, // Repetindo: Não armazene senhas em texto puro! Use Firebase Auth.
            perfil: perfil || 'default', // Valores padrão podem ser úteis
            titulo: titulo || '',
            descricao: descricao || '',
            createdAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp()
        };

        const docRef = await db.collection('usuarios').add(newUser);

        // Remove a senha antes de retornar
        delete newUser.senha;
        return res.status(200).json({ message: "Usuário cadastrado com sucesso!", id: docRef.id, user: newUser });

    } catch (error) {
        console.error("Erro ao adicionar usuário ao Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao cadastrar usuário.", error: error.message });
    }
};

// Função para atualizar um usuário (updateUser)
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id; // Assume que o ID do usuário vem dos parâmetros da URL
        const { nome, email, senha, perfil, titulo, descricao } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "ID do usuário é obrigatório para atualização." });
        }

        const userRef = db.collection('usuarios').doc(userId);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        const updatedUserData = {
            nome: nome,
            email: email,
            // Cuidado ao atualizar a senha aqui. Se for para atualizar,
            // use Firebase Auth ou um método de hash seguro.
            // Para demonstração, estou incluindo, mas NÃO faça isso em produção.
            senha: senha,
            perfil: perfil,
            titulo: titulo,
            descricao: descricao,
            updatedAt: FieldValue.serverTimestamp()
        };

        await userRef.update(updatedUserData);

        return res.status(200).json({ message: "Usuário editado com sucesso!" });

    } catch (error) {
        console.error("Erro ao atualizar usuário no Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao editar usuário.", error: error.message });
    }
};

// Função para deletar um usuário (deleteUser)
export const deleteUser = async (req, res) => {
    try {
        const userId = req.body.id;

        if (!userId) {
            return res.status(400).json({ message: "ID do usuário é obrigatório para exclusão." });
        }

        await db.collection('usuarios').doc(userId).delete();

        return res.status(200).json({ message: "Usuário deletado com sucesso!" });

    } catch (error) {
        console.error("Erro ao deletar usuário do Firestore:", error);
        if (error.code === 5 || error.code === 'not-found') {
            return res.status(404).json({ message: "Usuário não encontrado para exclusão." });
        }
        return res.status(500).json({ message: "Erro interno do servidor ao deletar usuário.", error: error.message });
    }
};

// --- AMIGOS ---

// Função para obter todos os registros de amigos (getAmigos)
// Note: Esta função retorna TODOS os pares de amigos.
// Em um sistema real, você provavelmente buscaria amigos de um usuário específico.
export const getAmigos = async (_, res) => {
    try {
        const snapshot = await db.collection('amigos').get();

        if (snapshot.empty) {
            return res.status(200).json([]);
        }

        const amigos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(amigos);

    } catch (error) {
        console.error("Erro ao buscar amigos do Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar amigos.", error: error.message });
    }
};

// Função para adicionar um amigo (addAmigo)
// Recomendação: Considere uma estrutura onde você tem uma subcoleção 'amigos'
// dentro de cada documento de usuário, ou um documento com ID composto para evitar duplicatas.
export const addAmigo = async (req, res) => {
    try {
        const { userId, amigoId } = req.body;

        if (!userId || !amigoId) {
            return res.status(400).json({ message: "userId e amigoId são obrigatórios para adicionar amigo." });
        }

        // Opcional: Verificar se a relação de amizade já existe para evitar duplicatas.
        // Isso depende de como você quer modelar 'amigos'.
        // Exemplo: document ID "userId_amigoId"
        const friendshipId = `${userId}_${amigoId}`;
        const existingFriendship = await db.collection('amigos').doc(friendshipId).get();
        if (existingFriendship.exists) {
             return res.status(409).json({ message: "Esta amizade já existe!" });
        }

        // Adiciona a relação de amizade.
        // Uma abordagem seria usar o `friendshipId` como o ID do documento.
        await db.collection('amigos').doc(friendshipId).set({
            userId: userId,
            amigoId: amigoId,
            createdAt: FieldValue.serverTimestamp()
        });

        // Ou, se você quiser IDs auto-gerados:
        // const docRef = await db.collection('amigos').add({
        //     userId: userId,
        //     amigoId: amigoId,
        //     createdAt: FieldValue.serverTimestamp()
        // });
        // return res.status(200).json({ message: "Amigo adicionado!", id: docRef.id });

        return res.status(200).json({ message: "Amigo adicionado!" });

    } catch (error) {
        console.error("Erro ao adicionar amigo ao Firestore:", error);
        return res.status(500).json({ message: "Erro interno do servidor ao adicionar amigo.", error: error.message });
    }
};
