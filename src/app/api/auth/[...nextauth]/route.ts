import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { ENV_VARIABLES } from '@/lib/environment'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: ENV_VARIABLES.GOOGLE_CLIENT_ID ?? '',
      clientSecret: ENV_VARIABLES.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
