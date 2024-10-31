const conexao = require('../config/conexao')

console.log("Acessando Models Criar Conta...")

module.exports = {
   criarConta,
}

function criarConta(nome, idade, usuario, senha, callback) {
    const m_sql = "INSERT INTO contas (nome, idade, usuario, senha) VALUES (?, ?, ?, ?)";
    conexao.query(m_sql, [nome, idade, usuario, senha], callback);
}






 