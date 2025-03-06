import mysql from 'mysql'
import 'dotenv/config'

export const db = mysql.createConnection({
    host     : "bhkcblgonvrzmbiawbut-mysql.services.clever-cloud.com",
    database : "bhkcblgonvrzmbiawbut",
    user     : "uzafcrmlhdppkmek",
    password : "AUFoDFchry9QRg7R8OZS"
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


