const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trimmed: true
        },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
        },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
        ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    },
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
