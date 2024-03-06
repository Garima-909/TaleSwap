const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        trim: true,
        required: true,
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: "Group",
    },
    likes: {
        type: Number,
    },
    image: {
        type: Buffer,
    },
    contributors: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Post", PostSchema);
