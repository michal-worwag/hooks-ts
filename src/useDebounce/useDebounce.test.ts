import { describe, expect, it, vitest } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  vitest.useFakeTimers();
  it('should debounce the value', () => {
    const delay = 100;
    const initialValue = 'Hello World';
    const { result } = renderHook(() =>
      useDebounce({ value: initialValue, delay }),
    );

    expect(result.current).toBe(initialValue);

    // Update the value but the debounced value should not change
    act(() => {
      result.current = 'new value';
    });

    expect(result.current).toBe('new value');

    // Change timers by more than delay
    act(() => {
      vitest.advanceTimersByTime(200);
    });

    expect(result.current).toBe('new value');

    // Change timers again by more than delay
    act(() => {
      vitest.advanceTimersByTime(200);
    });

    expect(result.current).toBe('new value');
  });
});
