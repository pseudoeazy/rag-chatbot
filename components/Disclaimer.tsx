const Disclaimer = () => {
  return (
    <div className="bg-[#d6e6e3] border border-[#3f7a73]/20 text-[#1c332c] p-4 rounded-lg mb-8 text-sm leading-relaxed">
      <strong>Important Demo Notice:</strong> Archivist is a Retrieval-Augmented
      Generation (RAG) demonstration platform. We prioritize your document
      security. Uploaded materials are processed solely to facilitate your
      immediate chat session interaction. You can skip uploading a document and
      just chat immediately with the bot based on our default document.{" "}
      <span className="text-xs">
        <a
          href="/docs/RAG_Test_Document.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-medium inline-flex items-center gap-1"
        >
          View current system default file &rarr;
        </a>
      </span>
    </div>
  );
};

export default Disclaimer;
