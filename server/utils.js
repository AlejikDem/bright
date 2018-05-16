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

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) throw new Error('No token provided.');

    const decoded = await jwt.verify(token, process.env.SECRET);
    if(!decoded) throw new Error('Failed to authenticate token.');

    req.userId = decoded.id;
    next();
  } catch (e) { errorHandler(e, res); }
};

module.exports = {
  errorHandler,
  createToken,
  verifyToken
};