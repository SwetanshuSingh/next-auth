import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginForm() {

    return (
        <form className="flex flex-col justify-center items-center gap-4" action="">
            <Input className="bg-black" type="text" placeholder="Email" />
            <Input className="bg-black" type="text" placeholder="Password" />
            <Button className="w-full" variant="secondary">Sign In</Button>

            <div className="w-full h-[0.5px] bg-gray-600"></div>

            <Button className="w-full bg-black flex items-center justify-center gap-2" variant="outline"><FcGoogle className="h-5 w-5" /> Sign In with Google</Button>
            <Button className="w-full bg-black flex items-center justify-center gap-2" variant="outline"><FaGithub className="h-5 w-5" /> Sign In with GitHub</Button>
        </form>
    )
}   