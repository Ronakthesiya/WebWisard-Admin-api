const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id : {
        type : mongoose.ObjectId,
        require : true
    },
    Name : {
        type : String
    },
    emailId : {
        type: String
    },
    joinningDate : {
        type: Date
    },
    gender : {
        type: String
    },
    image : {
        type: String
    },
    city : {
        type: String
    },
    phone : {
        type: Number
    },
    age : {
        type: Number
    },
    experience : {
        type: Number
    }
})

module.exports = mongoose.model('admin',schema);