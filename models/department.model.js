module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define("department", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
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
    return Department;
  };
  