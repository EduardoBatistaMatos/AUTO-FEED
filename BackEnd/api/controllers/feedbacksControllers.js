const feedbacksModels = require("../models/feedbacksModels.js");
module.exports = {
    indexFeedbacks,
    selectemp,
    cad,
    }

function indexFeedbacks(req, res) {
    res.render('feedbacks.ejs', {
        title:"feedbacks",
    })
}

function selectemp(req, res){
         async (req, res) => {
        try {
            const empresas = await Empresa.findAll();
            res.render('cad', { empresas }); // Passa as empresas para a view
        } catch (err) {
            res.status(500).json({ error: 'Erro ao listar empresas.' });
        }
    }
};


function cad(req, res) {
    const empresa = req.body.empresa;
    const feedback = req.body.feedback;
    
    console.log("FeedBack recebida: " + feedback);
    console.log("Empresa recebida: " + empresa);
   
    feedbacksModels.cad(empresa ,feedback,  function(erro, results) {
            if (erro) {
                console.error(erro);
                return res.status(500).render("feedbacks.ejs", {
                    title: "FeedBack",
                    mensagem: "Erro ao cadastrar feedback"
                });
            } else {
                console.log("Cadastro feito com Sucesso !!!");
                res.render("feedbacks.ejs", {
                    title: "FeedBack",
                    mensagem: "FeedBack realizado com sucesso!"
                });
            }
        });
    }

