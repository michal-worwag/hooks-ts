import { useState, useEffect } from 'react';

const isServer = typeof window === 'undefined';

/**
 * Custom hook for media query matching with SSR support
 * @param query - CSS media query string
 * @returns boolean - true if media query matches, false otherwise
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (isServer) {
      return false; // Default for SSR
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (isServer) return;

    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener('change', documentChangeHandler);

    // Cleanup listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [query]);

  return matches;
}
