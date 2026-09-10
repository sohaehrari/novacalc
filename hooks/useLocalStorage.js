"use client";

import { useEffect, useState } from "react";

// Provides reusable browser storage logic for persisting NexaCalc data between sessions
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue !== null) {
        setValue(JSON.parse(storedValue));
      }
    } catch {
      setValue(initialValue);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Keeps the application usable when browser storage is unavailable
    }
  }, [key, value, isLoaded]);

  return [value, setValue];
}
