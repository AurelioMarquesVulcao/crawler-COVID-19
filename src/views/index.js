const url = "http://localhost:8000/places";

console.log(url)


var jsonArray = [{
    idcancelamento: "383",
    idcliente: "2409",
    emailcancelamento: "1",
    financeiro: "1",
    suporte: "1"
  },
  {
    idcancelamento: "384",
    idcliente: "3457",
    emailcancelamento: "1",
    financeiro: "1",
    suporte: null
  }
];

alasql('SELECT * INTO XLSX("arquivo.xlsx", {headers: true}) FROM ?', [jsonArray]);