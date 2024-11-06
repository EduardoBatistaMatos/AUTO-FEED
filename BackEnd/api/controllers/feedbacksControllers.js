const feedbacksModels = require("../models/feedbacksModels");

module.exports = {
    indexFeedbacks,
    lista,
    cad,
};

function indexFeedbacks(req, res) {
    feedbacksModels.lista().then(results => {
        res.render('feedbacks', {
            title: "Feedback",
            mensagem: "",
            razao_social: results // Passa as razões sociais corretamente
        });
    }).catch(error => {
        console.error("Erro ao obter razões sociais:", error);
        res.status(500).render("feedbacks", {
            title: "Feedback",
            mensagem: "Erro ao carregar empresas"
        });
    });
}


function lista() {
    return new Promise((resolve, reject) => {
        const m_sql = 'SELECT razao_social FROM empresas';  // Consulta no banco de dados
        conexao.query(m_sql, [], (error, results) => {
            if (error) {
                console.error("Erro ao buscar razões sociais:", error);
                reject(error);  // Rejeita a Promise se houver erro
            } else {
                console.log("Resultados obtidos:", results);  // Verifique os dados aqui
                resolve(results);  // Resolve a Promise com os resultados da consulta
            }
        });
    });
}


function cad(req, res) {
    const razao_social = req.body.razao_social;
    const feedback = req.body.feedback;

    console.log("FeedBack recebida: " + feedback);
    console.log("razao_social recebida: " + razao_social);

    // Chame a função para salvar os dados do feedback no banco
    feedbacksModels.cad(razao_social, feedback, function (erro, results) {
        if (erro) {
            console.error(erro);
            return res.status(500).render("feedbacks.ejs", {
                title: "Feedback",
                mensagem: "Erro ao cadastrar feedback"
            });
        } else {
            console.log("Cadastro feito com Sucesso !!!");

            // Redireciona para o método GET para garantir que a lista de empresas seja carregada novamente
            res.redirect('/feedbacks/indexfeedbacks');  // Isso chama o método indexFeedbacks
        }
    });
}

