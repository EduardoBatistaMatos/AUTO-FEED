const consultaModels = require("../models/consultaModels");
module.exports = {
    indexConsulta
}

function indexConsulta(req, res) {
        res.render('consulta.ejs', {
        title:"Consulta",}
        
    )
}
