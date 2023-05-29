const router = require('express').Router();

const {
    getUsers,
    getUserById,
    createUserId,
    updateUserId,
    deleteUserId,
} = require('../../controllers/userController');

// api/users
router.route('/').get(getUsers).post(createUserId);

// api/users/:UserId
router
.route('/:UserId')
.get(getUserById)
.put(updateUserId)
.delete(deleteUserId);

module.exports = router;














