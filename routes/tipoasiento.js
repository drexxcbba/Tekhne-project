var express = require('express');
var router = express.Router();


const { getTipoasiento, createTipoasiento, 
       getTipoasientoByid, deleteTipoasiento,
       updateTipoasiento } = require('../controllers/tipoasiento.controller')
/* GET home page. */
router.get('/', getTipoasiento);
router.post('/', createTipoasiento);
router.get('/:id',getTipoasientoByid);
router.delete('/:id', deleteTipoasiento);
router.put('/:id',updateTipoasiento);

module.exports = router;