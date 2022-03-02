const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');
const userService = require('../services/users.services');

exports.register = (req, res, next) => {
  const { password } = req.body;
  const salt = bcryptjs.genSalt(10);

  req.body.password = bcryptjs.hashSync(password, salt);
};
