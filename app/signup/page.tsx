import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Signup(){
  return (
    <div className="w-full h-[100vh] p-6 flex justify-center items-center bg-black">

      <section className="signup-form w-[30%] h-full p-8 flex flex-col justify-center items-center gap-8 border border-gray-800 rounded-md">
        <div className="heading text-white text-center">
          <h2 className="text-2xl font-semibold">Create an Account</h2>
          <p className="text-gray-400">Enter your email below to create your account</p>
        </div>

        <form action="/" className="w-[90%] flex flex-col gap-4">
          <Input className="bg-black text-white outline-none" placeholder="name@example.com" />
          <Input className="bg-black text-white outline-none" placeholder="password" />
          <Button className="text-lg" variant={"secondary"}>Sign Up</Button>
        </form>

        <div className="social-login text-white w-[90%] flex flex-col justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <div className="w-24 h-[1px] bg-gray-800"></div>
            <p className="text-gray-400 text-xs">OR CONTINUE WITH</p>
            <div className="w-24 h-[1px] bg-gray-800"></div>
          </div>

          <Button className="w-full text-lg">Sign In with Google</Button>
        </div>
      </section>

    </div>
  )
}