var express = require('express');
var router = express.Router();

const { getTelefono, getTelefonoByid,
       createTelefono, deleteTelefono,
       updateTelefono } = require('../controllers/telefono.controller');
/* GET home page. */
router.get('/', getTelefono);
router.post('/', createTelefono);
router.get('/:id',getTelefonoByid);
router.delete('/:id', deleteTelefono);
router.put('/:id',updateTelefono);

module.exports = router;