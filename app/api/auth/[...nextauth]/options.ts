import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const options : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : "credentials",

            credentials : {
                email : {},
                password : {}
            },
            
            async authorize(credentials) {
                
                const existingUser = await prisma.user.findUnique({
                    where : {
                        email : credentials?.email
                    }
                });

                if(!existingUser || !existingUser.password) return null;

                const isPasswordCorrect = await bcrypt.compare(credentials?.password || "", existingUser.password);

                if(isPasswordCorrect) {
                    return existingUser
                }

                return null;
            }
        })
    ],

    session : {
        strategy : "jwt"
    },

    pages : {
        signIn : "/auth/login"
    },

    adapter : PrismaAdapter(prisma)
}