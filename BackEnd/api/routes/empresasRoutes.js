const express = require('express');

const router = express.Router();

const controllerEmpresas = require('../controllers/empresasControllers');

router.get("/", controllerEmpresas.getAll);
router.get("/:id", controllerEmpresas.getById);
router.post("/", controllerEmpresas.create);
router.put("/:id", controllerEmpresas.update);
router.delete("/:id", controllerEmpresas.remove);


console.log("Rotas de Empresas")

module.exports= router

router.get("*", function (req, res) {
    
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router
