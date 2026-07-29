import AppIcon from "@/components/AppIcon";
import Footer from "@/components/Footer";
import Link from "next/link";
import { PropsWithChildren } from "react";

const TermsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-[#e9e4d6] text-[#1b1b16] font-sans antialiased selection:bg-[#e8d3aa]">
      <header className="border-b border-[#d3ccb8] bg-[#f3efe3] sticky top-0 z-10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AppIcon />
            <span className="font-serif font-bold text-xl tracking-tight text-[#132420]">
              Archivist
            </span>
            <span className="text-xs uppercase bg-[#d6e6e3] text-[#3f7a73] px-2 py-0.5 rounded font-mono font-semibold tracking-wider">
              Demo
            </span>
          </div>
          <Link
            href="/demo"
            className="text-sm font-medium text-[#3f7a73] hover:text-[#132420] transition-colors"
          >
            Back to App
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">{children}</main>

      <Footer />
    </div>
  );
};

export default TermsLayout;
