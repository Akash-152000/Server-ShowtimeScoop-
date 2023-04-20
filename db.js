const mongoose = require('mongoose')
require('dotenv').config({ path: './.env' })

const connectToMongo = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(()=>console.log("Connected"))
    .catch((err)=>{console.log(err)})
}

module.exports = connectToMongo;