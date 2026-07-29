export default function TermsOfService() {
  return (
    <article className="bg-[#f3efe3] border border-[#d3ccb8] rounded-xl p-6 md:p-12 shadow-sm">
      <header className="border-b border-[#d3ccb8] pb-8 mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#132420] mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-[#706a5a] font-mono">
          Last updated: July 2026
        </p>
      </header>

      {/* Critical Warning Alert Box */}
      <div className="bg-[#e8d3aa]/40 border border-[#b8863a] text-[#132420] p-4 rounded-lg mb-8 text-sm leading-relaxed">
        <strong>Prototype Disclaimer:</strong> Archivist is an experimental
        software application. It is provided entirely &quot;as-is&quot; without
        explicit uptime warranties, long-term database storage, or regulatory
        compliance guarantees.
      </div>

      <div className="space-y-8 text-base leading-relaxed text-[#1b1b16]">
        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            1. Acceptance of Terms
          </h2>
          <p>
            By interacting with Archivist, uploading document packages, or
            engaging with our contextual bot, you agree to comply fully with
            these basic rules. If you do not approve of this sandbox framework,
            please disconnect immediately.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            2. Permitted Use and File Upload Constraints
          </h2>
          <p className="mb-3">
            This utility is built solely for individual technical discovery and
            workflow evaluation. Users are strictly prohibited from uploading:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Classified government, corporate medical records, or extreme
              highly-sensitive PII.
            </li>
            <li>
              Malicious executable code, scripts, or corrupt archive payloads.
            </li>
            <li>
              Copyrighted data content for which you lack usage authorization or
              distribution licenses.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            3. Generation Inaccuracies & AI Hallucinations
          </h2>
          <p>
            Archivist leverages state-of-the-art vector lookup configurations
            combined with Large Language Models. AI agents make errors,
            misinterpret structural text context, and hallucinate responses. The
            system output is advisory. Do not depend on output text for legal,
            financial, or medical guidance.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            4. System Resource Limits
          </h2>
          <p>
            To maintain equal access to this sandbox system, we reserve the
            right to throttle usage parameters, place caps on uploaded file
            sizes, restrict total prompt logs per hour, or remove temporary
            files without providing notice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            5. Total Limitation of Liability
          </h2>
          <p className="text-sm bg-black/5 p-3 rounded font-mono text-[#1c332c]">
            IN NO EVENT WILL THE DEVELOPERS, SPONSORS, OR ADMINISTRATORS OF
            ARCHIVIST BE RESPONSIBLE FOR LOST DATA, SECURITY INCIDENTS, BUSINESS
            INTERRUPTIONS, OR INDIRECT LOSSES CONNECTED TO YOUR USE OF THIS DEMO
            PLATFORM.
          </p>
        </section>
      </div>
    </article>
  );
}
