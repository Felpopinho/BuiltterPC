import mysql from "mysql2/promise";
import 'dotenv/config'

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,                         
      password: process.env.DB_PASSWORD,                
      database: process.env.DB_NAME,                     
      port: process.env.DB_PORT,                             
      ssl: { rejectUnauthorized: false }
    });

    const [rows] = await connection.execute("SELECT NOW() AS data");
    await connection.end();

    res.status(200).json({ sucesso: true, data: rows[0].data });
  } catch (error) {
    console.error("Erro de conexão:", error);
    res.status(500).json({ sucesso: false, erro: error.message });
  }
}
//export const db = mysql.createPool({
//   host: 
//    database: 
//    user: 
//    password: 
//    connectionLimit: 20,
//    waitForConnections: true,
//    queueLimit: 0,
//    port: 
//});
//
//db.getConnection((err) => {
//  if (err) {
//    console.error("Erro ao conectar:", err);
//    return;
//  }
//  console.log("Conectado ao MySQL");
//});
//
//