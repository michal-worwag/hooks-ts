# useCounter

The `useCounter` hook provides a simple way to manage a counter state. It initializes the counter with a specified value and provides functions to `increment`, `decrement`, `reset`, and `set` the counter value.

## Usage

```tsx
import { useCounter } from 'hooks-ts';

export default function UseCounterExample() {
  const { count, increment, decrement, reset, set } = useCounter(5);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => set(10)}>Set to 10</button>
    </div>
  );
}
```

### Returns

`count: number` - The current value of the counter.

`increment: () => void` - A function to increase the counter value by 1.

`decrement: () => void` - A function to decrease the counter value by 1.

`reset: () => void` - A function to reset the counter to its initial value.

`set: (value: number) => void` - A function to set the counter to a specific value.

## Hook

```ts
import { useState } from 'react';

type UseCounterReturn = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  set: (value: number) => void;
};

export function useCounter(initialValue: number = 0): UseCounterReturn {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);
  const set = (value: number) => setCount(value);

  return { count, increment, decrement, reset, set };
}
```
