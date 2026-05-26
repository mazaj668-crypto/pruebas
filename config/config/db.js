const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // si tienes contraseña ponla aquí
  database: 'evaluacion_s12'
});

connection.connect((err) => {
  if (err) {
    console.log('Error conexión DB:', err);
  } else {
    console.log('Conectado a MySQL');
  }
});

module.exports = connection;