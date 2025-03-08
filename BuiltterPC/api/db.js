import mysql from 'mysql2'
import 'dotenv/config'

export const db = mysql.createPool({
    host     : process.env.DB_HOST,
    database : process.env.DB_NAME,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    waitForConections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.connect();

db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('Database connected');
});


