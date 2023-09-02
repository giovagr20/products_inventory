const mysql = require('mysql2/promise');
const utilsDb = require('../utils/db.utils')

const pool = mysql.createPool({
  host: utilsDb.HOST,
  user: utilsDb.USER,
  password: utilsDb.PASSWORD,
  database: utilsDb.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


module.exports = pool;
