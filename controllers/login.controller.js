const db = require("../models");
const Employees = db.employees;
const Op = db.Sequelize.Op;

const getOneEmployee = (req, res, next) => {
  const { username, password } = req.body;
  Employees.findOne({
    where: { username, password },
  })
    .then((response) => {
      res.status(200).send({
        success: true,
        message: "User authentication success",
        data: response,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: false,
        message: "User authentication failure",
        data: error,
      });
    });
};

module.exports = getOneEmployee;