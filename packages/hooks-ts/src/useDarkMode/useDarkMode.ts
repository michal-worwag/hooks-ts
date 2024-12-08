import { useEffect, useState } from 'react';
import { useLocalStorage } from '../useLocalStorage';

export function useDarkMode(): [boolean, () => void] {
  // Checking user preferences from the system
  const getInitialMode = (): boolean => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode); // Return of stored value
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches; // Default mode
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialMode);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  // Switching mode
  const toggleDarkMode = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Saving preferences in localStorage
    setDarkMode(isDarkMode);

    // Adding class to the body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode, setDarkMode]);

  return [isDarkMode, toggleDarkMode];
}
