// Importa o módulo 'express', que é um framework para Node.js
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Importa as rotas 
const empresasRoutes = require('./api/routes/empresasRoutes');
const sobreRoutes = require('./api/routes/sobreRoutes');
const criarcontaRoutes = require('./api/routes/criarcontaRoutes');
const feedbacksRoutes = require('./api/routes/feedbacksRoutes');
const loginRoutes = require('./api/routes/loginRoutes');
const index = require('./api/routes/indexRoutes');


// Configura o aplicativo para usar JSON nos corpos das requisições
app.use(express.json());

// Define o mecanismo de visualização como 'ejs'
app.set('view engine', 'ejs');

// Define o diretório onde as views estão localizadas
app.set('views', './api/views');

// Define a porta em que o servidor irá escutar
const port = 3000;

// Configuração de arquivos estáticos
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));

// Configuração de rotas
app.use('/empresas', empresasRoutes);
app.use('/sobre' ,sobreRoutes);
app.use('/criarconta' ,criarcontaRoutes);
app.use('/feedbacks' ,feedbacksRoutes);
app.use("/", loginRoutes);
app.use("/", index);

// Inicia o servidor e faz com que ele escute na porta definida
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
});


// Importa a configuração de conexão com o banco de dados
const conexao = require("./api/config/conexao");


// Exporta a instância do aplicativo para ser usada em outros módulos
module.exports = app;
