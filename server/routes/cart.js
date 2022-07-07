const express = require('express');
const mysql = require("mysql2")
const db = require("../utils/databaseConnection")

const router = express.Router();
db.connect()

router.get("/", (req, res) => {
    const sqlQuery = "SELECT * FROM products.cart"
    db.query(sqlQuery, (err, result) => {
        res.send(result)
    })
})

router.post("/", (req, res) => {
    const { itemId, cartName, cartImage, quantity, price } = req.body
    const sqlQuery = `INSERT INTO products.cart (itemId, cartName, cartImage, quantity, price) VALUES (?,?,?,?,?)`;

    const response = db.query(sqlQuery,[itemId, cartName, cartImage, quantity, price], (err, result) => {
        if (err) {
            return err
        }
    })
    return response
})

router.put("/", (req, res) => {
    const {quantity,itemId} = req.body.data
    const sqlQuery = "UPDATE products.cart SET quantity = ? WHERE itemId = ?";
    db.query(sqlQuery, [quantity,itemId],(err, result) => {
        res.send(result)
    })
})

router.delete("/", (req, res) => {
    const sqlQuery = "DELETE FROM products.cart"
    db.query(sqlQuery, (err, result) => {
        res.send(result)
    })
})

module.exports = router