var express = require('express');
var router = express.Router();

const { getVentaent, getVentaentByid,
        createVentaent, deleteVentaent,
        updateVentaent, getAllrealtedVE } = require('../controllers/ventaent.controller');
/* GET home page. */
router.get('/', getAllrealtedVE);
router.post('/', createVentaent);
router.get('/:id', getVentaentByid);
router.delete('/:id', deleteVentaent);
router.put('/:id', updateVentaent);

module.exports = router;