const express = require("express")
const db = require("./utils/databaseConnection")
const cors = require("cors")


const PORT = process.env.PORT || 4001
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

db.connect()

// Headphone API Routes
app.use('/', require('./routes/cart'));
app.use('/products/headphones', require('./routes/headphones'));
app.use('/products/speakers', require('./routes/speakers'));
app.use('/products/earphones', require('./routes/earphones'));

app.listen(PORT, (req, res) => {
    console.log(`Server is now running on ${PORT}`)
})