const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const employeeRoutes = require("./routes/employees.routes");
const departmentRoutes = require("./routes/department.routes");
const rolesRoutes = require("./routes/roles.routes");
const authenticationRoutes = require("./routes/login.routes");

const db = require("./models");

db.sequelize.sync();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(employeeRoutes);
app.use(departmentRoutes);
app.use(rolesRoutes);
app.use(authenticationRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
