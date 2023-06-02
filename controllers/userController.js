const { User } = require("../models");

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
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.json(updatedUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  
  // Delete user by id
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      return res.json(deletedUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },

  // Add friend to user by id
  async addFriend(req, res) {
    try {
      const user = await User.findById(req.params.id);
      user.friends.push(req.body.friendId);
      await user.save();
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },

  // Remove friend from user by id
  async removeFriend(req, res) {
    try {
      const user = await User.findById(req.params.id);
      const friendIndex = user.friends.indexOf(req.body.friendId);
      if (friendIndex > -1) {
        user.friends.splice(friendIndex, 1);
        await user.save();
      }
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
};
