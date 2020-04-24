const pool = require('../controllers/pool.controller');

const getPersona = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM persona');
    res.status(200).json(response.rows);
  }

const getPersonaByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM persona WHERE idpersona = $1',[req.params.id]);
    res.status(200).json(response.rows);
  }

const createPersona = async function(req, res, next) {
    const { nombre } = req.body;
    const response = await pool.query('INSERT INTO persona (nombre) VALUES ($1)'
         , [nombre]);
    res.json({
        message: "correctly added",
        body: {
            persona: { nombre }
        }
    });
  }

const deletePersona = async function(req, res, next) {
    const response = await pool.query('DELETE FROM persona where idpersona = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updatePersona = async function(req, res, next) {
    const { nombre } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE persona SET nombre = $1 where idpersona = $2'
    , [nombre, id]);
    res.json("updated sucessfully" );
  }
module.exports = {
    getPersona, getPersonaByid ,
    createPersona, deletePersona , updatePersona
}