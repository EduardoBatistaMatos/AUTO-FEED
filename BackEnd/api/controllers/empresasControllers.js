module.exports = {
    indexEmpresas
}

function indexEmpresas(req, res) {
    res.render('empresa.ejs', {
        title:"Empresa",
    })
}