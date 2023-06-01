const {User} = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            console.log(users);
            return res.json(users);
            
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    // Get user by id
    async getUserById(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.json(user);
            
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    // Create user by id
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            return res.json(user);
            
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    // Update user by id
    async updateUser(req, res) {
        try {
            const user = await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.json(user);
            
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    // Delete user by id
    async deleteUser(req, res) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.json(user);
            
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
};