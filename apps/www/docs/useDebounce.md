# useDebounce

The `useDebounce` hook delays updating a value until after a specified amount of time has passed. It is useful for scenarios like debouncing user input or limiting the frequency of expensive operations.

## Usage

```tsx
import { useState } from 'react';
import { useDebounce } from 'hooks-ts';

export default function App() {
  const [value, setValue] = useState<string>('');

  const debounced = useDebounce(value, 500);

  return (
    <div>
      <p>Debounced value: {debounced ? debounced : 'Init'}!</p>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
```

### Returns

`debouncedValue: T` - The debounced version of the input value, which updates only after the specified delay (in milliseconds) has passed without further changes.

## Hook

```ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```
