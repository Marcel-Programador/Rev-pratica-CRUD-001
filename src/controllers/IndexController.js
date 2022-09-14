const indexController = {
    home: (req ,res) => {
        return res.render("index", {title: ""});
    },
    products: (req ,res) => {
        const produtos = [
            {
                nome: "Camisa Legal",
                preco: "R$: 29,99",
                descricao: "Camisa muito top"
            },
                        {
                nome: "Short Legal",
                preco: "R$: 49,99",
                descricao: "Short muito top"
            },
                        {
                nome: "Calça Estilosa",
                preco: "R$: 99,99",
                descricao: "Calça da hora"
            },
        ];
        return res.render("products", {title: "Produtos", produtos: produtos});
    },
    login: (req ,res) => {
        return res.render("login", {title: "Login"});
    },
    users: (req ,res) => {
        const users = [
            {
                nome: "Marcel",
                sobrenome: "de Sousa Rocha",
                idade: 40
            },
            {
                nome: "Michellel",
                sobrenome: "de Souza Santos Rocha",
                idade: 33
            },
                        {
                nome: "Maria Eduarda",
                sobrenome: "de Sousa Rocha",
                idade: 14
            },
        ]
        return res.render("users", {title: "Usuários", users});
    },
};

module.exports = indexController;