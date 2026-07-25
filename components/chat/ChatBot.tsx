"use client";

import React, { useEffect, useRef } from "react";
import { useChat, type UIMessage } from "@ai-sdk/react";
import { DefaultChatTransport, type JSONValue } from "ai";
import ChatMessages, { Message } from "./ChatMessages";
import ChatForm from "./ChatForm";
import UploadChatFiles from "./UploadChatFiles"; // ✅ Kept independent as requested
import TypingIndicator from "./TypingIndicator";
import ChatSuggestions from "./ChatSuggestions";

// Initialize global audio instances safely
const popAudio =
  typeof Audio !== "undefined" ? new Audio("/sounds/pop.mp3") : null;
const notificationAudio =
  typeof Audio !== "undefined" ? new Audio("/sounds/notification.wav") : null;

const ChatBot = () => {
  // Initialize the transport-based hook architecture from AI SDK v5
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "http://localhost:3001/api/chatbot/stream",
    }),
  });

  // Track status transitions safely across renders to trigger completion chimes
  const previousStatusRef = useRef<string>("ready");

  useEffect(() => {
    // Detect the exact transition point from active streaming back to complete
    if (previousStatusRef.current === "streaming" && status === "ready") {
      if (notificationAudio) {
        notificationAudio.currentTime = 0;
        notificationAudio
          .play()
          .catch((err: unknown) => console.log("Audio blocked:", err));
      }
    }

    // Cache current status for the next render evaluation pass
    previousStatusRef.current = status;
  }, [status]);

  // Strictly type and map messages by extracting text chunks and custom metadata from message parts
  const combinedMessages: Message[] = messages.map(
    (msg: UIMessage): Message => {
      let extractedSources: string[] = [];
      let extractedText = "";

      // AI SDK v5 requires extracting all content and custom data directly out of the parts array
      if (msg.parts && Array.isArray(msg.parts)) {
        // 1. Gather all standard plain text chunks safely
        msg.parts.forEach((part) => {
          if (part.type === "text" && typeof part.text === "string") {
            extractedText += part.text;
          }
        });

        // 2. Locate and isolate your custom side-channel backend data structures
        const customDataPart = msg.parts.find(
          (
            part,
          ): part is { type: "data-custom"; data: Record<string, JSONValue> } =>
            part.type === "data-custom" &&
            typeof part.data === "object" &&
            part.data !== null,
        );

        if (
          customDataPart?.data?.sources &&
          Array.isArray(customDataPart.data.sources)
        ) {
          extractedSources = customDataPart.data.sources.map((src: JSONValue) =>
            String(src),
          );
        }
      }

      return {
        role: msg.role === "user" ? "user" : "assistant",
        content: extractedText, // Satisfies your local ChatMessages structure with pure string tokens
        sources: extractedSources,
      };
    },
  );

  // Form submit callback handler that links Hook Form to Vercel's transport stream
  const handleChatSubmit = (question: string): void => {
    if (popAudio) {
      popAudio.currentTime = 0;
      popAudio
        .play()
        .catch((err: unknown) => console.log("Audio blocked:", err));
    }

    // Trigger the Vercel AI SDK v5 execution stream safely
    void sendMessage({ text: question });
  };

  const isStreamingOrSubmitting =
    status === "submitted" || status === "streaming";

  return (
    <section className="flex flex-col w-full mx-auto min-h-0 rounded-none md:rounded-lg overflow-hidden bg-paper">
      {/* Top Header Section */}
      <div className="flex items-center justify-between gap-2 px-4 md:px-5 py-3 border-b border-line">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono text-[10px] uppercase tracking-wide shrink-0 text-black">
            Talking to Archivist
          </span>
        </div>
        {/* ✅ Restored back to your exact, self-contained configuration */}
        <UploadChatFiles />
      </div>

      {/* Main Streaming Chat Window */}
      <ChatMessages messages={combinedMessages} />

      {/* Renders loading bubble if waiting on initial server response headers */}
      {isStreamingOrSubmitting &&
        messages[messages.length - 1]?.role === "user" && <TypingIndicator />}

      {/* Suggested Chat prompts */}
      <ChatSuggestions />

      {/* Lower Input Controls Section */}
      <div className="px-4 md:px-5 py-3 border-t border-line">
        {error && (
          <div className="font-mono text-xs mb-2 px-2.5 py-1.5 rounded-md border-danger border bg-[#b14834]/10 text-danger">
            {error.message || "Something went wrong, try again!"}
          </div>
        )}

        {/* Render your native React Hook Form setup wrapper seamlessly */}
        <ChatForm handleChatSubmit={handleChatSubmit} />
      </div>
    </section>
  );
};

export default ChatBot;
