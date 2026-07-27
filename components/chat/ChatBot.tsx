"use client";

import { useEffect, useState, useRef } from "react";

import ChatMessages, { Message } from "./ChatMessages";
import ChatForm from "./ChatForm";
import UploadChatFiles from "./UploadChatFiles";
import TypingIndicator from "./TypingIndicator";
import ChatSuggestions from "./ChatSuggestions";
import { useAuth } from "@/providers/AuthProvider";

const popAudio =
  typeof Audio !== "undefined" ? new Audio("/sounds/pop.mp3") : null;
const notificationAudio =
  typeof Audio !== "undefined" ? new Audio("/sounds/notification.wav") : null;

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/api/chatbot/stream`;
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ChatBot = () => {
  const { accessToken } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  // Clean up ongoing connections when component unmounts
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  // Updates the last message object directly inside the React State Array
  function updateLatestAssistantMessage(token: string, newSources?: string[]) {
    setMessages((prevMessages) => {
      if (prevMessages.length === 0) return prevMessages;

      const updated = [...prevMessages];
      const lastIndex = updated.length - 1;
      const lastMessage = updated[lastIndex];

      if (lastMessage.role === "assistant") {
        updated[lastIndex] = {
          ...lastMessage,
          // Append the token to the text string, or preserve existing text
          content: token
            ? (lastMessage.content || "") + token
            : lastMessage.content || "",
          // Merges sources smoothly when the event package fires
          sources: newSources ? newSources : lastMessage.sources,
        };
      }
      return updated;
    });
  }

  function handleParsedSSE(event: string, data: string) {
    switch (event) {
      case "sources":
        try {
          const parsedSources = JSON.parse(data) as string[];
          // Map sources directly to the current streaming item property instead of a root state hook
          updateLatestAssistantMessage("", parsedSources);
        } catch (error) {
          console.error("Failed to parse sources data JSON: ", error);
        }
        break;
      case "token":
        try {
          const token = JSON.parse(data);
          if (token) {
            updateLatestAssistantMessage(token);
          }
        } catch {
          updateLatestAssistantMessage(data);
        }
        break;
      case "done":
        setIsGenerating(false);
        if (notificationAudio) {
          notificationAudio.currentTime = 0;
          notificationAudio
            .play()
            .catch((err) => console.log("Audio blocked:", err));
        }
        break;
      default:
        break;
    }
  }

  async function fetchTextAsStream(apiURL: string, question: string) {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setIsGenerating(true);

    try {
      const response = await fetch(apiURL, {
        signal: abortControllerRef.current.signal,
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      setLoading(false);

      if (!response.body) {
        console.log(`no response body`);
        setIsGenerating(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let isDone = false;
      let buffer = "";

      while (!isDone) {
        const { value, done } = await reader.read();
        isDone = done;

        if (value) {
          buffer += decoder.decode(value, { stream: true });
          const blocks = buffer.split("\n\n");
          buffer = blocks.pop() || "";

          for (const block of blocks) {
            if (!block.trim()) continue;

            const lines = block.split("\n");
            let eventType = "";
            let dataValue = "";

            for (const line of lines) {
              if (line.startsWith("event:")) {
                eventType = line.replace("event:", "").trim();
              } else if (line.startsWith("data:")) {
                dataValue = line.replace("data:", "").trim();
              }
            }

            handleParsedSSE(eventType, dataValue);
            await delay(30);
          }
        }
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name !== "AbortError") {
        console.error(e);
      }
    } finally {
      setLoading(false);
    }
  }

  const handleChatSubmit = async (question: string): Promise<void> => {
    if (!question.trim()) return;

    if (popAudio) {
      popAudio.currentTime = 0;
      popAudio
        .play()
        .catch((err: unknown) => console.log("Audio blocked:", err));
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", content: question },
      { role: "assistant", content: "", sources: [] },
    ]);

    fetchTextAsStream(apiURL, question);
  };

  return (
    <section className="flex flex-col w-full mx-auto min-h-0 rounded-none md:rounded-lg overflow-hidden bg-paper">
      <div className="flex items-center justify-between gap-2 px-4 md:px-5 py-3 border-b border-line">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono text-[10px] uppercase tracking-wide shrink-0 text-black">
            Talking to Archivist
          </span>
        </div>
        <UploadChatFiles />
      </div>

      <ChatMessages messages={messages} />

      {(loading || isGenerating) && <TypingIndicator />}

      {/*//TODO: Suggested Chat prompts */}
      <ChatSuggestions />

      <div className="px-4 md:px-5 py-3 border-t border-line">
        <ChatForm handleChatSubmit={handleChatSubmit} />
      </div>
    </section>
  );
};

export default ChatBot;
