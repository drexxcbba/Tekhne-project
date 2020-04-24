var express = require('express');
var router = express.Router();

const { getPolera, getPoleraByid,
        createPolera, deletePolera,
        updatePolera } = require('../controllers/polera.controller');
/* GET home page. */
router.get('/', getPolera);
router.post('/', createPolera);
router.get('/:id', getPoleraByid);
router.delete('/:id', deletePolera);
router.put('/:id', updatePolera);

module.exports = router;