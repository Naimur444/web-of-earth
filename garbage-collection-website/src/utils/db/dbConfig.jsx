import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import dotenv from 'dotenv';
dotenv.config();
const sql = neon(
  process.env.DATABASE_CON
);
export const db = drizzle(sql, { schema });
