const { Router } = require('express');

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('./users');

const { loginUser, signUpUser } = require('./auth');

const router = Router();

router
  .get('/users', getUsers)
  .get('/users/:id', getUserById)
  .post('/users', createUser)
  .put('/users/:id', updateUser)
  .delete('/users/:id', deleteUser)

  .post('/login', loginUser)
  .post('/signup', signUpUser);

module.exports = router;