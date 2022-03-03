const jwt = require('jsonwebtoken');

function authenticateToken(req, rese, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'Daco_SecretKEY', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function generateAccessToken(username) {
  return jwt.sign({ data: username }, 'Daco_SecretKEY', {
    expireIn: '5h',
  });
}

module.exports = {
  authenticateToken,
  generateAccessToken,
};
