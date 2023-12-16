// TODO: 4. Call the signOut() function when the button is clicked
// hint: You may want to change the first line of this file
"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// TODO: 4. Call the signOut() function when the button is clicked
// hint: You may want to change the first line of this file

export default function SignOutButton() {
  const router = useRouter();
  const handleSignOut = async () => {
    
    await signOut({ redirect: false });
    router.push("/");
  };
  return (
    <Button data-testid="sign-out-button" variant={"outline"} onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
// TODO: 4. end
