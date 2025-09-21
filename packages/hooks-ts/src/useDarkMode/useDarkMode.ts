import { useEffect, useState, useCallback } from 'react';
import { useLocalStorage } from '../useLocalStorage';

const isServer = typeof window === 'undefined';

/**
 * Custom hook for managing dark mode with localStorage persistence
 * @returns [isDarkMode: boolean, toggleDarkMode: () => void]
 */
export function useDarkMode(): [boolean, () => void] {
  // Get initial mode from localStorage or system preference
  const getInitialMode = useCallback((): boolean => {
    if (isServer) {
      return false; // Default for SSR
    }

    try {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.error('Error reading dark mode preference:', error);
      return false;
    }
  }, []);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialMode);
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  // Sync with localStorage when isDarkMode changes
  useEffect(() => {
    try {
      setDarkMode(isDarkMode);
    } catch (error) {
      console.error('Error saving dark mode preference:', error);
    }
  }, [isDarkMode, setDarkMode]);

  // Apply dark mode class to body
  useEffect(() => {
    if (isServer) return;

    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }

    // Cleanup function
    return () => {
      body.classList.remove('dark-mode');
    };
  }, [isDarkMode]);

  const toggleDarkMode = useCallback((): void => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  return [isDarkMode, toggleDarkMode];
}
