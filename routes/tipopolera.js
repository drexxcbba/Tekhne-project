var express = require('express');
var router = express.Router();

const { getTipopolera, getTipopoleraByid,
       createTipopolera, deleteTipopolera,
       updateTipopolera } = require('../controllers/tipopolera.controller')
/* GET home page. */
router.get('/', getTipopolera);
router.post('/', createTipopolera);
router.get('/:id',getTipopoleraByid);
router.delete('/:id', deleteTipopolera);
router.put('/:id',updateTipopolera);

module.exports = router;