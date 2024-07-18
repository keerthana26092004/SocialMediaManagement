const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    platform:{
        type:String
    },
    follower_count:{
        type:Number
    },
    demographic:{
        type:Object
    }
})

const social_tracker = mongoose.model('stats', schema)

module.exports = {social_tracker}