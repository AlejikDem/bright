const { Router } = require('express');
const  { verifyToken } = require('../utils');

const {
  getUsers,
  getUserById,
  getActiveUser,
  createUser,
  updateUser,
  deleteUser
} = require('./users');

const { loginUser, signUpUser } = require('./auth');

const router = Router();

router
  .get('/users', verifyToken, getUsers)
  .get('/users/activeUser', verifyToken, getActiveUser)
  .get('/users/:id', verifyToken, getUserById)
  .post('/users', verifyToken, createUser)
  .put('/users/:id', verifyToken, updateUser)
  .delete('/users/:id', verifyToken, deleteUser)

  .post('/login', loginUser)
  .post('/signup', signUpUser);

module.exports = router;