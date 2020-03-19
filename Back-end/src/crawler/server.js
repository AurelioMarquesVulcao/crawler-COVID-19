const cheerio = require("cheerio");
const request = require("request");
var save = require("./mongodb");
const Date = require("../services/datenow");
const Datecsv = require("../services/dateforcsv");
const firstrun = require("./firstrun");

const notices = "https://www.worldometers.info/coronavirus/";

var localidades = [];

firstrun();

// esta atualizando toda a aplicação a cada 1 hora
setInterval(function() {
  var localidades = [];

  var crawler = () => {
    request(notices, function(error, response, body) {
      var $ = cheerio.load(body);
      $("tbody tr").each(function(element) {
        localidade = $(this)
          .find("td")
          .slice(0, 1)
          .text()
          .trim();
        caSe = $(this)
          .find("td")
          .slice(1, 2)
          .text()
          .trim();
        death = $(this)
          .find("td")
          .slice(3, 4)
          .text()
          .trim();
        date = Date();
        localidades.push({
          localidade: localidade,
          cases: caSe,
          death: death,
          date: date
        });
        // const json2csvParser = new Parser();
        // const csv = json2csvParser.parse(localidades);
        // fs.writeFileSync(
        //   "./dadosCSV/covid.19" + Datecsv() + ".csv", csv, "utf8");
      });
      console.log(
        JSON.stringify(localidades[0]) + " " + "Captura realizada com sucesso"
      );

      save(localidades);
    });
  };

  crawler();
}, 1800000 * 2);
