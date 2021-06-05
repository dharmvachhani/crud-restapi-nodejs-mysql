const user = require("../models/usersModel");

module.exports = function (req, res, next) {
  const id = req.params.id;
  user.deleteById(id, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};
