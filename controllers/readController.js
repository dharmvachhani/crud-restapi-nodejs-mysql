const user = require("../models/usersModel");

const read = function (req, res, next) {
  user.get(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else if (!result) {
      return res.status(404).send();
    } else {
      res.status(200).send(result);
    }
  });
};

const readOne = function (req, res, next) {
  const id = req.params.id;
  user.getById(id, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else if (!result) {
      return res.status(404).send();
    } else {
      res.status(200).send(result);
    }
  });
};

module.exports = { read, readOne };
