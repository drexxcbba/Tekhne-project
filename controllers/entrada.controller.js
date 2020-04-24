const pool = require('../controllers/pool.controller');

const getEntrada = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM entrada');
    res.status(200).json(response.rows);
  }

const getEntradaByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM entrada WHERE identrada = $1',[req.params.id]);
    res.status(200).json(response.rows);
  }

const createEntrada = async function(req, res, next) {
    const { tipoasiento_idtipoasiento, nombreevento, fecha} = req.body;
    const response = await pool.query('INSERT INTO entrada (tipoasiento_idtipoasiento, nombreevento, fecha) VALUES ($1, $2, $3)'
         , [tipoasiento_idtipoasiento, nombreevento, fecha]);
    res.json({
        message: "correctly added",
        body: {
            entrada: {tipoasiento_idtipoasiento, nombreevento, fecha}
        }
    });
  }

const deleteEntrada = async function(req, res, next) {
    const response = await pool.query('DELETE FROM entrada where identrada = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateEntrada = async function(req, res, next) {
    const { tipoasiento_idtipoasiento, nombreevento, fecha} = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE entrada SET tipoasiento_idtipoasiento = $1, nombreevento = $2, fecha = $3 where identrada = $4'
    , [ tipoasiento_idtipoasiento, nombreevento, fecha, id]);
    res.json("updated sucessfully" );
  }
module.exports = {
    getEntrada, createEntrada, getEntradaByid
    ,updateEntrada, deleteEntrada
}