// lingando servidor
// npm start

const http = require("http");
const app = require("./src/app");

const port = process.env.Port || 3000;
const server = http.createServer(app);
server.listen(port);

// const express = require("express");
// const conectDB = require("./db/conection");

// const app = express();

// conectDB();

// app.use(express.json({ extended: false }));

// app.use("/api/userModel", require("./api/User"));

// const Port = process.env.Port || 3000;

// app.listen(Port, () => console.log("Server Started"));

// lingando servidor
// npm start
