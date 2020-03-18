const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const placesRouter = require("./api/routes/places");

mongoose.connect(
  "mongodb+srv://admin:1234@cluster0-9jhwf.mongodb.net/covid-19?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use("/places", placesRouter);

//for not found error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  // );
  // res.header(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  // );

  next(error);
});

//for any other type error
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};



module.exports = app;
