import { useRef } from 'react';

/**
 * A custom React hook to store the previous value of a given state or prop.
 *
 * @param value - The current value to track.
 * @returns The previous value of the given input.
 *
 * ### Returns
 * `previousValue: T | undefined` - The previous value of the input:
 * - `T`: The last tracked value if available.
 * - `undefined`: If called on the initial render or no previous value exists.
 */
export function usePrevious<T>(value: T): T | undefined {
  const currentRef = useRef<T>(value);
  const previousRef = useRef<T | undefined>(undefined);

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
