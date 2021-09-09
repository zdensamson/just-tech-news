const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations 
// ONE-TO-MANY
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// ONE-TO-ONE
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// MANY-TO-MANY
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'        
});

// ONE-TO-ONE
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// ONE-TO-MANY
User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Vote };