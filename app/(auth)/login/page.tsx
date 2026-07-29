import AppIcon from "@/components/AppIcon";
import GoogleSignIn from "./GoogleSignIn";

const LoginPage = () => {
  return (
    <div
      id="loginScreen"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-7">
          <AppIcon />
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
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
