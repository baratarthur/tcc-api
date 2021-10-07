module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  port: 5432,
  migrations:
    process.env.ENVIRONMENT === "DEV"
      ? ["./src/database/migrations/*.ts"]
      : ["./dist/src/database/migrations/*.js"],
  entities:
    process.env.ENVIRONMENT === "DEV"
      ? ["./src/modules/**/entities/*.ts"]
      : ["./dist/src/modules/**/entities/*.js"],
  cli: {
    migrationsDir:
      process.env.ENVIRONMENT === "DEV"
        ? "./src/database/migrations"
        : "./dist/src/database/migrations",
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
