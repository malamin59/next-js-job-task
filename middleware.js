"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); 
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null; // prevent flash
  }

  return children;
}
