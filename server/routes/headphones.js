const express = require('express');
const mysql = require("mysql2")
const db = require("../utils/databaseConnection")

const router = express.Router();
db.connect()

router.get("/", (req, res) => {
    const sqlQuery = "SELECT * FROM products.headphones"
    db.query(sqlQuery, (err, result) => {
        res.send(result)
    })
})

router.get("/:id", (req, res) => {
    const sqlQuery = "SELECT * FROM products.headphones where id = ?;"
    const {
        id
    } = req.params
    db.query(sqlQuery, [id], (err, result) => {
        res.send(result)
    })
})





module.exports = router