import dotenv from 'dotenv';
dotenv.config();

export default {
    dialect: "postgresql",
    schema: "./src/utils/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
      url: process.env.DATABASE_CON,
      connectionString: process.env.DATABASE_CON,
    },
  };