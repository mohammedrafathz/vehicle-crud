const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const vehiclesRouter = require('./routes/vehicles');
const keys = require("./config/keys");

const app = express();

//Mongoose setup
mongoose
  .connect('mongodb+srv://admin:k1nbfh8nECiVuxjv@app-v1.ildsv.mongodb.net/vehicles-db?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Enable CORS
app.use(cors())

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../build')));

app.use('/users', usersRouter);
app.use('/api/vehicle', vehiclesRouter);

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
