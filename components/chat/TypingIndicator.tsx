import { useState, useEffect } from "react";

const TypingIndicator = () => {
  const [thinkingTime, setThinkingTime] = useState(0);

  // Increments a live timer so the user sees real-time activity
  useEffect(() => {
    const interval = setInterval(() => {
      setThinkingTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start gap-3 my-4 px-4 w-full animate-fade-in">
      {/* 1. Dynamic Glowing Avatar Avatar */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-mono text-xs font-bold shadow-md shadow-blue-500/20 shrink-0">
        A{/* Radar Ring Glow Effect */}
        <span className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-25" />
      </div>

      {/* 2. Structured Status Response Shell */}
      <div className="flex flex-col gap-1.5 max-w-sm">
        {/* Status Header Metadata */}
        <div className="flex items-center gap-2 pl-1">
          <span className="text-xs font-bold text-gray-800 tracking-wide">
            Archivist
          </span>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Thinking ({thinkingTime}s)
          </span>
        </div>

        {/* 3. The Wave Container Box */}
        <div className="flex items-center gap-3 px-5 py-4 bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200/80 rounded-2xl rounded-tl-none shadow-sm min-w-[120px]">
          <div className="flex items-center gap-2 h-4">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-[wave_1.4s_infinite_ease-in-out]" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-[wave_1.4s_infinite_ease-in-out_-0.2s]" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-[wave_1.4s_infinite_ease-in-out_-0.4s]" />
          </div>
          <span className="text-xs text-gray-500 font-medium select-none animate-pulse">
            Analyzing database...
          </span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
