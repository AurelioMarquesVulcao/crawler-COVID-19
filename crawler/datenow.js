module.exports = function RetornaDataHoraAtual() {
    var dNow = new Date();
    var localdate =
      dNow.getDate() +
      "/" +
      (dNow.getMonth() + 1) +
      "/" +
      dNow.getFullYear() +
      " " +
      dNow.getHours() +
      ":" +
      dNow.getMinutes();
    return localdate;
  };
  
//   module.exports = function RetornaData() {
//     var dNow = new Date();
//     var localdate =
//       dNow.getDate() +
//       "/" +
//       (dNow.getMonth() + 1) +
//       "/" +
//       dNow.getFullYear();
//     return localdate;
//   };