const connectToMongo = require('./db')
const express = require('express')
require('dotenv').config({ path: './.env' })

connectToMongo();

const app = express()


app.use(express.json())

// Available routes
app.use('/api/auth',require('./routes/auth'))


app.listen(process.env.PORT, () => {
  
})