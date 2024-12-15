# useCountdown

The `useCountdown` hook manages a countdown timer that decrements every second and provides a way to reset it.

## Usage

```tsx
import { useCountdown } from 'hooks-ts';

export default function UseCountdownExample() {
  const [timeLeft, reset] = useCountdown(10);

  return (
    <div>
      <p>Time left: {timeLeft} seconds</p>
      <button onClick={reset}>Reset Countdown</button>
    </div>
  );
}
```

### Returns

`timeLeft: number` - The number of seconds remaining in the countdown.

`reset: () => void` - A function to reset the countdown to its initial value.

## Hook

```ts
import { useState, useEffect } from 'react';

/**
 * A custom hook for a countdown timer.
 * @param initialSeconds - The starting number of seconds for the countdown.
 * @returns An array containing the current countdown time and a function to reset the countdown.
 */
export function useCountdown(initialSeconds: number): [number, () => void] {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

  const reset = () => setTimeLeft(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return [timeLeft, reset];
}
```
