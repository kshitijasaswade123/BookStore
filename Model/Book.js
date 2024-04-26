const moongoose = require('mongoose');
const { type } = require('os');
const BookSchema = new moongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true

    },
    cover:{
        type:String

    },
    createdDate:{
        type:Date,
        default:Date.now() 
    }
})

module.exports = moongoose.model('Book',BookSchema);