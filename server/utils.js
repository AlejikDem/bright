const jwt = require('jsonwebtoken');

const errorHandler = (e, res) => {
  res.status(500).send({
    success: false,
    error: e.message
  });
};

const createToken = id => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: 86400 });
};

module.exports = {
  errorHandler,
  createToken
};