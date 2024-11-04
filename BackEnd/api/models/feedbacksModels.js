const conexao = require('../config/conexao');
const { selectemp } = require('../controllers/feedbacksControllers');

console.log("Acessando Models Criar Conta...")

module.exports = {
   cad,
   selectemp,
}

function cad(empresa, feedback, callback) {
    const m_sql = "INSERT INTO feedback VALUES (?, ?)";
    conexao.query(m_sql, [empresa, feedback], callback);
}

const Empresa = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM empresas ORDER BY nome ASC', (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
};

module.exports = Empresa;





 