var express = require('express');
var router = express.Router();

const { getPersona, getPersonaByid,
      createPersona, updatePersona,
      deletePersona } = require('../controllers/persona.controller')

router.get('/',getPersona);
router.post('/',createPersona);
router.get('/:id', getPersonaByid);
router.delete('/:id', deletePersona);
router.put('/:id', updatePersona);
module.exports = router;