
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return next ({
      status: 401, message: 'token required'
    })
  }
  jwt.verify(token, jwtSecret, (err, decodedToken) => {
    if (err) {
      return next({
        status: 401, message: 'token invalid'
      })
    }
    req.decodedToken = decodedToken
    next()
  })
};
