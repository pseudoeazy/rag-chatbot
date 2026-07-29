"use client";

import React, { useState, useRef } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useAuth } from "@/providers/AuthProvider";
import { toast } from "@/components/ui/toast"; // Or your exact path: "@/components/ui/toast"

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit
const ACCEPTED_TYPES = ["text/csv", "application/pdf", "text/plain"];

const fileSchema = z.object({
  file: z
    .custom<File>((val) => val instanceof File, {
      message: "Please select a file.",
    })
    .refine(
      (file) =>
        ACCEPTED_TYPES.includes(file.type) ||
        file.name.endsWith(".csv") ||
        file.name.endsWith(".txt"),
      {
        message: "Unsupported file type. Only CSV, PDF, and TXT are allowed.",
      },
    )
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB.",
    }),
});

const UploadChatFiles = () => {
  const { accessToken } = useAuth();
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const validation = fileSchema.safeParse({ file });
    if (!validation.success) {
      setError(validation.error.issues[0].message);
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please select a valid file first.");
      return;
    }

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("files", selectedFile);

    const token = accessToken || null;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chatbot/upload`,
        {
          method: "POST",
          headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }

      toast.add({
        title: "Success",
        description: `${selectedFile.name} was successfully processed.`,
      });

      setSelectedFile(null);
      setOpen(false);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected upload error occurred.",
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-(--accent-soft) text-(--ink) border-(--accent) shrink-0 flex items-center gap-1.5 cursor-pointer font-mono text-[11px] uppercase tracking-wide px-2.5 py-1.5 rounded-md border hover:bg-(--accent) hover:text-(--paper) transition-colors">
        Upload file
      </DialogTrigger>

      <DialogContent className="bg-(--paper-raised) border-(--line) text-(--text) sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle className="font-mono text-lg text-(--ink) uppercase tracking-wide">
            Ingest your own knowledge file
          </DialogTitle>
          <DialogDescription className="text-black text-xs mt-1">
            Upload custom data documents to target the chatbot&apos;s context.
            Supported formats:
            <strong className="text-(--ink) font-semibold">
              {" "}
              .pdf, .csv, .txt
            </strong>
            .
          </DialogDescription>
        </DialogHeader>

        <div className="bg-(--teal-soft) border border-(--teal)/30 rounded-md p-3 my-2 text-xs text-(--ink-soft) leading-relaxed">
          <p className="font-medium flex items-center gap-1.5 text-(--teal)">
            💡 Optimization Advisory
          </p>
          <p className="mt-1">
            To control model inference latency and compute costs, we strongly
            encourage uploading
            <strong className="text-(--ink)"> single-page files</strong> or
            small snippets. Heavy payloads exhaust system tokens faster.
          </p>
        </div>

        <form onSubmit={handleUpload} className="space-y-4 mt-2">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-(--line) hover:border-(--accent) rounded-lg p-6 text-center cursor-pointer bg-(--paper) transition-colors flex flex-col items-center justify-center gap-1"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.csv,.txt,text/plain,text/csv,application/pdf"
              className="hidden"
            />
            <span className="text-xs font-medium text-(--ink-soft)">
              {selectedFile
                ? selectedFile.name
                : "Click to look up or drop your file here"}
            </span>
            {selectedFile && (
              <span className="text-[10px] text-(--muted)">
                {Math.round(selectedFile.size / 1024)} KB
              </span>
            )}
          </div>

          {error && (
            <p className="text-xs text-(--danger) font-medium bg-(--danger)/10 px-2.5 py-1.5 rounded border border-(--danger)/20">
              ⚠️ {error}
            </p>
          )}

          {/* Action buttons */}
          <div className="flex justify-end gap-2 pt-2 border-t border-(--line)">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-3 py-1.5 text-xs font-medium border border-(--line) rounded-md text-(--muted) hover:bg-red-500 bg-red-400 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedFile || isUploading}
              className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold rounded-md bg-(--ink) text-(--paper) hover:bg-(--teal) disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              {isUploading ? "Uploading..." : "Process File"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadChatFiles;
