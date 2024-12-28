import { useEffect, useRef } from 'react';

/**
 * A React hook to execute a callback function after a specified delay.
 *
 * @param callback - The function to execute after the timeout.
 * @param delay - The timeout duration in milliseconds. If `null`, the timeout will not run.
 */

export function useTimeout(callback: () => void, delay: number | null): void {
  const callbackRef = useRef(callback);

  // Update the callback reference if it changes.
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set the timeout.
  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => {
      callbackRef.current();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);
}
