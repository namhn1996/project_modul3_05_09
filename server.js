const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const usersRouter = require("./router/users.router");

server.use("/api/v1/users", usersRouter);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
