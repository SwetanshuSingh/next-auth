"use client"
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Dashboard() {

  return (
    <div>
      <p>Dahsboard Page</p>
      <Button onClick={() => {signOut()}}>Logout</Button>
    </div>
  );
}
