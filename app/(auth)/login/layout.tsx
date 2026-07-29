"use client";
import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignInLoader from "@/components/ui/SignInLoader";
import { useAuth } from "@/providers/AuthProvider";

const LoginLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [loading, router, user]);

  if (loading) return <SignInLoader />;
  if (user) {
    return null;
  }

  return <div className="min-h-screen flex flex-col bg-ink">{children}</div>;
};

export default LoginLayout;
