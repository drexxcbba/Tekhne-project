var express = require('express');
var router = express.Router();

var { getSocio, getSocioByid,
      createSocio, deleteSocio,
      updateSocio, getAllrealtedSo } = require('../controllers/socio.controller');
/* GET home page. */
router.get('/', getAllrealtedSo);
router.post('/', createSocio);
router.get('/:id', getSocioByid);
router.delete('/:id', deleteSocio);
router.put('/:id', updateSocio);

module.exports = router;