const pool = require('../controllers/pool.controller');

const getPolera = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM polera');
    res.status(200).json(response.rows);
  }

const getPoleraByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM polera WHERE idpolera = $1',[req.params.id]);
    res.status(200).json(response.rows);
  }

const createPolera = async function(req, res, next) {
    const { tipopolera_idtipopolera } = req.body;
    const response = await pool.query('INSERT INTO polera (tipopolera_idtipopolera) VALUES ($1)'
         , [tipopolera_idtipopolera]);
    res.json({
        message: "correctly added",
        body: {
            polera: {tipopolera_idtipopolera}
        }
    });
  }

const deletePolera = async function(req, res, next) {
    const response = await pool.query('DELETE FROM polera where idpolera = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updatePolera = async function(req, res, next) {
    const { tipopolera_idtipopolera } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE entrada SET tipopolera_idtipopolera = $1 where idpolera = $2'
    , [ tipopolera_idtipopolera , id ]);
    res.json("updated sucessfully" );
  }
module.exports = {
   getPolera, getPoleraByid,
   createPolera, deletePolera,
   updatePolera
}