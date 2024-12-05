# useLocalStorage

## Usage

```ts
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
