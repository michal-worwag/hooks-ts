# useThrottle

The `useThrottle` hook ensures that the value is updated at most once every specified delay period, even if the input value changes more frequently.

## Usage

```tsx
import React, { useState } from 'react';
import { useThrottle } from 'hooks-ts';

export function ThrottleExample() {
  const [input, setInput] = useState('');
  const throttledInput = useThrottle(input, 1000);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
      <p>Original input: {input}</p>
      <p>Throttled input: {throttledInput}</p>
    </div>
  );
}
```

### Returns

`throttledValue: T` - The throttled version of the input value, which updates only after the specified delay.

## Hook

```ts
import { useState, useEffect } from 'react';

export function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    // Cleanup the timeout if the effect runs again before the delay completes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}
```
