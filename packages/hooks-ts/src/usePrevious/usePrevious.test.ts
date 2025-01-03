import { renderHook, act } from '@testing-library/react';
import { usePrevious } from './usePrevious';
import { describe, expect, it } from 'vitest';

describe('usePrevious', () => {
  it('should return undefined on initial render', () => {
    const { result } = renderHook(() => usePrevious(0));
    expect(result.current).toBeUndefined();
  });

  it('should return the previous value after an update', () => {
    let value = 0;
    const { result, rerender } = renderHook(() => usePrevious(value));

    act(() => {
      value = 1;
      rerender();
    });

    expect(result.current).toBe(0);

    act(() => {
      value = 2;
      rerender();
    });

    expect(result.current).toBe(1);
  });

  it('should correctly handle non-primitive values', () => {
    let value = { a: 1 };
    const { result, rerender } = renderHook(() => usePrevious(value));

    act(() => {
      value = { a: 2 };
      rerender();
    });

    expect(result.current).toEqual({ a: 1 });

    act(() => {
      value = { a: 3 };
      rerender();
    });

    expect(result.current).toEqual({ a: 2 });
  });
});
