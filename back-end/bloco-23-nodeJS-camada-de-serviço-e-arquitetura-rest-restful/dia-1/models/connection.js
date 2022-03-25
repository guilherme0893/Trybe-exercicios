const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'trybe12345',
  host: 'localhost',
  database:  'users_crud',
});

module.exports = connection;
