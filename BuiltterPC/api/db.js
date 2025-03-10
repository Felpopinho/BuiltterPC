import mysql from 'mysql2'
import 'dotenv/config'

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 5,
    waitForConnections: true,
    queueLimit: 0
});

let connections = 0

db.getConnection((err, conn) =>{
  if(err) console.log(err)
  connections = connections + 1
  console.log(`Eu sou a ${connections}º conexão`)
})


