import mysql from "mysql2/promise";
import 'dotenv/config'

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,                         
  password: process.env.DB_PASSWORD,                
  database: process.env.DB_NAME,                     
  port: process.env.DB_PORT,                             
  ssl: { rejectUnauthorized: false }
});

db.getConnection((err) => {
  if (err) {
    console.error("Erro ao conectar:", err);
    return;
  }
  console.log("Conectado ao MySQL");
});

