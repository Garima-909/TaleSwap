const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        maxLength: 40,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 8,
        maxLength: 24,
    },
    avatar: {
        type: Buffer,
    },
});

module.exports = mongoose.model("User", userSchema);
