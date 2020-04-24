const pool = require('../controllers/pool.controller');

const getVentapoleras = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM ventapoleras');
    res.status(200).json(response.rows);
  }

const getVentapolerasByid = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM ventapoleras WHERE idventapoleras = $1',[req.params.id]);
    res.status(200).json(response.rows);
  }

const createVentapolera = async function(req, res, next) {
    const { polera_idpolera, persona_idpersona, cant } = req.body;
    const response = await pool.query('INSERT INTO ventapoleras (polera_idpolera, persona_idpersona, cant) VALUES ($1, $2, $3)'
         , [polera_idpolera, persona_idpersona, cant]);
    res.json({
        message: "correctly added",
        body: {
            ventapoleras: {polera_idpolera, persona_idpersona, cant}
        }
    });
  }

const deleteVentapolera = async function(req, res, next) {
    const response = await pool.query('DELETE FROM ventapoleras where idventapoleras = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateVentapolera = async function(req, res, next) {
    const { polera_idpolera, persona_idpersona, cant } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE ventapolera SET polera_idpolera = $1, persona_idpersona = $2, cant = $3 where idventapolera = $4'
    , [ polera_idpolera, persona_idpersona, cant, id ]);
    res.json("updated sucessfully" );
  }

const getAllrealtedVP = async function(req, res, next){
  const response = await pool.query('SELECT idventapoleras, nombre, cant, nombretipop, precio FROM ventapoleras, persona, polera, tipopolera WHERE persona_idpersona = idpersona AND polera_idpolera = idpolera AND tipopolera_idtipopolera = idtipopolera');
  res.status(200).json(response.rows);
}

module.exports = {
    getVentapoleras, getVentapolerasByid,
    createVentapolera, deleteVentapolera,
    updateVentapolera, getAllrealtedVP
}