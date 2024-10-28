const empresasModels = require("../models/empresasModels");

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}

function getAll(req,res) {
    console.log("\nController- Iniciando leitura dos Dados dos empresas na Models...\n")
    var lerEmpresas
    console.time(lerEmpresas)
    empresasModels.getAll(function (err,resultado){
        if(err){
            throw err;
        }
        else{
            console.log("Busquei empresas no Model... ")
            console.log(resultado)
            console.timeEnd(lerEmpresas)
            
            return res.json(resultado)
        }
    })
};

function getById(req, res){
    var cod = req.params.id;
    empresasModels.getById(cod, function (err, resultado){
        console.log("Dados: ", resultado[0])
        console.log("empresas foi lido...")
        if(err){
            throw err;
        }
        else{
            return res.json(resultado)
        }
    })

}


function create(req,res){
    var dados = req.body;
    console.log("Adicionando empresas...")
    console.log(req.body)
    dados.liv_codigo = 0
  
    empresasModels.create(dados,function(err,resultado){
            if(err) {
                throw err;
            } else{
            console.log("\n")
            res.redirect("/")
            }
        })
}


function update(req,res) {
    console.log("Alterando registro de empresas...")
    var cod = req.params.id;
    var dados = req.body;
    console.log(req.body)
    console.log("Código: " + cod)
    empresasModels.update(dados, cod, function(err,resultado){
        if(err){
            throw err
        } else {
            res.redirect('/')
        }
    })

}

function remove(req, res){
    var cod = req.params.id;
    empresasModels.remove(cod, function (err, resultado){
        console.log("Livro Removido: ", resultado[0])
        console.log("empresas foi removido...")
        if(err){
            throw err;
        }
        else{
            return res.json(resultado)
        }
    })

}

