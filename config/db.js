const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "restapi",
});

module.exports = connection;
