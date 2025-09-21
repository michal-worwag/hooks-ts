import { useState, useCallback } from 'react';

const isServer = typeof window === 'undefined';

const isLocalStorageAvailable = (): boolean => {
  if (isServer) return false;

  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};

/**
 * Custom hook for localStorage with SSR support and error handling
 * @param key - The localStorage key
 * @param initialValue - Initial value if key doesn't exist
 * @returns [value, setValue]
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prevValue: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (isServer || !isLocalStorageAvailable()) {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      try {
        const valueToStore =
          typeof value === 'function'
            ? (value as (prevValue: T) => T)(storedValue)
            : value;

        if (!isServer && isLocalStorageAvailable()) {
          localStorage.setItem(key, JSON.stringify(valueToStore));
        }

        setStoredValue(valueToStore);
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
        // Still update state even if localStorage fails
        const valueToStore =
          typeof value === 'function'
            ? (value as (prevValue: T) => T)(storedValue)
            : value;
        setStoredValue(valueToStore);
      }
    },
    [key, storedValue],
  );

  return [storedValue, setValue];
}
