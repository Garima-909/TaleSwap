const mongoose = require("mongoose");
const User = require("./path/to/userSchema");
const Group = require("./path/to/groupSchema");
const Post = require("./path/to/postSchema");
const Comment = require("./path/to/commentSchema");

// Connect to MongoDB
mongoose.connect("mongodb://localhost/your_database_name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create sample users
const user1 = new User({
  username: "john_doe",
  email: "john@example.com",
  password: "password123",
  joinDate: new Date(),
  lastActive: new Date(),
});

const user2 = new User({
  username: "jane_doe",
  email: "jane@example.com",
  password: "securepassword",
  joinDate: new Date(),
  lastActive: new Date(),
});

// Save users to the database
Promise.all([user1.save(), user2.save()])
  .then((users) => {
    console.log("Users successfully saved to the database:", users);

    // Create sample group with users
    const group = new Group({
      members: users.map(user => user._id),
      name: "Sample Group",
    });

    // Save the group to the database
    return group.save();
  })
  .then((group) => {
    console.log("Group successfully saved to the database:", group);

    // Create a sample post
    const post = new Post({
      createdBy: group.members[0], // Assuming the first member creates the post
      content: "This is a sample post",
      group: group._id,
      likes: 0,
      contributors: group.members,
    });

    // Save the post to the database
    return post.save();
  })
  .then((post) => {
    console.log("Post successfully saved to the database:", post);

    // Create a sample comment
    const comment = new Comment({
      user: post.createdBy, // Assuming the post creator leaves a comment
      post: post._id,
      content: "This is a sample comment on the post.",
    });

    // Save the comment to the database
    return comment.save();
  })
  .then((comment) => {
    console.log("Comment successfully saved to the database:", comment);
  })
  .catch((error) => {
    console.error("Error saving data to the database:", error);
  })
  .finally(() => {
    // Disconnect from the MongoDB database
    mongoose.disconnect();
  });
