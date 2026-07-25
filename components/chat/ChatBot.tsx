"use client";

import UploadChatFiles from "./UploadChatFiles";
import ChatMessages from "./ChatMessages";
import ChatSuggestions from "./ChatSuggestions";
import ChatForm from "./ChatForm";

const popAudio = new Audio("/sounds/pop.mp3");
popAudio.volume = 0.2;
const notificationAudio = new Audio("/sounds/notification.wav");
notificationAudio.volume = 0.2;

const ChatBot = () => {
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
      <ChatMessages />
      <ChatSuggestions />
      <div className="px-4 md:px-5 py-3 border-t border-line">
        <div
          id="uploadError"
          className="hidden font-mono text-xs mb-2 px-2.5 py-1.5 rounded-md border-danger border"
          style={{
            background: "rgba(177,72,52,.1)",
          }}
        />
        <ChatForm />
      </div>
    </section>
  );
};

export default ChatBot;
