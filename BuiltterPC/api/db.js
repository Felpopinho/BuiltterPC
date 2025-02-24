import mysql from 'mysql2'
import 'dotenv/config'

export const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    database : process.env.DB_NAME,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD
});


