import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('should initialize the counter with the given initial value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('should initialize the counter with 0 if no initial value is provided', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment the counter value', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
  });

  it('should decrement the counter value', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  it('should reset the counter to its initial value', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(5);
  });

  it('should set the counter to a specific value', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.set(10);
    });
    expect(result.current.count).toBe(10);
  });

  it('should handle multiple increments and decrements correctly', () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.decrement();
    });
    expect(result.current.count).toBe(1);
  });
});
