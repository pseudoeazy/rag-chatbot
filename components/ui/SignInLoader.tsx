const SignInLoader = () => {
  return (
    <div
      id="signingInOverlay"
      className=" fixed inset-0 z-50 flex flex-col items-center justify-center gap-4"
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
  );
};

export default SignInLoader;
