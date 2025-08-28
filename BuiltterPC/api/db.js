import mysql from 'mysql2'
import 'dotenv/config'

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 20,
    waitForConnections: true,
    queueLimit: 0,
    port: 3306
});

db.getConection(err => {
  if (err) {
    console.error("Erro ao conectar:", err);
    return;
  }
  console.log("Conectado ao MySQL do InfinityFree!");
});

