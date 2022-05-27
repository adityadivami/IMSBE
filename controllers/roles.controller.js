const db = require("../models");
const Roles = db.roles;
const Op = db.Sequelize.Op;

const getAllDepartments = (req, res, next) => {
  Roles.findAll()
    .then((response) => {
      res.status(200).send({ success: true, message: response });
    })
    .catch(() => {
      res.status(400).send({ success: false, message: "failed to get data" });
    });
};

module.exports = getAllDepartments;
