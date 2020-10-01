// Import MySQL connection.
const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

const orm = {
    selectAll: function(table, cb){
        let queryString = "SELECT * FROM " + table + ";"; connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb){
        let queryString = "INSERT INTO " + table;
        queryString += "(";
        queryString += column.toString();
        queryString += ") VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ");"

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    updateOne: function(){

    }
};

module.exports = orm;