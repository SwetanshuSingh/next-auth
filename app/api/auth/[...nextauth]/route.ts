import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name : "Credentials",
        
        async authorize(credentials, req) {

        }
    })
  ],
  pages: {
    signIn: "/auth/login",
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
