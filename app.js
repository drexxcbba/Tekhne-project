var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tipoasientoRouter = require('./routes/tipoasiento');
var entradaRouter = require('./routes/entrada');
var personaRouter = require('./routes/persona');
var tipopoleraRouter = require('./routes/tipopolera');
var telefonoRouter = require('./routes/telefono');
var poleraRouter = require('./routes/polera');
var ventapoleraRouter = require('./routes/ventapoleras');
var ventaentRouter = require('./routes/ventaent');
var sociorouter = require('./routes/socio');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tipoasiento', tipoasientoRouter);
app.use('/entrada', entradaRouter);
app.use('/persona', personaRouter);
app.use('/tipopolera', tipopoleraRouter);
app.use('/telefono', telefonoRouter);
app.use('/polera', poleraRouter);
app.use('/ventapolera', ventapoleraRouter);
app.use('/ventaent',ventaentRouter);
app.use('/socio', sociorouter);

module.exports = app;
