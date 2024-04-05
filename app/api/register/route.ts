import { RegisterSchema } from "@/schemas";
import { NextRequest, NextResponse } from "next/server";
import bcrpyt from "bcrypt";
import { prisma } from "@/lib/db"

export async function POST(req : NextRequest){
    const data = await req.json();
    const validatedFields = RegisterSchema.safeParse(data);

    if(!validatedFields.success){
        return NextResponse.json({ error : "Invalid Form Details" }, { status : 403 });
    }

    const { username, email, password } = validatedFields.data;
    const hashedPassoword = await bcrpyt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
        where : {
            email : email
        }
    });
    
    if(existingUser) {
        return NextResponse.json({ error : "Email already in use" }, { status : 403 })
    }

    const newUser = await prisma.user.create({
        data : {
            name : username,
            email : email,
            password : hashedPassoword
        }
    });
    
    return NextResponse.json({ message : "Registration Successfull" }, { status : 200 })
}