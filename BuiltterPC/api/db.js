import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "bhkcblgonvrzmbiawbut-mysql.services.clever-cloud.com",
    user: "uzafcrmlhdppkmek",
    password: "AUFoDFchry9QRg7R8OZS",
    database: "bhkcblgonvrzmbiawbut",
});

