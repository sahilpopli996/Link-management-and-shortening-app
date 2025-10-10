import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

export default defineConfig({
  out: "./drizzle/migration",
  schema: "./drizzle/schema.js",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
