const UploadChatFiles = () => {
  return (
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
  );
};

export default UploadChatFiles;
