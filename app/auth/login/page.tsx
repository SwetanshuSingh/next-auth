import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-xl">Welcome to Login Page</p>
      <LoginForm />
    </div>
  )
}
