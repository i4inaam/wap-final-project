const User = require('../model/user');

exports.getUser = (req, res, next) => {
      res.status(200).json(User.findUser(req.body));
}