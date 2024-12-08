import { renderHook, act } from '@testing-library/react';
import { useThrottle } from './useThrottle';
import { describe, expect, it, vitest } from 'vitest';

describe('useThrottle', () => {
  vitest.useFakeTimers();
  it('should throttle updates to the value', () => {
    const { result } = renderHook(
      ({ value, delay }) => useThrottle(value, delay),
      { initialProps: { value: 'test1', delay: 1000 } },
    );

    expect(result.current).toBe('test1');

    act(() => {
      result.current = 'test2';
    });

    act(() => {
      vitest.advanceTimersByTime(1000); // Simulate 1 second passing
    });

    expect(result.current).toBe('test2'); // Value updates after the delay
  });
});
