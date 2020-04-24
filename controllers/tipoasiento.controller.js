const pool = require('../controllers/pool.controller');

const getTipoasiento = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM tipoasiento');
    res.status(200).json(response.rows);
  }

const getTipoasientoByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM tipoasiento where idtipoasiento = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }    

const createTipoasiento = async function(req, res, next) {
    const { nombretipo, precio } = req.body;
    const response = await pool.query('INSERT INTO tipoasiento (nombretipo, precio) VALUES ($1, $2)', [nombretipo,precio]);
    res.json({
        message: "correctly added",
        body: {
            tipoasiento: { nombretipo, precio}
        }
    });
  }

const deleteTipoasiento = async function(req, res, next) {
    const response = await pool.query('DELETE FROM tipoasiento where idtipoasiento = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateTipoasiento = async function(req, res, next) {
    const { nombretipo, precio } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE tipoasiento SET nombretipo = $1, precio = $2 where idtipoasiento = $3', [ nombretipo, precio, id]);
    res.json("updated sucessfully" );
  }

module.exports = {
    getTipoasiento,createTipoasiento,getTipoasientoByid,
    deleteTipoasiento,updateTipoasiento
}
