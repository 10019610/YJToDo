const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: "144.24.68.69",
	database: "testdb",
	user: "yang",
	password: "Rlagus12!@",
});

module.exports = pool;
