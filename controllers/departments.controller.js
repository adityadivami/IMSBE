const db = require("../models");
const Departments = db.departments;
const Op = db.Sequelize.Op;

const getAllDepartments = (req, res, next) => {
  Departments.findAll()
    .then((response) => {
      res.status(200).send({ success: true, message: response });
    })
    .catch(() => {
      res.status(400).send({ success: false, message: "failed to get data" });
    });
 /*  res.status(200).json({
    message: "Updated departments !",
  }); */
};

module.exports = getAllDepartments;
