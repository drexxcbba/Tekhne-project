var express = require('express');
var router = express.Router();

const { getEntrada, createEntrada, getEntradaByid
, deleteEntrada, updateEntrada } = require('../controllers/entrada.controller');

router.get('/',getEntrada);
router.post('/',createEntrada);
router.get('/:id', getEntradaByid);
router.delete('/:id', deleteEntrada);
router.put('/:id', updateEntrada);
module.exports = router;