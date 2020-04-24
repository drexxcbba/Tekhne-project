const pool = require('../controllers/pool.controller');

const getVentaent = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM ventaent');
    res.status(200).json(response.rows);
  }

const getVentaentByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM ventaent WHERE idventaent = $1',[req.params.id]);
    res.status(200).json(response.rows);
  }

const createVentaent = async function(req, res, next) {
    const { persona_idpersona, entrada_identrada, cant } = req.body;
    const response = await pool.query('INSERT INTO ventaent (persona_idpersona, entrada_identrada, cant) VALUES ($1, $2, $3)'
         , [persona_idpersona, entrada_identrada, cant]);
    res.json({
        message: "correctly added",
        body: {
            ventaent: {persona_idpersona, entrada_identrada, cant}
        }
    });
  }

const deleteVentaent = async function(req, res, next) {
    const response = await pool.query('DELETE FROM ventaent where idventaent = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateVentaent = async function(req, res, next) {
    const { persona_idpersona, entrada_identrada, cant } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE ventapolera SET persona_idpersona = $1 , entrada_identrada = $2 , cant = $3 where idventaent = $4'
    , [ persona_idpersona, entrada_identrada, cant, id ]);
    res.json("updated sucessfully" );
  }

const getAllrealtedVE = async function(req, res, next){
    const response = await pool.query('SELECT idventaent, nombre, nombreevento, fecha, nombretipo, precio FROM ventaent, persona, entrada, tipoasiento WHERE persona_idpersona = idpersona AND entrada_identrada = identrada AND tipoasiento_idtipoasiento = idtipoasiento');
    res.status(200).json(response.rows);
  }

module.exports = {
    getVentaent, getVentaentByid,
    createVentaent, deleteVentaent,
    updateVentaent,getAllrealtedVE
}