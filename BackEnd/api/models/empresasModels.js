const conexao = require('../config/conexao')

console.log("Acessando Models das empresas...")

module.exports = {
   getAll,
   getById,
   create,
   update,
   remove

}


function getAll(callback){
    conexao.query("select * from empresas", callback)
}

function getById(codigo,callback) {
    conexao.query("Select * from empresas where liv_codigo = " + codigo, callback)
}

function create (dados, callback) {
    var msql = "INSERT INTO empresas SET ? "
    conexao.query(msql, dados, callback)
}

function update (dados, codigo, callback) {
    var msql = `UPDATE empresas SET ? WHERE liv_codigo = ${codigo}`  
         
    console.log(msql)
    conexao.query(msql,dados, (erro,callback) => {
        if(erro){
            throw erro
        } else {
            console.log("Registro" + codigo + "Atuaizado!")
        }
    })
}
function remove(codigo,callback) {
    conexao.query("DELETE FROM empresas WHERE liv_codigo =" + codigo, callback)
}