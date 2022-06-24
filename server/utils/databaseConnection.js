const mysql = require("mysql2")

const db = mysql.createConnection({
    host: 'localhost',
    user: "NMA",
    password: "kalba1992",
    database: 'products'
})


module.exports = db