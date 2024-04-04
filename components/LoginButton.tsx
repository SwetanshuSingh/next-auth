"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();
  return (
    <Button variant="secondary" onClick={() => router.push("/auth/login")}>
      Sign In
    </Button>
  );
}
