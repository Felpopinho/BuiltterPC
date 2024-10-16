import mysql from "mysql2"

const pool = mysql.createPool({
    host: "bhkcblgonvrzmbiawbut-mysql.services.clever-cloud.com",
    user: "uzafcrmlhdppkmek",
    password: "AUFoDFchry9QRg7R8OZS",
    database: "bhkcblgonvrzmbiawbut",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

export default pool
