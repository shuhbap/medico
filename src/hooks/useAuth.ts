import { create } from "zustand"; // if you don't want zustand, use simple state below

// Lightweight auth store using React state (no external dep needed)
import { useCallback, useEffect, useState } from "react";
import type { User } from "@/types";

const STORAGE_KEY = "medico_user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        /* ignore */
      }
    }
  }, []);

  const login = useCallback((u: User) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  return { user, login, logout, isAuthenticated: !!user };
}
