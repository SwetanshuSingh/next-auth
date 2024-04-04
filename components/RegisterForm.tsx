import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RegisterSchema } from "@/schemas";

export default function RegisterForm() {

    const registerUser = async ( formData : FormData ) => {
        "use server"

        const rawFormData = {
            username : formData.get("username"),
            email : formData.get("email"),
            password : formData.get("password")
        }

        const formVaildation = RegisterSchema.safeParse(rawFormData);

        if(!formVaildation.success){
            alert("Invalid Form Details")
        }

    }

    return (
        <form className="flex flex-col justify-center items-center gap-4" action={registerUser}>
            <Input className="bg-black" type="text" name="username" placeholder="Username" />
            <Input className="bg-black" type="text" name="email" placeholder="Email" />
            <Input className="bg-black" type="text" name="password" placeholder="Password" />
            <Button className="w-full" variant="secondary">Sign up</Button>

            <div className="w-full h-[0.5px] bg-gray-600"></div>

            <Button className="w-full bg-black flex items-center justify-center gap-2" variant="outline"><FcGoogle className="h-5 w-5" /> Sign In with Google</Button>
            <Button className="w-full bg-black flex items-center justify-center gap-2" variant="outline"><FaGithub className="h-5 w-5" /> Sign In with GitHub</Button>
        </form>
    )
}       