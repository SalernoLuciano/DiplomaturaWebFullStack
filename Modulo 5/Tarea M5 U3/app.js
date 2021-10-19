var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//NECESARIO PARA USAR EL .ENV EN BD.JS
require('dotenv').config();
//NECESARIO PARA USAR LA/S CONEXION/ES A LA BASE DE DATOS
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//SELECT FROM DB 
pool.query("select * from empleados").then(function(resultados){
  console.log(resultados);
});

//INSERT TO DB
// var obj = {
//   nombre: 'Luciano',
//   apellido: 'Salerno',
//   trabajo: 'Programador',
//   edad: 31,
//   salario: 4,
//   email: 'lsalerno@fi.uba.ar'
// }

// pool.query('insert into empleados set ?', [obj]).then(function(resultados){
//   console.log(resultados);
// });

//UPDATE DB
// var id = 25;
// var obj = {
//   nombre: 'Pablo',
//   apellido: 'Gomez',
//   email: 'pgomez@fi.uba.ar'
// }

// pool.query('update empleados set ? where id_empleado=?', [obj, id]).then(function(resultados){
//   console.log(resultados);
// });

// DELETE FROM DB
// var id = 26;
// pool.query('DELETE FROM empleados WHERE id_empleado=?', [id]).then(function(resultados){
//   console.log(resultados);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
