import { type KeyboardEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const chatSchema = z.object({
  question: z
    .string()
    .min(1, "question cannot be empty")
    .transform((val) => val.trim())
    .refine((val) => val.length > 0, "question cannot be empty"),
});

export type ChatFormData = z.infer<typeof chatSchema>;

type Props = {
  // ✅ Explicit type matching for the streaming trigger
  handleChatSubmit: (question: string) => void;
};

const ChatForm = ({ handleChatSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ChatFormData>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      question: "",
    },
  });

  const onSubmit = (data: ChatFormData) => {
    // Pass the validated question directly to your streaming transport loop
    handleChatSubmit(data.question);
    reset({ question: "" });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSubmit(onSubmit)();
    }
  };

  return (
    <form
      id="chatForm"
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-end gap-2"
    >
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
        {...register("question", {
          required: true,
          validate: (data) => data.trim().length > 0,
        })}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        disabled={!isValid}
        className="shrink-0 h-10.5 px-4 rounded-md font-mono text-xs uppercase tracking-wide transition-transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          background: "var(--ink)",
          color: "var(--paper-raised)",
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
