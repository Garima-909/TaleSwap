const mongoose = require("mongoose");
const User = require("../model/user.js");
const Group = require("../model/group.js");
const Post = require("../model/post.js");
const Comment = require("../model/comment.js");

require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create sample users
const usersData = [
    {
        username: "john_doe",
        email: "john@example.com",
        password: "password123",
        joinDate: new Date(),
        lastActive: new Date(),
    },
    {
        username: "jane_doe",
        email: "jane@example.com",
        password: "securepassword",
        joinDate: new Date(),
        lastActive: new Date(),
    },
    // Add more users here as needed
];

// Save users to the database
User.insertMany(usersData)
    .then((users) => {
        console.log("Users successfully saved to the database:", users);

        // Create sample groups
        const groupsData = [];
        for (let i = 0; i < 6; i++) {
            groupsData.push({
                members: users.map((user) => user._id),
                name: `Group ${i + 1}`,
            });
        }

        // Save the groups to the database
        return Group.insertMany(groupsData);
    })
    .then((groups) => {
        console.log("Groups successfully saved to the database:", groups);

        // Create sample posts
        const postsData = [];
        groups.forEach((group) => {
            for (let i = 0; i < 2; i++) {
                // Create 2 posts for each group
                postsData.push({
                    createdBy: group.members[0], // Assuming the first member creates the post
                    content: `Sample post ${i + 1} for ${group.name}`,
                    group: group._id,
                    likes: 0,
                    contributors: group.members,
                });
            }
        });

        // Save the posts to the database
        return Post.insertMany(postsData);
    })
    .then((posts) => {
        console.log("Posts successfully saved to the database:", posts);

        // Create sample comments
        const commentsData = [];
        posts.forEach((post) => {
            for (let i = 0; i < 3; i++) {
                // Create 3 comments for each post
                commentsData.push({
                    user: post.createdBy, // Assuming the post creator leaves a comment
                    post: post._id,
                    content: `Sample comment ${i + 1} on the post.`,
                });
            }
        });

        // Save the comments to the database
        return Comment.insertMany(commentsData);
    })
    .then((comments) => {
        console.log("Comments successfully saved to the database:", comments);
    })
    .catch((error) => {
        console.error("Error saving data to the database:", error);
    })
    .finally(() => {
        // Disconnect from the MongoDB database
        mongoose.disconnect();
    });
