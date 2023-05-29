const {Thought,Reaction}  = require('../models');


module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
            
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findById(req.params.id);
            if (!thought) {
                return res.status(404).json({message: 'No thought found with this id!'});
            }
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if (!thought) {
                return res.status(404).json({message: 'No thought found with this id!'});
            }
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            if (!thought) {
                return res.status(404).json({message: 'No thought found with this id!'});
            }
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Add a reaction to a thought
    async addReaction(req, res) {
        try {
            const reaction = await Reaction.create(req.body);
            res.status(200).json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a reaction
    async deleteReaction(req, res) {
        try {
            const reaction = await Reaction.findByIdAndDelete(req.params.id);
            if (!reaction) {
                return res.status(404).json({message: 'No reaction found with this id!'});
            }
            res.status(200).json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};