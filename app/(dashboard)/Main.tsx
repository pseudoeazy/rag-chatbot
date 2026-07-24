const Main = () => {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto md:grid md:grid-cols-[1fr_360px] gap-0 md:gap-5 px-0 md:px-6 py-0 md:py-5 min-h-0">
      {/* Chat pane */}
      <section
        id="pane-chat"
        className="flex flex-col min-h-0 rounded-none md:rounded-lg overflow-hidden"
        style={{ background: "var(--paper)" }}
      >
        {/* Topic bar */}
        <div
          className="flex items-center justify-between gap-2 px-4 md:px-5 py-3 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="font-mono text-[10px] uppercase tracking-wide shrink-0"
              style={{ color: "var(--muted)" }}
            >
              Talking to
            </span>
            <select
              id="topicSelect"
              className="font-display text-sm md:text-base bg-transparent border-none focus:outline-none focus:ring-0 truncate max-w-[180px] md:max-w-none"
              style={{ color: "var(--text)" }}
            ></select>
          </div>
          <label
            className="shrink-0 flex items-center gap-1.5 cursor-pointer font-mono text-[11px] uppercase tracking-wide px-2.5 py-1.5 rounded-md border transition-colors"
            style={{
              borderColor: "var(--accent)",
              color: "var(--ink)",
              background: "var(--accent-soft)",
            }}
          >
            <span>Upload file</span>
            <input
              id="fileInput"
              type="file"
              accept=".csv,.txt,.pdf"
              className="hidden"
            />
          </label>
        </div>
        {/* Messages */}
        <div
          id="messages"
          className="flex-1 overflow-y-auto scrollbar-thin px-4 md:px-5 py-4 space-y-4"
        />
        {/* Suggestions */}
        <div
          id="suggestions"
          className="px-4 md:px-5 pb-2 flex flex-wrap gap-1.5"
        />
        {/* Composer */}
        <div
          className="px-4 md:px-5 py-3 border-t"
          style={{ borderColor: "var(--line)" }}
        >
          <div
            id="uploadError"
            className="hidden font-mono text-xs mb-2 px-2.5 py-1.5 rounded-md"
            style={{
              background: "rgba(177,72,52,.1)",
              color: "var(--danger)",
              border: "1px solid rgba(177,72,52,.3)",
            }}
          />
          <form id="chatForm" className="flex items-end gap-2">
            <textarea
              id="chatInput"
              rows={1}
              placeholder="Ask a question about the current source…"
              className="flex-1 resize-none rounded-md px-3 py-2.5 font-display text-[15px] focus:outline-none focus:ring-2 leading-snug"
              style={{
                background: "var(--paper-raised)",
                border: "1px solid var(--line)",
                color: "var(--text)",
              }}
              defaultValue={""}
            />
            <button
              type="submit"
              className="shrink-0 h-[42px] px-4 rounded-md font-mono text-xs uppercase tracking-wide transition-transform active:scale-95"
              style={{
                background: "var(--ink)",
                color: "var(--paper-raised)",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </section>
      {/* Retrieval trace pane */}
      <aside
        id="pane-sources"
        className="hidden md:flex flex-col min-h-0 rounded-none md:rounded-lg overflow-hidden mt-0 md:mt-0"
        style={{
          background: "var(--paper-raised)",
          border: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <div
          className="px-4 py-3 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <div
            className="font-mono text-[10px] uppercase tracking-wide"
            style={{ color: "var(--muted)" }}
          >
            Retrieval trace
          </div>
          <div
            id="corpusSummary"
            className="font-display text-sm mt-0.5"
            style={{ color: "var(--text)" }}
          />
        </div>
        <div
          id="traceBody"
          className="flex-1 overflow-y-auto scrollbar-thin px-4 py-3 space-y-3"
        />
      </aside>
    </main>
  );
};

export default Main;
