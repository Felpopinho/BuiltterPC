import mysql from "mysql2"

const db = mysql.createPool({
    host: "bhkcblgonvrzmbiawbut-mysql.services.clever-cloud.com",
    user: "uzafcrmlhdppkmek",
    password: "AUFoDFchry9QRg7R8OZS",
    database: "bhkcblgonvrzmbiawbut",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

export default db
