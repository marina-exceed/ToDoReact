const UserModel = require('../models/user');

const registration = (req, res) => {
  const {username, password, email} = JSON.parse(req.body);

  const NewUser = new UserModel({
    username,
    password,
    email
  });

  NewUser.save((err, item) => {
    if (err) {
      return res.status(409).json({ err: "such email is already taken" }).end();
    }

    res.status(200).json(item).end();
  });
};

module.exports = registration;