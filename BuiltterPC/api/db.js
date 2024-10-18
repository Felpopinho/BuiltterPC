import Sequelize from 'sequelize'
import mysql from 'mysql'

export const bd = mysql.createConnection({
    host     : process.env.MYSQL_ADDON_HOST,
    database : process.env.MYSQL_ADDON_DB,
    user     : process.env.MYSQL_ADDON_USER,
    password : process.env.MYSQL_ADDON_PASSWORD
});

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

//mysql://uzafcrmlhdppkmek:AUFoDFchry9QRg7R8OZS@bhkcblgonvrzmbiawbut-mysql.services.clever-cloud.com:3306/bhkcblgonvrzmbiawbutnpm

