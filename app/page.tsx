import Header from "./(dashboard)/Header";
import Main from "./(dashboard)/Main";
import MobileTabs from "./(dashboard)/MobileTabs";

export default function Home() {
  return (
    <div
      id="appRoot"
      className="min-h-screen flex flex-col"
      style={{ background: "var(--ink)" }}
    >
      {/* Header */}
      <Header />
      {/* Mobile tabs */}
      <MobileTabs />

      {/* Main */}
      <Main />
    </div>
  );
}
