var mysqlconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"mock_database_no01"
  });
  mysqlconnection.connect(function(err) {
    if (!err){
        console.log("Connected!");

    } else {
        console.log("Not Connected!");
    }
  });
  module.exports=mysqlconnection