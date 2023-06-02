const router = require('express').Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// api/users
router.route('/').get(getUsers).post(createUser).post(addFriend);

// api/users/:UserId
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)
.post(addFriend)
.delete(removeFriend)


module.exports = router;














