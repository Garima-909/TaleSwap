const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    avatar: {
        type: Buffer,
    },
    name: {
        type: String,
        required: true,
        maxLength: 30,
        trim: true,
    },
});

module.exports = mongoose.model("Group", groupSchema);
