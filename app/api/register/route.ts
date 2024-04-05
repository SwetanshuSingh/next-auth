import { RegisterSchema } from "@/schemas";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    const data = await req.json();
    const validatedFields = RegisterSchema.safeParse(data);

    if(!validatedFields.success){
        return NextResponse.json({ error : "Invalid Form Details" }, { status : 403 })
    }
    
    return NextResponse.json({ message : "Registration Successfull" }, { status : 200 })
}