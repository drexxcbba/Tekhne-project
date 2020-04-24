var express = require('express');
var router = express.Router();

const { getVentapoleras, getVentapolerasByid,
        createVentapolera, deleteVentapolera,
        updateVentapolera , getAllrealtedVP } = require('../controllers/ventapoleras.controller');
/* GET home page. */
router.get('/', getAllrealtedVP);
router.post('/', createVentapolera);
router.get('/:id', getVentapolerasByid);
router.delete('/:id', deleteVentapolera);
router.put('/:id', updateVentapolera);

module.exports = router;