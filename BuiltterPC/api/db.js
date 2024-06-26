import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Fel_popinho2609",
    database: "crudbuiltterpc"
});

