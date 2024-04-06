"use client"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {

    const userSignIn = async (evt : FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const formData = new FormData(evt.currentTarget);

        const res = await signIn("credentials", {
            email : formData.get("email"),
            password : formData.get("password"),
            redirect : false
        });
    }

    return (
        <form className="flex flex-col justify-center items-center gap-4" action="/" onSubmit={(evt) => {userSignIn(evt)}}>
            <Input className="bg-black" name="email" type="text" placeholder="Email" />
            <Input className="bg-black" name="password" type="password" placeholder="Password" />
            <Button className="w-full" variant="secondary" type="submit">Sign In</Button>

            <div className="w-full h-[0.5px] bg-gray-600"></div>

            <Button className="w-full bg-black flex items-center justify-center gap-2" variant="outline"><FcGoogle className="h-5 w-5" /> Sign In with Google</Button>
            <Button className="w-full bg-black flex items-center justify-center gap-2" variant="outline"><FaGithub className="h-5 w-5" /> Sign In with GitHub</Button>
        </form>
    )
} 