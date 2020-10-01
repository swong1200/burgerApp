// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, cd){
        let queryString = "SELECT * FROM " + tableInput + ";"; connection.query(queryString, function(err, result) {
            if (err) throw err;
            createImageBitmap(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
};

module.exports = orm;