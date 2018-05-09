const User = require('../models/User');
const { errorHandler } = require('../utils');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.send({
      success: true,
      users
    });
  } catch (e) { errorHandler(e, res); }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.send({
      success: true,
      user
    });
  } catch (e) { errorHandler(e, res); }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create([req.body.user]);

    res.send({
      success: true,
      user
    });
  } catch (e) { errorHandler(e, res); }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    Object.keys(req.body.user).forEach(key => {
      user[key] = req.body.user[key];
    });

    await user.save();
    res.send({ success: true });
  } catch (e) { errorHandler(e, res); }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.send({ success: true });
  } catch (e) { errorHandler(e, res); }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};