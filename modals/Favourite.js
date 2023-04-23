const mongoose = require('mongoose');
const {Schema} = mongoose;

const Favourite = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    favourite:{
        type:Array
    }
})
const Fav = mongoose.model('fav',Favourite);
module.exports= Fav