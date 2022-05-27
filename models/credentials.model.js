module.exports = (sequelize, Sequelize) => {
    const Credentials = sequelize.define("department", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: "Department ID",
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
    return Credentials;
  };
  