var con = require("../config/db");

const create = function (data, callback) {
  con.query(
    "INSERT INTO user (name,email,mobile,password) VALUES (?,?,?,?)",
    [data.name, data.email, data.mobile, data.password],
    function (err, result) {
      if (err) {
        // console.log("error: ", err);
        callback(err, null);
        return;
      }
      // console.log("created: ", { id: result.insertId });
      callback(null, { id: result.insertId });
    }
  );
};

const get = function (callback) {
  con.query("SELECT * FROM user", function (err, result) {
    if (err) {
      // console.log("error: ", err);
      callback(err, null);
      return;
    }
    // console.log(result);
    callback(null, result);
  });
};

const getById = function (id, callback) {
  con.query("SELECT * FROM user WHERE id = ?", id, function (err, result) {
    if (err) {
      // console.log("error: ", err);
      callback(err, null);
      return;
    }
    // console.log(result);
    callback(null, result);
  });
};

const updateById = function (id, data, callback) {
  con.query(
    "UPDATE user SET name = ?,email =?,mobile =?,password = ? WHERE id = ?",
    [data.name, data.email, data.mobile, data.password, id],
    function (err, result) {
      if (err) {
        // console.log("error: ", err);
        callback(err, null);
        return;
      }
      if (result.affectedRows == 0) {
        callback({ kind: "not_found" }, null);
        return;
      }
      // console.log("updated: ", { id: id, ...data });
      callback(null, { id: id, ...data });
    }
  );
};

const deleteById = function (id, callback) {
  con.query("DELETE FROM user WHERE id = ?", id, function (err, result) {
    if (err) {
      // console.log("error: ", err);
      callback(err, null);
      return;
    }
    if (result.affectedRows == 0) {
      callback({ kind: "not_found" }, null);
      return;
    }

    // console.log("deleted: ", { id: id, ...data });
    callback(null, result);
  });
};

const customQuery = function (query, callback) {
  con.query(query, function (err, result) {
    if (err) {
      // console.log("error: ", err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
};

module.exports = { create, get, getById, updateById, deleteById, customQuery };
