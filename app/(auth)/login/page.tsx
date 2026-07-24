import GoogleSignIn from "./GoogleSignIn";

const LoginPage = () => {
  return (
    <div
      id="loginScreen"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-7">
          <div
            className="w-11 h-11 rounded-sm flex items-center justify-center font-display font-semibold text-lg mb-4"
            style={{ background: "var(--accent)", color: "var(--ink)" }}
          >
            A
          </div>
          <div
            className="font-display text-2xl"
            style={{ color: "var(--paper-raised)" }}
          >
            Archivist
          </div>
          <div
            className="font-mono text-[10px] tracking-wide uppercase mt-1"
            style={{ color: "rgba(233,228,214,.5)" }}
          >
            Retrieval demo
          </div>
        </div>
        <div
          className="rounded-lg px-6 py-7"
          style={{
            background: "var(--paper-raised)",
            border: "1px solid rgba(255,255,255,.06)",
          }}
        >
          <p
            className="font-display text-[15px] text-center leading-relaxed mb-6"
            style={{ color: "var(--text)" }}
          >
            Sign in with your Google account to try the demo. No password or
            email entry needed.
          </p>
          <GoogleSignIn />
          <p
            className="font-mono text-[10px] text-center mt-5 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Simulated sign-in for demo purposes.
            <br />
            No credentials are collected or sent anywhere.
          </p>
        </div>
      </div>

      {/* Signing-in overlay */}
      <div
        id="signingInOverlay"
        className="hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-4"
        style={{ background: "rgba(19,36,32,.92)" }}
      >
        <div className="spinner" />
        <div
          className="font-mono text-xs uppercase tracking-wide"
          style={{ color: "var(--paper-raised)" }}
        >
          Signing in…
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
