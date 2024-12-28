import { renderHook } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { useTimeout } from './useTimeout';

describe('useTimeout', () => {
  vi.useFakeTimers();

  it('should execute the callback after the specified delay', () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, 1000));

    expect(callback).not.toHaveBeenCalled();

    // Fast forward time
    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not execute the callback if delay is null', () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, null));

    vi.advanceTimersByTime(1000);
    expect(callback).not.toHaveBeenCalled();
  });

  it('should clear the timeout when the delay changes', () => {
    const callback = vi.fn();
    const { rerender } = renderHook(
      ({ delay }) => useTimeout(callback, delay),
      { initialProps: { delay: 1000 } },
    );

    // Advance half the time, then change delay
    vi.advanceTimersByTime(500);
    rerender({ delay: 2000 });

    // Advance remaining time for the first timeout
    vi.advanceTimersByTime(500);
    expect(callback).not.toHaveBeenCalled();

    // Advance full time for the new timeout
    vi.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should clean up the timeout on unmount', () => {
    const callback = vi.fn();
    const { unmount } = renderHook(() => useTimeout(callback, 1000));

    unmount();

    // Fast forward time
    vi.advanceTimersByTime(1000);
    expect(callback).not.toHaveBeenCalled();
  });
});
