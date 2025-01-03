# usePrevious

The `usePrevious` hook captures the previous value of a state or prop, useful for comparisons or animations.

## Usage

```tsx
import { useState } from 'react';
import usePrevious from 'hooks-ts';

function UsePreviousExample() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```

### Returns

`previousValue: T | undefined` - The previous value of the input:

- `T`: The last tracked value if available.
- `undefined`: If called on the initial render or no previous value exists.

## Hook

```ts
import { useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const currentRef = useRef<T>(value);
  const previousRef = useRef<T | undefined>(undefined);

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
```
