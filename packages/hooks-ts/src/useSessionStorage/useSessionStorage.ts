import { useState, useEffect } from 'react';

type UseSessionStorageReturn<T> = [T, (value: T) => void, () => void];

export function useSessionStorage<T>(
  key: string,
  initialValue: T,
): UseSessionStorageReturn<T> {
  // State to store the value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from sessionStorage', error);
      return initialValue;
    }
  });

  // Function to update the value in state and sessionStorage
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to sessionStorage', error);
    }
  };

  // Function to remove the value from state and sessionStorage
  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from sessionStorage', error);
    }
  };

  useEffect(() => {
    const item = sessionStorage.getItem(key);
    if (item === null) {
      sessionStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
