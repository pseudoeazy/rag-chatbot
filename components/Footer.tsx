const Footer = () => {
  return (
    <footer className="border-t border-[#d3ccb8] py-8 px-6 bg-[#f3efe3]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#706a5a] font-mono">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <p>&copy; {new Date().getFullYear()} Archivist Project Sandbox.</p>
          <a
            href="/privacy-policy"
            className="hover:text-[#132420] transition-colors underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:text-[#132420] transition-colors underline"
          >
            Terms of Service
          </a>
        </div>
        <p className="text-[11px] text-[#3f7a73]">
          Provided strictly for demonstration and educational evaluation
          targets.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
