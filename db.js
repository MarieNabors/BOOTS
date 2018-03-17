var mysql = require('mysql')
var connection = mysql.createConnection({
  host: iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com,
  user: q148vjr9uxbbomyo,
  password: mcubyi2fskglaz1z,
  bootcamp: process.env.DB_BOOTCAMP,
  database : process.env.DB_NAME,
  socketPath: '/tmp/mysql.sock'
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = connection;