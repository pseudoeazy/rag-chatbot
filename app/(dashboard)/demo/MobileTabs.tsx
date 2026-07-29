const MobileTabs = () => {
  return (
    <div
      className="md:hidden flex border-b"
      style={{ borderColor: "rgba(255,255,255,.08)" }}
    >
      <button
        data-tab="chat"
        className="tab-btn flex-1 py-2.5 font-mono text-xs uppercase tracking-wide"
      />
      <button
        data-tab="sources"
        className="tab-btn flex-1 py-2.5 font-mono text-xs uppercase tracking-wide"
      />
    </div>
  );
};

export default MobileTabs;
