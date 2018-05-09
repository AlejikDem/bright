const bcrypt = require('bcrypt');

const User = require('../models/User');
const { errorHandler, createToken } = require('../utils');

const signUpUser = async (req, res) => {
  try {
    const user = await User.create([req.body.user]);
    const token = await createToken(user._id);

    res.send({
      success: true,
      user,
      token
    });
  } catch (e) { errorHandler(e, res); }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select('+password');
    if (!user) throw new Error('No user with such email');

    const properPassword = await bcrypt.compare(req.body.password, user.password);
    if (!properPassword) throw new Error('Wrong password');

    const token = await createToken(user._id);

    // eslint-disable-next-line no-unused-vars
    const { password, ...userWithoutPassword } = user.toJSON();

    res.send({
      success: true,
      user: userWithoutPassword,
      token
    });
  } catch (e) { errorHandler(e, res); }
};

module.exports = {
  loginUser,
  signUpUser
};