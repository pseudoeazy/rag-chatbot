import { useEffect, useRef, type ClipboardEvent } from "react";
import ReactMarkDown from "react-markdown";

export interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
}

type Props = {
  messages: Message[];
};

const ChatMessages = ({ messages }: Props) => {
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onCopyMessage = (e: ClipboardEvent<HTMLDivElement>): void => {
    const selection = window.getSelection()?.toString().trim();
    if (selection) {
      e.preventDefault();
      e.clipboardData.setData("text/plain", selection);
    }
  };

  return (
    <div
      id="messages"
      className="flex-1 overflow-y-auto scrollbar-thin px-4 md:px-5 py-4 space-y-4 "
    >
      <div className="flex flex-col gap-3">
        {messages.map((message, index) => {
          const messageKey = `${message.role}-${index}`;
          const isLastMessage = index === messages.length - 1;

          return (
            <div
              key={messageKey}
              onCopy={onCopyMessage}
              ref={isLastMessage ? lastMessageRef : null}
              className={`px-3 py-2 max-w-[85%] md:max-w-md rounded-xl flex flex-col gap-1.5 ${
                message.role === "user"
                  ? "bg-ink text-paper-raised self-end"
                  : "bg-[#3f7a73]/12 text-teal self-start"
              }`}
            >
              {/* Markdown Processing Output Area */}
              <div className="prose prose-sm wrap-break-word max-w-none">
                <ReactMarkDown>{message.content || "..."}</ReactMarkDown>
              </div>

              {message.role === "assistant" &&
                message.sources &&
                message.sources.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1 pt-1.5 border-t border-[#3f7a73]/20">
                    {message.sources.map((source, srcIdx) => (
                      <span
                        key={srcIdx}
                        className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#3f7a73]/20 text-[#3f7a73] font-semibold"
                      >
                        📄 {source}
                      </span>
                    ))}
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatMessages;
