import mysql from "mysql";

export const db = mysql.createConnection({
    host: "builtterpc.vercel.app",
    user: "root",
    password: "Fel_popinho2609",
    database: "crudbuiltterpc"
});