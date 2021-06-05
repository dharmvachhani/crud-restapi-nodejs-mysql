var users = require("../models/usersModel");

module.exports = function (req, res, next) {
  users.create(req.body, function (err, result) {
    if (err) throw err;

    res.status(201).send(result);
  });
};
