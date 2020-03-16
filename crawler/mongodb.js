const mongoose = require("mongoose");
const data = require("./datenow")

const URL =
  "mongodb+srv://admin:1234@cluster0-9jhwf.mongodb.net/covid19?retryWrites=true&w=majority";




const localidadesSchema = new mongoose.Schema({
  country: {
    type: String
  },
  cases: {
    type: String
  },
  death: {
    type: String
  },
  date: {
    type: String
  }
});

const localidadeModel = mongoose.model("localidades" + " " + data(), localidadesSchema);
0
module.exports = function(items) {
  //var caSe = cases;
  var localidades = [];
  items.forEach(function(item, index) {
    var localidade = new localidadeModel();
    localidade.country = item['localidade']
    localidade.cases = item['cases']
    localidade.death = item['death']
  localidade.date = item['date']

    localidades.push(localidade);
  });

  // localidade.death = 1
  // localidade.date = 1

  mongoose.connect(
    URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    function(error) {
      if (!error) {
        // console.log((localidades))
        localidadeModel
          .insertMany(localidades)
          .then(function(docs) {
            console.log("salvo com sucesso");
            // console.log(localidades);
            mongoose.disconnect();
          })
          .catch(function(error) {
            console.log(error);
            process.exit(2); // remover essa linha após teste
          });
      } else {
        console.log(error);
        process.exit(1); // remover após teste.
      }
    }
  );
};

