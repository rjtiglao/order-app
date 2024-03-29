// Set up MySQL connection.
const mysql = require("mysql");
const key = require("./keys");

//connection configuration
const connection = mysql.createConnection({
  host: key.host,
  port: key.port,
  user: key.username,
  password: key.password,
  database: key.database
});
console.log("Hello");
console.log(key.host);
//Makes connection with DB
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export
module.exports = connection;
