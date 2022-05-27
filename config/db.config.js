module.exports = {
  HOST: "jenkins.divami.com",
  USER: "postgres",
  PASSWORD: "divami",
  DB: "ismsdb",
  dialect: "postgres",
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
