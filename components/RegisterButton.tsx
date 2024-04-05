"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RegisterButton() {
  const router = useRouter();
  return (
    <Button variant="secondary" onClick={() => router.push("/auth/register")}>
      Register
    </Button>
  );
}
