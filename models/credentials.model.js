module.exports = (sequelize, Sequelize, employees) => {
  const Credentials = sequelize.define("department", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      field: "Department ID",
    },
    username: {
      type: Sequelize.string,
      field: "Username",
    },
    password: {
      type: Sequelize.string,
      field: "Password",
    },
  });
  /* Credentials.belongsTo(employees, {
    foreignKey: "password",
    targetKey: "password",
  });
  Credentials.belongsTo(employees, {
    foreignKey: "username",
    targetKey: "username",
  }); */
  return Credentials;
};
