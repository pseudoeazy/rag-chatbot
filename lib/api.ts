// lib/api.ts

import { supabase } from "./supabase";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function api<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: session ? `Bearer ${session.access_token}` : "",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
