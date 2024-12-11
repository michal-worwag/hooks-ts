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
