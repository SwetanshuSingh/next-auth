import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/LoginButton";
import RegisterButton from "@/components/RegisterButton";


const font = Poppins({
  subsets : ["latin"],
  weight : ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-black">
      <div className="space-y-6 text-center">
        <h1 className={cn ("text-6xl font-semibold text-white drop-shadow-md, font", font.className)}>Auth</h1>
        <p className="text-lg text-white">A simple authentication service</p>

        <div className="flex gap-3 justify-center">
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
    </main>
  );
}
