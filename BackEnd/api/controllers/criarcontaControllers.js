module.exports = {
    indexCriarconta
}


function indexCriarconta(req, res) {
    res.render('criar_conta.ejs', {
        title:"Sobre",
    })
}