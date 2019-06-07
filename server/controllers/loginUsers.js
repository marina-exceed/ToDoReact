const EnterUserModel = require('../models/user');

const confirmation = (req, res) => {
  const {email, password} = JSON.parse(req.body);

  EnterUserModel.findOne({email, password}, (err, user) => {
    if (err) {
      return res.status(500).json({err: ",jg"}).end();
    }
    if (!user) {
      return res.status(500).json({message: 'User not found.'}).end();
    }

    res.status(200).json(user).end();
  });
};

module.exports = confirmation;
