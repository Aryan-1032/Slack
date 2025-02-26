"use client";
import { Button } from "@/components/ui/button";
import { AuthScreen } from "@/features/auth/components/auth-screen";
import Image from "next/image";
import { useAuthActions } from "@convex-dev/auth/react";
import { UserButton } from "@/features/auth/components/user-button";
export default function Home() {
  const {signOut} = useAuthActions();
  return (
   <div>
    <div>Logged In</div>
    <UserButton/>
   </div>
  );
}
