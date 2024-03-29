const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('user', userSchema);