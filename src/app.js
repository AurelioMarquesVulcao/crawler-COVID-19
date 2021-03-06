const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const placesRouter = require("./api/routes/places");

// banco de dados utilizado
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
// CORS - impede que os textes da api no navegador sejam bloqueados.
app.use(cors());


app.use("/places", placesRouter);

//para erros do tipo não encontrado
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;

  next(error);
});

//para outros tipos de erros
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
