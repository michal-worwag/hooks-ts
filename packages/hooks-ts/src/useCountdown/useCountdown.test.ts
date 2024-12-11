import { renderHook, act } from '@testing-library/react';
import { useCountdown } from './useCountdown';
import { describe, expect, it, vitest } from 'vitest';

describe('useCountdown', () => {
  vitest.useFakeTimers();
  it('should initialize with the given initial seconds', () => {
    const { result } = renderHook(() => useCountdown(10));
    expect(result.current[0]).toBe(10); // Initial countdown value
  });

  it('should decrement the countdown every second', () => {
    const { result } = renderHook(() => useCountdown(5));

    act(() => {
      vitest.advanceTimersByTime(1000); // Simulate 1 second passing
    });
    expect(result.current[0]).toBe(4);

    act(() => {
      vitest.advanceTimersByTime(3000); // Simulate 3 more seconds
    });
    expect(result.current[0]).toBe(1);
  });

  it('should reset the countdown to the initial value', () => {
    const { result } = renderHook(() => useCountdown(10));
    const [, reset] = result.current;

    act(() => {
      vitest.advanceTimersByTime(5000); // Simulate 5 seconds
    });
    expect(result.current[0]).toBe(5);

    act(() => {
      reset(); // Reset the countdown
    });
    expect(result.current[0]).toBe(10);
  });
});
