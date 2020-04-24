const pool = require('../controllers/pool.controller');

const getSocio = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM socio');
    res.status(200).json(response.rows);
  }

const getSocioByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM socio WHERE idsocio = $1',[req.params.id]);
    res.status(200).json(response.rows);
  }

const createSocio = async function(req, res, next) {
    const { tipoasiento_idtipoasiento, persona_idpersona } = req.body;
    const response = await pool.query('INSERT INTO socio (tipoasiento_idtipoasiento, persona_idpersona) VALUES ($1, $2)'
         , [tipoasiento_idtipoasiento, persona_idpersona]);
    res.json({
        message: "correctly added",
        body: {
            socio: {tipoasiento_idtipoasiento, persona_idpersona}
        }
    });
  }

const deleteSocio = async function(req, res, next) {
    const response = await pool.query('DELETE FROM socio where idsocio = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateSocio = async function(req, res, next) {
    const { tipoasiento_idtipoasiento, persona_idpersona } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE socio SET tipoasiento_idtipoasiento = $1, persona_idpersona = $2 where idventaent = $3'
    , [ tipoasiento_idtipoasiento, persona_idpersona, id ]);
    res.json("updated sucessfully" );
  }

const getAllrealtedSo = async function(req, res, next){
    const response = await pool.query('SELECT idsocio, nombre, nombretipo, precio fROM socio, persona, tipoasiento WHERE persona_idpersona = idpersona AND tipoasiento_idtipoasiento = idtipoasiento');
    res.status(200).json(response.rows);
  }

module.exports = {
    getSocio, getSocioByid,
    createSocio, deleteSocio,
    updateSocio, getAllrealtedSo
}