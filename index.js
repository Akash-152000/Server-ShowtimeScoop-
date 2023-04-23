const connectToMongo = require('./db')
const express = require('express')
require('dotenv').config({ path: './.env' })
const cors = require("cors");

connectToMongo();
const app = express()
app.use(cors());


app.use(express.json())

// Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/fav',require('./routes/fav'))


app.listen(process.env.PORT, () => {
  
})