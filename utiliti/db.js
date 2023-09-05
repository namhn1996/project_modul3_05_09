const mysql = require("mysql2");
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    database: "user-manager",
    password: "",
  })
  .promise();

module.exports = pool;
