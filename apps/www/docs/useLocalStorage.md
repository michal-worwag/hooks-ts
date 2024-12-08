# useLocalStorage

The `useLocalStorage` hook provides a convenient way to manage state that is persisted in `localStorage`. It allows you to retrieve, set, and persist values across page reloads, making it ideal for saving user preferences or session data.

## Usage

```tsx
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks-ts';

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useLocalStorage<number>('count', 0);

  useEffect(() => {
    setValue(count);
  }, [count, setValue]);
  return (
    <div>
      <p>Count: {value}</p>
      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(() => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
```

### Returns

`storedValue: T` - The current value stored in localStorage, or the initialValue if no value is found.

`setValue: (value: T) => void` - A function to update the storedValue and save the updated value to localStorage.

## Hook

```ts
import { useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```
