import mysql from "mysql2";

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    conectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, conn) =>{
    if(err) console.log(err)
    console.log("conexão sucedida")
})
