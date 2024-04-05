"use client"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FormEvent } from "react";
import { useToast } from "./ui/use-toast";

export default function RegisterForm() {

    const { toast } = useToast();

    const registerUser = async (evt : FormEvent<HTMLFormElement>) => {
        evt.preventDefault();        
        const formData = new FormData(evt.currentTarget as HTMLFormElement);

        const userDetails = {
            username : formData.get("username"),
            email : formData.get("email"),
            password : formData.get("password")
        }
    
        const response = await fetch("/api/register", {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(userDetails)
        });

        const result = await response.json();

        if(response.status !== 200){
            toast({
                title: "Uh oh! Something went wrong.",
                description: result.error,
                variant : "destructive"
              })
        } else {
            toast({
                title: "Success!",
                description: result.message,
              });
        }
    }

    return (
        <form className="flex flex-col justify-center items-center gap-4" action="/" onSubmit={(evt) => {registerUser(evt)}}>
            <Input className="bg-black" type="text" name="username" placeholder="Username" />
            <Input className="bg-black" type="text" name="email" placeholder="Email" />
            <Input className="bg-black" type="password" name="password" placeholder="Password" />
            <Button className="w-full" variant="secondary" type="submit">Sign up</Button>

            <div className="w-full h-[0.5px] bg-gray-600"></div>

            <Button className="w-full bg-black flex items-center justify-center gap-2" variant="outline"><FcGoogle className="h-5 w-5" /> Sign In with Google</Button>
            <Button className="w-full bg-black flex items-center justify-center gap-2" variant="outline"><FaGithub className="h-5 w-5" /> Sign In with GitHub</Button>
        </form>
    )
}       