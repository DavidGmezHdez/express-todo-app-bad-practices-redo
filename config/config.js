import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV || "local";

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 8000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
  },
};
const local = {
  app: {
    port: process.env.TEST_APP_PORT || 8000,
  },
  db: {
    host: process.env.LOCAL_DB_HOST || "localhost",
    port: process.env.LOCAL_DB_PORT || 27017,
  },
};

const config = {
  dev,
  local,
};

module.exports = config[env];
