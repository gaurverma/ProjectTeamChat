const mongoose = require("mongoose");
const validator = require("validator");

const userSchema  =  new mongoose.Schema({
    socketid:{
        type:String,
    },
    username: {
        type: String,
        required:true
    },
    room:{
        type: String,
        required:true
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required:true,
    }
});


const User = new mongoose.model("User",userSchema);
module.exports = User;

