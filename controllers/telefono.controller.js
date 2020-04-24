const pool = require('../controllers/pool.controller');

const getTelefono = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM telefono');
    res.status(200).json(response.rows);
  }

const getTelefonoByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM telefono WHERE idtelefono = $1',[req.params.id]);
    res.status(200).json(response.rows);
  }

const createTelefono = async function(req, res, next) {
    const { persona_idpersona } = req.body;
    const response = await pool.query('INSERT INTO telefono (persona_idpersona) VALUES ($1)'
         , [persona_idpersona]);
    res.json({
        message: "correctly added",
        body: {
            telefono: {persona_idpersona}
        }
    });
  }

const deleteTelefono = async function(req, res, next) {
    const response = await pool.query('DELETE FROM telefono where idtelefono = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateTelefono = async function(req, res, next) {
    const { persona_idpersona } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE telefono SET persona_idpersona = $1 where idtelefono = $2'
    , [ persona_idpersona, id ]);
    res.json("updated sucessfully" );
  }
module.exports = {
    getTelefono, getTelefonoByid,
    createTelefono, deleteTelefono,
    updateTelefono
}