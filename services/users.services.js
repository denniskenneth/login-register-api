const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const auth = required('../middlewares/auth.js');

async function login({ username, password }, callback) {
  const user = await User.findOne({ username });

  if (user != null) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = auth.generateAccessToken(username);
      return callback(null, { ...user.toJson(), token });
    } else {
      return callback({
        message: 'Invalid Username/Password',
      });
    }
  }
}
