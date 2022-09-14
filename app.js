const express = require("express");
// Variavel app executando o pacote express importado para o arquivo pela variavel express.
const app = express();
const port = 3001;

// Rotas customizadas
const indexRoute = require("./src/routes/indexRoute");
const userRoute = require("./src/routes/userRoute");


// Configura pasta estatica para acesso externo.
app.use(express.static( __dirname + "/public"));
// Configuração para utilizao ejs template engine "set" é utilizado para inserir um configuração customizada
app.set("view engine", "ejs");
// Configurando caminho da pasta views
app.set("views", __dirname + "/src/views");
app.use(express.json());
app.use(indexRoute)
// Duas rotas indexRoute e userroute estavão com o "/" como referencia para serem renderizados então
// para facilitar as rotas no proprio app.js a rota userRoute recebeu um parametro na frente o "/user".
app.use("/user", userRoute);

app.listen(port, () => {
    console.log("Estamos rodando na porta: " + port);
});
