import { Config } from 'drizzle-kit'
import { env } from './api/src/utils/dotenv/env'

export const dbUrl = `mysql://${env.variables.DB_USER}:${env.variables.DB_PASSWORD}@${env.variables.DB_HOST}:${env.variables.DB_PORT}/${env.variables.DB_NAME}`

export default {
  schema: "./api/src/services/schemas/users/userSchema.ts",
  out: "./drizzle",
} satisfies Config;