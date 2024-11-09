//import mysql from 'mysql'
import 'dotenv/config'
//
//export const db = mysql.createConnection({
//    host     : process.env.DB_HOST,
//    database : process.env.DB_NAME,
//    user     : process.env.DB_USER,
//    password : process.env.DB_PASSWORD
//});

//export const db = new Sequelize('mysql://uzafcrmlhdppkmek:AUFoDFchry9QRg7R8OZS@bhkcblgonvrzmbiawbut-mysql.services.clever-cloud.com:3306/bhkcblgonvrzmbiawbutnpm')
//
//try {
//    await db.authenticate();
//    console.log('Connection has been established successfully.');
//  } catch (error) {
//    console.error('Unable to connect to the database:', error);
//}

//export const db = mysql.createConnection({
//    host: "bhkcblgonvrzmbiawbut-mysql.services.clever-cloud.com",
//    user: "uzafcrmlhdppkmek",
//    password: "AUFoDFchry9QRg7R8OZS",
//    database: "bhkcblgonvrzmbiawbut",
//});
//
import mysql from 'mysql2'

export const db = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

db.getConnection((err, conn) => {
    if (err) {
        return console.log(err)
    } 
    console.log("Connected successfully")
})

//mysql://uzafcrmlhdppkmek:AUFoDFchry9QRg7R8OZS@bhkcblgonvrzmbiawbut-mysql.services.clever-cloud.com:3306/bhkcblgonvrzmbiawbutnpm


