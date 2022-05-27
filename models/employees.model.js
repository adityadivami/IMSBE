module.exports = (sequelize, Sequelize,roles, departments ) => {
    const Employee = sequelize.define("employees", {
      emailId: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
        field: "Email ID",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
        field: "Name",
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "Username",
      },
      dob:{
          type: Sequelize.DATE  ,
          allowNull: false,
          field: "Date of Birth",
      },
      empID:{
          type:Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          field: "Employee ID"
      },
      roleId:{
        type: Sequelize.UUID,
        field: "Role ID"
      },
      depId:{
        type: Sequelize.UUID,
        field: "Department ID"
      }

    });
    Employee.belongsTo(roles,{foreignKey:'roleId',targetKey:'id'})
    Employee.belongsTo(departments,{foreignKey:'depId',targetKey:'id'})
    return Employee;
  };

