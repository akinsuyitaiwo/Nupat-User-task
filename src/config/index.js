import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  DATABASE_URL: process.env.DATABASE_URL,
};

Object.entries(config).map(([key, value]) => {
  if (!key) {
    console.log(`Missing key ${key}`);
    process.exit(1);
  }
  if (!value) {
    console.log(`Missing value for key ${key}`);
    process.exit(1);
  }
});

export default config;
