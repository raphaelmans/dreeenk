import { z } from 'zod'

const envVariables = z.object({
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
})

export const ENV_VARIABLES = envVariables.parse(process.env)
