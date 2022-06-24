const express = require("express")
const db = require("./utils/databaseConnection")
const cors = require("cors")


const PORT = process.env.PORT || 4001
const app = express()
app.use(cors())
const router = express.Router()

db.connect()

app.get("/", (req, res) => {
    const sqlQuery = "SELECT * FROM products.earphones;"
    db.query(sqlQuery, (err, result) => {
        res.send(result)
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Server is now running on ${PORT}`)
})