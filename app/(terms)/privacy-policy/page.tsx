import Disclaimer from "@/components/Disclaimer";

export default function PrivacyPolicy() {
  return (
    <article className="bg-[#f3efe3] border border-[#d3ccb8] rounded-xl p-6 md:p-12 shadow-sm">
      <header className="border-b border-[#d3ccb8] pb-8 mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#132420] mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#706a5a] font-mono">
          Last updated: July 2026
        </p>
      </header>

      <Disclaimer />

      <div className="space-y-8 text-base leading-relaxed text-[#1b1b16]">
        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            1. Information We Collect
          </h2>
          <p className="mb-4">
            Archivist only handles data strictly required to demonstrate our
            document chat capabilities. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#1b1b16]">
            <li>
              <strong className="text-[#132420]">Uploaded Files:</strong> Text
              files, PDFs, or CSVs you intentionally upload to query.
            </li>
            <li>
              <strong className="text-[#132420]">Chat Prompts:</strong> Text
              queries you submit directly to the conversational AI bot.
            </li>
            <li>
              <strong className="text-[#132420]">Session Cache:</strong>{" "}
              Temporary browser memory tokens to maintain your login and active
              chat stream.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            2. How Your Data Is Processed
          </h2>
          <p className="mb-3">
            Your documents undergo a localized process called vector embedding
            creation. This text breakdown feeds our Retrieval-Augmented
            Generation pipeline.
          </p>
          <p>
            We do not utilize your custom files, conversational queries, or
            contextual data prompts to train public machine learning systems or
            baseline LLM models.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            3. Data Retention and Deletion
          </h2>
          <p>
            Because Archivist operates primarily as an architectural tool
            demonstration, data persistence is intentionally short. Document
            vectors and chat interaction histories are purged automatically from
            our servers when you signout.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#1c332c] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b8863a] rounded-sm"></span>
            4. Third-Party API Processors
          </h2>
          <p>
            To handle conversational responses, text segments of your document
            are selectively parsed to secure Large Language Model processing
            endpoints. These external processors are tightly bound by commercial
            privacy agreements which restrict them from retaining your session
            information.
          </p>
        </section>

        <section className="border-t border-[#d3ccb8] pt-6 mt-12">
          <h2 className="font-serif text-lg font-bold text-[#1c332c] mb-2">
            Contact and Questions
          </h2>
          <p className="text-sm text-[#706a5a]">
            Have inquiries about this sandbox privacy framework? Contact the
            demo administrators directly at{" "}
            <a
              href="https://www.chibuz.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3f7a73] underline font-mono"
            >
              Chibuz.com
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
