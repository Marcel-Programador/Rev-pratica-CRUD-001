// Obrigatóriamente tem que se criar primeiro uma variavel que receberar as regras do
// Controller para que ao final do arquivo seja exportado para o routes e possa criar vinculo
// com as rotas em routes.

var users = require("../data/users.json");
users = users.data;
// CRUD
// create - Criar
// Read - Ler
// Update - Atualizar
// Delete - Deletar

const userController = {
    // Read
    // Ler/Listar todos os usuários e pode filtrar eles.
    index: (req, res) => {
        return res
        .status(200)
        .json({data: users, message: "Listagem realizada com sucesso!"});
    },
    // Read
    // Ler/Listar um usuário.
    show: (req, res) => {
        const {id} = req.params;
        const result = users.find((user) => 
            // return user.id === id;
            // return user.id.toString() === id;
            user.id === parseInt(id)
        );
        if(!result){
            return res.status(400).json({message: "Nenhum usuário encontrado"});
        }
        return res
        .status(200)
        .json({data: result, message: "Usuário encontrado"});
        // res.send("Show " + id)
    },
    // Create
    // Criar um usuário.
    store: (req, res) => {
        const {nome, sobrenome, email, idade,} = req.body;
        if(!nome || !sobrenome || !email || !idade || ""){
            return res.status(400).json({message: "Preencha todos os campos"})
        }
        users.push({
            id: users.length + 1,
            nome,
            sobrenome,
            email,
            idade,
        });
        return res.status(201).json({message: "Usuário criado com sucesso!"})
    },
    // Update
    // Atualizar um usuário.
    update: (req, res) => {
        const {id} = req.params;
        const {nome, sobrenome, email, idade,} = req.body;
        const result = users.find((user) => 
            // return user.id === id;
            // return user.id.toString() === id;
            user.id === parseInt(id)
        );
        if(!result){
            return res.status(400).json({message: "Nenhum usuário encontrado"});
        }
        const newUser = result;
        if(nome || sobrenome || email || idade){
            newUser.nome = nome,
            newUser.sobrenome = sobrenome,
            newUser.email = email,
            newUser.idade = idade
        }
        return res.status(200).json({message: "Atualização realizada com sucesso."});
        
        // if(nome)newUser.nome = nome;
        // if(sobrenome)newUser.sobrenome = sobrenome;
        // if(email)newUser.email = email;
        // if(idade)newUser.idade = idade;
        // return res
        //     .status(200)
        //     .json({message: "Atualização realizada com sucesso."});
        // res.send("Update " + id)
        // res.send(`Update ${id}`);
    },
    // Delete
    // Deletar um usuário.
    delete: (req, res) => {
        const {id} = req.params;
        // const {nome, sobrenome, email, idade,} = req.body;
        const result = users.findIndex(
            (user) => 
            // return user.id === id;
            // return user.id.toString() === id;
            user.id === parseInt(id)
        );
        if(result === -1){
            return res.status(400).json({message: "Nenhum usuário encontrado"});
        }
        users.splice(result, 1);
        return res.status(200).json({message: "Usuário deletado com sucesso."});
    },
    save: (req, res) => {
        const {id, name} = req.params;
        if(name){
        // rres.send("Save " + id)
        res.send(`Save ${id} e ${name}`)
        }else{
            res.send(`Save ${id}`)
        }

    },
    notFound: (req, res) => {
        res.send("404 - Not Found");
    },
};
module.exports = userController;

// comentando para realizar o commit