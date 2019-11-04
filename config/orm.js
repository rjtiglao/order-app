const connection = require("./connection.js");

//blank query variable 
let query = "";

let orm = {

//This Query Selects all from the MYSQL DB
selectAll: function (cb){
query = "SELECT * FROM burgers";
connection.query(query, function(err, result) {
    if (err) throw err;
    cb(result);
  })
},

//This Query Inserts the Variable into the MYSQL DB
insertOne: function(type){
query = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
connection.query(query,[type, 0], function(err, result) {
        if (err) throw err;
      });
},

//This Query updates a value in the mysql database (the boolean to true)
updateOne: function (choice) {
query = "UPDATE burgers SET ? WHERE ?";
connection.query(query,[{devoured: 1}, {burger_name: choice}], function(err, result) {
    if (err) throw err;
  }); 
}
//export this for the .JS file
}

//bellow is a sample callback function so we can deal with the 
//async properties of mysql queries 
// orm.selectAll(function(result) {
// let data = result
// console.log(data);
// })

module.exports = orm;
