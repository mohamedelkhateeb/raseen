import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { checkOTP } from '@/services/authService';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        phone: {},
        otp: {},
      },
      async authorize(credentials: any) {
        try {
          const res = await checkOTP({
            phone: credentials?.phone,
            otp: credentials?.otp,
          });
          if (res?.status) {
            return res;
          }
          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token.data.user;
      session.token = token.data.token;
      session.is_active = token.data.is_active;
      session.is_available = token.data.is_available;
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
    error: '/',
    signOut: '/',
  },
};
