"use client";
import Image from "next/image";
import { useAuth } from "@/providers/AuthProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  const { signOut, user, loading } = useAuth();

  const fullName =
    user?.user_metadata?.full_name ?? user?.user_metadata?.name ?? "Guest";

  const avatarUrl =
    user?.user_metadata?.avatar_url ?? user?.user_metadata?.picture ?? null;

  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .map((word: string) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header
      className="shrink-0 border-b"
      style={{ borderColor: "rgba(255,255,255,.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center font-display font-semibold text-sm bg-[#b8863a] text-ink">
            A
          </div>

          <div>
            <div className="font-display text-lg leading-none text-paper-raised">
              Archivist
            </div>

            <div
              className="font-mono text-[10px] tracking-wide uppercase"
              style={{ color: "rgba(233,228,214,.5)" }}
            >
              Retrieval demo
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span
                  id="userChipBtn"
                  className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border transition-colors cursor-pointer"
                  style={{ borderColor: "rgba(255,255,255,.15)" }}
                >
                  <span
                    id="userAvatar"
                    className="flex items-center justify-center overflow-hidden rounded-full bg-neutral-700 text-white font-semibold"
                    style={{
                      width: "1.6rem",
                      height: "1.6rem",
                      fontSize: ".65rem",
                    }}
                  >
                    {avatarUrl ? (
                      <Image
                        src={avatarUrl}
                        alt={fullName}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      initials
                    )}
                  </span>

                  <span
                    id="userNameLabel"
                    className="hidden sm:inline font-mono text-[11px]"
                    style={{ color: "rgba(233,228,214,.85)" }}
                  >
                    {loading ? "Loading..." : fullName}
                  </span>
                </span>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                id="userDropdown"
                align="end"
                className="mt-2 w-44 rounded-md overflow-hidden z-40 p-0"
                style={{
                  background: "var(--paper-raised)",
                  border: "1px solid var(--line)",
                  boxShadow: "0 8px 20px rgba(0,0,0,.25)",
                }}
              >
                <div
                  className="px-3 py-2 border-b"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div
                    id="userDropdownName"
                    className="font-display text-sm"
                    style={{ color: "var(--text)" }}
                  >
                    {loading ? "Loading..." : fullName}
                  </div>
                  <div id="userDropdownEmail" className="font-mono text-[10px]">
                    {user?.email}
                  </div>
                </div>

                <DropdownMenuItem
                  onClick={signOut}
                  id="signOutBtn"
                  className="w-full text-left px-3 py-2 rounded-none font-mono text-[11px] uppercase tracking-wide transition-colors cursor-pointer block select-none outline-none focus:bg-accent focus:text-accent-foreground"
                  style={{
                    color: "var(--danger)",
                    background: "rgba(177,72,52,.08)",
                  }}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
