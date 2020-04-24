const pool = require('../controllers/pool.controller');

const getTipopolera = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM tipopolera');
    res.status(200).json(response.rows);
  }

const getTipopoleraByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM tipopolera WHERE idtipopolera = $1',[req.params.id]);
    res.status(200).json(response.rows);
  }

const createTipopolera = async function(req, res, next) {
    const { nombretipop, precio } = req.body;
    const response = await pool.query('INSERT INTO tipopolera (nombretipop, precio) VALUES ($1, $2)'
         , [nombretipop, precio]);
    res.json({
        message: "correctly added",
        body: {
            tipopolera: {nombretipop, precio}
        }
    });
  }

const deleteTipopolera = async function(req, res, next) {
    const response = await pool.query('DELETE FROM tipopolera where idtipopolera = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateTipopolera = async function(req, res, next) {
    const { nombretipop, precio } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE tipopolera SET nombretipop = $1, precio = $2 where identrada = $3'
    , [nombretipop, precio, id]);
    res.json("updated sucessfully" );
  }
module.exports = {
    getTipopolera, getTipopoleraByid,
    createTipopolera, deleteTipopolera,
    updateTipopolera
}