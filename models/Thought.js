const { Schema, model } = require('mongoose');


const thoughtTextSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
        },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
        },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        },
    ]
    },
);

thoughtTextSchema
  .virtual('reactionCount')
  .get(function() {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtTextSchema);

module.exports = Thought;