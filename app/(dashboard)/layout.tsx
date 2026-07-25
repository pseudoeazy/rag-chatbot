"use client";
import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import SignInLoader from "@/components/ui/SignInLoader";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, router, user]);

  if (loading) return <SignInLoader />;
  if (!user) {
    return null;
  }

  return <div className="min-h-screen flex flex-col bg-ink">{children}</div>;
};

export default DashboardLayout;
