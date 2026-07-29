import AppIcon from "@/components/AppIcon";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomeLandingPage() {
  return (
    <div className="min-h-screen bg-[#e9e4d6] text-[#1b1b16] font-sans antialiased flex flex-col justify-between selection:bg-[#e8d3aa]">
      <header className="border-b border-[#d3ccb8] bg-[#f3efe3]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AppIcon />
            <Link href={"/"}>
              <span className="font-serif font-bold text-xl tracking-tight text-[#132420] block leading-none">
                Archivist
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#706a5a] uppercase font-bold block mt-0.5">
                RAG Stack Demo
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#706a5a]">
            <a
              href="#features"
              className="hover:text-[#132420] transition-colors"
            >
              Core Features
            </a>
            <a
              href="#architecture"
              className="hover:text-[#132420] transition-colors"
            >
              System Architecture
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-[#132420] transition-colors"
            >
              Privacy Framework
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/demo"
              className="bg-[#132420] hover:bg-[#1c332c] text-[#e9e4d6] font-mono text-xs uppercase font-bold px-4 py-2 rounded border border-[#132420] transition-all tracking-wider shadow-sm"
            >
              Try Live Demo
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-36 text-center flex flex-col items-center">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#132420] tracking-tight max-w-4xl mb-6 leading-[1.08]">
            Turn static files into interactive knowledge.
          </h1>

          <p className="text-base md:text-xl text-[#706a5a] max-w-2xl mb-12 leading-relaxed">
            Upload custom PDFs, stream generative AI chat evaluations from
            isolated data sets, and experience unified token vector ingestion in
            real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="/demo"
              className="w-full sm:w-auto bg-[#b8863a] hover:bg-[#132420] text-white font-serif font-bold text-lg py-4 px-10 rounded-xl shadow-md transition-all flex items-center justify-center gap-3 group"
            >
              <span>Initialize App Session</span>
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              href="#architecture"
              className="w-full sm:w-auto bg-[#f3efe3] text-[#132420] hover:bg-[#e8d3aa]/40 font-mono text-sm font-semibold py-4 px-8 rounded-xl border border-[#d3ccb8] transition-colors"
            >
              Review Architecture
            </a>
          </div>

          <div className="mt-16 w-full max-w-4xl border border-[#d3ccb8] rounded-2xl bg-[#f3efe3] p-4 p-2 shadow-xl">
            <div className="border border-[#d3ccb8]/60 bg-[#e9e4d6] rounded-xl p-6 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#d6e6e3] rounded-lg text-[#3f7a73] shrink-0 mt-0.5">
                  <svg
                    xmlns="http://w3.org"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a4.5 4.5 0 1 1 9.016 0D12 18.75V21m-4.753-4.25H5.625c-.621 0-1.125-.504-1.125-1.125V4.125c0-.621.504-1.125 1.125-1.125h12.75c.621 0 1.125.504 1.125 1.125v1.44"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#132420]">
                    Immediate Processing Pipeline
                  </h3>
                  <p className="text-sm text-[#706a5a] max-w-lg mt-0.5">
                    Drop a PDF,CSV or Text report, generate dense token vectors
                    , and query the dataset.
                  </p>
                </div>
              </div>
              <a
                href="/demo"
                className="shrink-0 text-sm font-bold text-[#3f7a73] hover:text-[#132420] underline font-mono flex items-center gap-1"
              >
                Go to Sandbox App →
              </a>
            </div>
          </div>
        </section>

        {/* Feature Grid Subsection */}
        <section
          id="features"
          className="bg-[#f3efe3] border-t border-b border-[#d3ccb8] py-20 px-6 gap-6 flex flex-col"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#132420] mb-3">
                Core Application Features
              </h2>
              <p className="text-sm text-[#706a5a]">
                A functional technical playground highlighting state-of-the-art
                vector processing frameworks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-[#e9e4d6] p-6 rounded-xl border border-[#d3ccb8]/60 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono bg-[#d6e6e3] text-[#3f7a73] font-bold px-2 py-0.5 rounded w-max mb-4">
                    Supabase Identity
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#132420] mb-2">
                    Google OAuth Flow
                  </h3>
                  <p className="text-sm text-[#706a5a] leading-relaxed">
                    Secure client-side context handling via custom Client
                    `AuthProvider`. Access tokens attach automatically to state
                    requests.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#e9e4d6] p-6 rounded-xl border border-[#d3ccb8]/60 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono bg-[#e8d3aa] text-[#b8863a] font-bold px-2 py-0.5 rounded w-max mb-4">
                    Next.js 15
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#132420] mb-2">
                    Streaming Answers
                  </h3>
                  <p className="text-sm text-[#706a5a] leading-relaxed">
                    Server responses resolve tokens organically over live HTTP
                    pipes, ensuring users view real-time chat completion
                    matrices.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#e9e4d6] p-6 rounded-xl border border-[#d3ccb8]/60 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono bg-black/5 text-[#132420] font-bold px-2 py-0.5 rounded w-max mb-4">
                    Automated Lifecycles
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#132420] mb-2">
                    Smart Sandbox Cleanup
                  </h3>
                  <p className="text-sm text-[#706a5a] leading-relaxed">
                    Destructive sign-outs strip personal vectors from local
                    servers while caching base fallback reference files like{" "}
                    <code className="bg-black/5 px-1 py-0.5 rounded font-mono text-xs">
                      RAG_Test_Document.pdf
                    </code>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-[#e9e4d6] p-6 rounded-xl border border-[#d3ccb8]/60">
                <div className="w-1.5 h-6 bg-[#b8863a] rounded-sm mb-4"></div>
                <h3 className="font-serif font-bold text-lg text-[#132420] mb-2">
                  Vector Embeddings
                </h3>
                <p className="text-sm text-[#706a5a] leading-relaxed">
                  Breaks uploaded string contexts into vectorized math weights
                  to execute high-fidelity conceptual text searches.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#e9e4d6] p-6 rounded-xl border border-[#d3ccb8]/60">
                <div className="w-1.5 h-6 bg-[#3f7a73] rounded-sm mb-4"></div>
                <h3 className="font-serif font-bold text-lg text-[#132420] mb-2">
                  Source Attribution
                </h3>
                <p className="text-sm text-[#706a5a] leading-relaxed">
                  Every response highlights exact contextual blocks matched
                  within your source data file to completely eliminate
                  structural hallucinations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#e9e4d6] p-6 rounded-xl border border-[#d3ccb8]/60">
                <div className="w-1.5 h-6 bg-[#132420] rounded-sm mb-4"></div>
                <h3 className="font-serif font-bold text-lg text-[#132420] mb-2">
                  Temporary Cache
                </h3>
                <p className="text-sm text-[#706a5a] leading-relaxed">
                  Maintains an isolated operational state. Documents auto-purge
                  following active session closure or browser reset steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-[#132420] mb-4">
                The Complete Pipeline Architecture
              </h2>
              <p className="text-sm text-[#706a5a] leading-relaxed mb-4">
                Archivist bridges client-side presentation elements directly
                into an decoupled NestJS server architecture via protected REST
                endpoint frameworks.
              </p>
              <p className="text-sm text-[#706a5a] leading-relaxed">
                Supabase JWT instances are parsed synchronously during system
                requests to evaluate permissions and shield critical data
                stores.
              </p>
            </div>

            <div className="md:col-span-3 bg-[#f3efe3] border border-[#d3ccb8] rounded-xl p-6 font-mono text-xs text-[#1c332c] space-y-4">
              <div className="border-b border-[#d3ccb8] pb-2 font-bold uppercase tracking-wider text-[#b8863a]">
                System Stack Overview
              </div>
              <div className="flex justify-between border-b border-[#d3ccb8]/40 pb-2">
                <span className="text-[#706a5a]">Presentation Engine</span>
                <span className="font-bold text-[#132420]">
                  Next.js 15 / React / TypeScript
                </span>
              </div>
              <div className="flex justify-between border-b border-[#d3ccb8]/40 pb-2">
                <span className="text-[#706a5a]">Authentication Core</span>
                <span className="font-bold text-[#132420]">
                  Supabase Google OAuth Provider
                </span>
              </div>
              <div className="flex justify-between border-b border-[#d3ccb8]/40 pb-2">
                <span className="text-[#706a5a]">Backend Vector Gateway</span>
                <span className="font-bold text-[#132420]">
                  NestJS REST Architecture
                </span>
                <span className="font-bold text-[#132420]">
                  NestJS REST Architecture
                </span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-[#706a5a]">UI Construction</span>
                <span className="font-bold text-[#132420]">
                  Tailwind CSS / shadcn/ui components
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
