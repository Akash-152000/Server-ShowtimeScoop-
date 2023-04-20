const mongoose = require('mongoose')
const mongoURI = "mongodb://0.0.0.0:27017/ShowTimeScoop"

const connectToMongo = () =>{
    mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(()=>console.log("Connected"))
    .catch((err)=>{console.log(err)})
}

module.exports = connectToMongo;