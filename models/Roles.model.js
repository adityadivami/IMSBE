module.exports = (sequelize, Sequelize) => {
  const Roles = sequelize.define("role", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      field: "Role ID",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      field: "Name",
    },
    abbr: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "Abbreviation",
    },
  });
  return Roles;
};
