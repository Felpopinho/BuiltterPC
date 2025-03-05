import mysql from 'mysql2'
import 'dotenv/config'

export const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    database : process.env.DB_NAME,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD
});

db.connect();

db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('Database connected');
});

//DB_HOST="localhost"
//DB_NAME="crudbuiltterpc"
//DB_USER="root"
//DB_PASSWORD="Fel_*******09"
//DB_PORT="3300"


