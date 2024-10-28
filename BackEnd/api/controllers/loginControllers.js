const loginModels = require("../models/loginModels.js");
module.exports = {
    login,
    validarPSW,
};

function login(req, res) {
    console.log('Carregando Pagina de Login');
    res.render('login.ejs', {
        title: "Login",
        mensagem: "Senha do Usuário"
    });
}

function validarPSW(req, res) {
    m_usuario = req.body.login;
    m_senha = req.body.senha;
    console.log("Usuário: " + m_usuario);
    console.log("Senha: " + m_senha);
    
    loginModels.validarPSW(m_usuario, m_senha, function(erro, result) {
        if (erro) {
            throw erro;
        }

        if (result.usu_apelido === m_usuario && result.usu.password === m_senha) {
            console.log("Usuário Válido");
            res.render("index.ejs", {
                title: "Meu PI"
            });
        } else {
            console.log("Dados Inválidos!!!");
            res.render("login.ejs", {
                title: "Login",
                mensagem: "Dados Inválidos"
            });
        }
    });
}
