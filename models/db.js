const mysql = require("mysql");

// 配置数据库连接池 haha
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "8.140.145.252",
  user: "root",
  password: "MyNewPass2021!",
  database: "myblog_test",
});

// var pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "myblog",
// });

module.exports = {
  query: function (sql, params) {
    return new Promise(function (resolve, reject) {
      try {
        pool.getConnection(function (err, connection) {
          if (err) reject(err); // not connected!
          connection.query(sql, params, function (error, results, fields) {
            connection.release();
            if (error) reject(error);
            resolve(results);
          });
        });
      } catch (err) {
        console.log(err);
      }
    });
  },
};
