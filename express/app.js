var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { Level } = require("level");

var indexRouter = require("./routes/index");
var penpalsRouter = require("./routes/penpals");
var kitchenRouter = require("./routes/kitchen");

var app = express();

app.db = new Level("./bulaDB", {
  valueEncoding: "json",
  createIfMissing: true,
});
const penpalsDB = app.db.sublevel("penpals");
app.penpalsDB = penpalsDB;
const kitchenDB = app.db.sublevel("kitchen");
app.kitchenDB = kitchenDB;
const requestDB = function (req, res, next) {
  req.db = app.db;
  req.penpalsDB = app.penpalsDB;
  req.kitchenDB = app.kitchenDB;
  next();
};
app.use(requestDB);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.publicPath = path.join(__dirname, "public");
app.use(express.static(app.publicPath));

app.use("/", indexRouter);
app.use(penpalsRouter);
app.use(kitchenRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.sendFile(app.publicPath + "/index.html");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.error(err);
  res.status(500).send(err);
});

module.exports = app;
