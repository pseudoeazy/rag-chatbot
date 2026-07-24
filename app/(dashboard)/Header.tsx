import Link from "next/link";
const Header = () => {
  return (
    <header
      className="shrink-0 border-b"
      style={{ borderColor: "rgba(255,255,255,.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center font-display font-semibold text-sm"
            style={{ background: "var(--accent)", color: "var(--ink)" }}
          >
            A
          </div>
          <div>
            <div
              className="font-display text-lg leading-none"
              style={{ color: "var(--paper-raised)" }}
            >
              Archivist
            </div>
            <div
              className="font-mono text-[10px] tracking-wide uppercase"
              style={{ color: "rgba(233,228,214,.5)" }}
            >
              Retrieval demo
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-full"
            style={{
              background: "rgba(63,122,115,.18)",
              color: "var(--teal-soft)",
              border: "1px solid rgba(63,122,115,.4)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7FD9C4" }}
            />
            Simulated · nothing leaves your browser
          </span>
          <button
            id="resetBtn"
            className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1.5 rounded-md border transition-colors"
            style={{
              borderColor: "rgba(255,255,255,.15)",
              color: "rgba(233,228,214,.75)",
            }}
            // onmouseover="this.style.background='rgba(255,255,255,.06)'"
            // onmouseout="this.style.background='transparent'"
          >
            Reset demo
          </button>
          <Link
            href={`/login`}
            id="resetBtn"
            className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1.5 rounded-md border transition-colors"
            style={{
              borderColor: "rgba(255,255,255,.15)",
              color: "rgba(233,228,214,.75)",
            }}
            // onmouseover="this.style.background='rgba(255,255,255,.06)'"
            // onmouseout="this.style.background='transparent'"
          >
            Login Page
          </Link>
          <div className="relative">
            <button
              id="userChipBtn"
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border transition-colors"
              style={{ borderColor: "rgba(255,255,255,.15)" }}
              // onmouseover="this.style.background='rgba(255,255,255,.06)'"
              // onmouseout="this.style.background='transparent'"
            >
              <span
                id="userAvatar"
                className="avatar-circle"
                style={{
                  width: "1.6rem",
                  height: "1.6rem",
                  fontSize: ".65rem",
                }}
              />
              <span
                id="userNameLabel"
                className="hidden sm:inline font-mono text-[11px]"
                style={{ color: "rgba(233,228,214,.85)" }}
              />
            </button>
            <div
              id="userDropdown"
              className="hidden absolute right-0 mt-2 w-44 rounded-md overflow-hidden z-40"
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
                />
                <div
                  id="userDropdownEmail"
                  className="font-mono text-[10px]"
                  style={{ color: "var(--muted)" }}
                />
              </div>
              <button
                id="signOutBtn"
                className="w-full text-left px-3 py-2 font-mono text-[11px] uppercase tracking-wide transition-colors"
                style={{ color: "var(--danger)" }}
                // onmouseover="this.style.background='rgba(177,72,52,.08)'"
                // onmouseout="this.style.background='transparent'"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
